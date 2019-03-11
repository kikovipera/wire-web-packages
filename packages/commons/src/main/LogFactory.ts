/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import ansiRegex = require('ansi-regex');
import * as fs from 'fs-extra';
import * as logdown from 'logdown';
import * as moment from 'moment';
import * as path from 'path';

interface LoggerOptions {
  color?: string;
  forceEnable?: boolean;
  logFilePath?: string;
  namespace?: string;
  separator?: string;
}

class LogFactory {
  private static readonly logFilePath?: string = undefined;
  private static readonly namespace?: string = undefined;

  static COLOR_STEP = {
    B: 97,
    G: 79,
    R: 31,
  };

  static COLOR_CODE = {
    B: 0,
    G: 0,
    R: 0,
  };

  static getColor(): string {
    LogFactory.COLOR_CODE.R = (LogFactory.COLOR_CODE.R + LogFactory.COLOR_STEP.R) % 256;
    LogFactory.COLOR_CODE.G = (LogFactory.COLOR_CODE.G + LogFactory.COLOR_STEP.G) % 256;
    LogFactory.COLOR_CODE.B = (LogFactory.COLOR_CODE.B + LogFactory.COLOR_STEP.B) % 256;

    const rHex = Number(LogFactory.COLOR_CODE.R)
      .toString(16)
      .padStart(2, '0');
    const gHex = LogFactory.COLOR_CODE.G.toString(16).padStart(2, '0');
    const bHex = LogFactory.COLOR_CODE.B.toString(16).padStart(2, '0');

    return `#${rHex}${gHex}${bHex}`;
  }

  static addTimestamp(logTransport: logdown.TransportOptions): void {
    if (this.namespace && ~logTransport.msg.indexOf(this.namespace)) {
      logTransport.args.unshift(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    }
  }

  static async writeTransport(logTransport: logdown.TransportOptions): Promise<void> {
    const [time] = logTransport.args;
    const logMessage = `${time} ${logTransport.msg}`;

    if (this.logFilePath) {
      await LogFactory.writeMessage(logMessage, this.logFilePath);
    }
  }

  static async writeMessage(message: string, logFilePath: string): Promise<void> {
    const withoutColor = message.replace(ansiRegex(), '');
    try {
      await fs.outputFile(logFilePath, `${withoutColor}\r\n`, {
        encoding: 'utf8',
        flag: 'a',
      });
    } catch (error) {
      console.warn(`Cannot write to log file "${this.logFilePath}": ${error.message}`, error);
    }
  }

  static createLoggerName(fileName: string, namespace: string, separator: string): string {
    if (typeof window === 'undefined') {
      fileName = path.basename(fileName, path.extname(fileName));
    }
    return [namespace, fileName].join(separator);
  }

  static getLogger(name: string, options?: LoggerOptions): logdown.Logger {
    const defaults = {
      color: LogFactory.getColor(),
      forceEnable: false,
      logFilePath: '',
      namespace: typeof window === 'undefined' ? String(process.env.npm_package_name) : '',
      separator: '::',
    };
    const config = {...defaults, ...options};

    if (logdown.transports.length === 0) {
      logdown.transports.push(LogFactory.addTimestamp.bind({namespace: config.namespace}));
      logdown.transports.push(LogFactory.writeTransport.bind({logFilePath: config.logFilePath}));
    }
    const loggerName = this.createLoggerName(name, config.namespace, config.separator);

    const logger = logdown(loggerName, {
      logger: console,
      markdown: false,
      prefixColor: config.color,
    });

    if (config.forceEnable) {
      logger.state.isEnabled = true;
    }

    return logger;
  }
}

export {LogFactory, LoggerOptions};
