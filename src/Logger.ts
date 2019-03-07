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

  runLoggers(name: string, ...args: any[]): void {
    this.backends.forEach((entry: any) => {
      if ('function' === typeof entry[name]) { entry[name](...args) }
    });
  }

  log(...args: any[]): void {
    this.runLoggers('log', args);
  }

  debug(...args: any[]): void {
    this.runLoggers('debug', args);
  }

  info(...args: any[]): void {
    this.runLoggers('info', args);
  }

  warn(...args: any[]): void {
    this.runLoggers('warn', args);
  }

  error(...args: any[]): void {
    this.runLoggers('error', args);
  }

  trace(...args: any[]): void {
    this.runLoggers('trace', args);
  }


  assert(...args: any[]): void {
    this.runLoggers('assert', args);
  }
}

const logger = new Logger();

export default logger;
