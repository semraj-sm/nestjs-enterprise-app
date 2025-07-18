import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class AppLogger implements LoggerService {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console(),
      ],
    });
  }

  log(message: string, context?: string) {
    this.logger.info(message, { context });
  }
  error(message: string, trace?: string, context?: string) {
    this.logger.error(message, { trace, context });
  }
  warn(message: string, context?: string) {
    this.logger.warn(message, { context });
  }
  debug?(message: string, context?: string) {
    this.logger.debug(message, { context });
  }
  verbose?(message: string, context?: string) {
    this.logger.verbose(message, { context });
  }
}
