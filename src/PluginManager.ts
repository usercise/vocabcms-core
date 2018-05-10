import PluginRegistry from './PluginRegistry';
import { has, each } from 'lodash';

class PluginManager {
  plugins: {[key:string]:object};
  componentRegistry: PluginRegistry;
  templateRegistry: PluginRegistry;

  constructor() {
    this.plugins = {};
    this.componentRegistry = new PluginRegistry('Component');
    this.templateRegistry = new PluginRegistry('Template');
  }

  register(name: string, entry: any): void {
    if (has(this.plugins, name)) {
      throw "Duplicate entry";
    }
    this.plugins[name] = entry;
    if (entry.components) {
      each(entry.components, (key: string, value: object) => this.componentRegistry.register(`${name}::${key}`, value));
    }
    if (entry.templates) {
      each(entry.templates, (key: string, value: object) => this.templateRegistry.register(`${name}::${key}`, value));
    }
  }
}
