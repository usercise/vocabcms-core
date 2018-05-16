import PluginManager from '../PluginManager';
import 'jest';

describe('PluginManager', () => {
  let pluginManager: any;
  beforeEach(() => {
    pluginManager = new PluginManager();
  });

  it('should to be defined', () => {
    expect(pluginManager).toBeDefined();
  });

  it('should have no plugins registered', () => {
    expect(pluginManager.plugins).toBeDefined();
    expect(pluginManager.plugins).toEqual({});
  });

  it('should have component registry', () => {
    expect(pluginManager.componentRegistry).toBeDefined();
  });

  it('should have no components registered', () => {
    expect(pluginManager.componentRegistry).toBeDefined();
    expect(pluginManager.componentRegistry.keys()).toHaveLength(0);
  });

  it('should have template registry', () => {
    expect(pluginManager.templateRegistry).toBeDefined();
  });

  it('should have no template registered', () => {
    expect(pluginManager.templateRegistry).toBeDefined();
    expect(pluginManager.templateRegistry.keys()).toHaveLength(0);
  });

});
