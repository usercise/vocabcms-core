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

  register(key: string, entry: {displayName: string, components?: Map<string, object>, templates?: Map<string, object>}): void {
    if (has(this.plugins, key)) {
      throw "Duplicate entry";
    }
    this.plugins[key] = entry;
    if (entry.components) {
      each(entry.components, (value: object, k: string) => this.componentRegistry.register(`${key}::${k}`, value));
    }
    if (entry.templates) {
      each(entry.templates, (value: object, k: string) => this.templateRegistry.register(`${key}::${k}`, value));
    }
  }
}
