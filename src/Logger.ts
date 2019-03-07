import forEach from 'lodash/each';

export class Logger {
  backends: any[];

  constructor() {
    this.backends = [];
    if (process.env.NODE_ENV !== 'production') { // Need to add a localStorage check as well.
      this.backends.push(console);
    }
  }

  addLogger(backend: any): void {
    this.backends.push(backend);
  }

  log(): void {
    forEach(this.backends, (entry: any) => {
      if ('function' === typeof entry.log) { entry.log(...arguments) }
    });
  }

  debug(): void {
    forEach(this.backends, (entry: any) => {
      if ('function' === typeof entry.debug) { entry.debug(...arguments) }
    });
  }

  info(): void {
    forEach(this.backends, (entry: any) => {
      if ('function' === typeof entry.info) { entry.info(...arguments) }
    });
  }

  warn(): void {
    forEach(this.backends, (entry: any) => {
      if ('function' === typeof entry.warn) { entry.warn(...arguments) }
    });
  }

  error(): void {
    forEach(this.backends, (entry: any) => {
      if ('function' === typeof entry.error) { entry.error(...arguments) }
    });
  }

  trace(): void {
    forEach(this.backends, (entry: any) => {
      if ('function' === typeof entry.trace) { entry.trace(...arguments) }
    });
  }


  assert(): void {
    forEach(this.backends, (logger: any) => {
      if ('function' === typeof logger.assert) { logger.assert(...arguments) }
    });
  }
}

const logger = new Logger();

export default logger;
