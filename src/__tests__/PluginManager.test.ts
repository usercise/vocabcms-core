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

  it('should have 1 entry registered after register call', () => {
    const testObj = { displayName: 'Test 1'};
    pluginManager.register('test', testObj);

    expect(pluginManager.plugins.test).toBeDefined();
    expect(pluginManager.plugins.test).toEqual(testObj);
  });

  it('should update component registry after register call', () => {
    const componentName = 'component1';
    const componentValue = ['first'];
    const testObj = { displayName: 'Test 2', components: {
        'component1': componentValue
      }
    };
    const pluginName = 'test';
    const pluginComponentName = `${pluginName}::${componentName}`;
    const componentRegistry = pluginManager.componentRegistry;
    pluginManager.register(pluginName, testObj);

    expect(pluginManager.plugins.test).toBeDefined();
    expect(pluginManager.plugins.test).toEqual(testObj);
    expect(componentRegistry.keys()).toHaveLength(1);
    expect(componentRegistry.has(pluginComponentName)).toEqual(true);
    expect(componentRegistry.get(pluginComponentName)).toHaveLength(1);
    expect(componentRegistry.get(pluginComponentName)).toEqual(componentValue);
  });

    it('should update template registry after register call', () => {
      const templateName = 'template1';
      const templateValue = ['first'];
      const testObj = { displayName: 'Test 2', templates: {
          'template1': templateValue
        }
      };
      const pluginName = 'test';
      const pluginTemplateName = `${pluginName}::${templateName}`;
      const templateRegistry = pluginManager.templateRegistry;
      pluginManager.register(pluginName, testObj);

      expect(pluginManager.plugins.test).toBeDefined();
      expect(pluginManager.plugins.test).toEqual(testObj);
      expect(templateRegistry.keys()).toHaveLength(1);
      expect(templateRegistry.has(pluginTemplateName)).toEqual(true);
      expect(templateRegistry.get(pluginTemplateName)).toHaveLength(1);
      expect(templateRegistry.get(pluginTemplateName)).toEqual(templateValue);
    });

});
