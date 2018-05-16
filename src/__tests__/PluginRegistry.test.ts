import PluginRegistry from '../PluginRegistry';
import 'jest';

describe('PluginRegistry', () => {
  let pluginRegistry: PluginRegistry;
  beforeEach(() => {
    pluginRegistry = new PluginRegistry('test');
  });

  it('to have type test', () => {
    expect(pluginRegistry.type).toEqual('test');
  });

  it('should be empty', () => {
    expect(pluginRegistry.keys().length).toEqual(0);
    expect(pluginRegistry.keys()).toEqual([]);
  });

  it('should have 1 entry after register', () => {
    const testObj = { 'json': true };
    const key = 'hello';
    expect(pluginRegistry.keys().length).toEqual(0);
    expect(pluginRegistry.keys()).toEqual([]);
    expect(pluginRegistry.has(key)).toEqual(false);
    expect(pluginRegistry.get(key)).toEqual(null);
    pluginRegistry.register(key, testObj);
    expect(pluginRegistry.keys().length).toEqual(1);
  });

  it('should have key after register', () => {
    const testObj = { 'json': true };
    const key = 'hello';
    expect(pluginRegistry.keys().length).toEqual(0);
    expect(pluginRegistry.keys()).toEqual([]);
    expect(pluginRegistry.has(key)).toEqual(false);
    expect(pluginRegistry.get(key)).toEqual(null);
    pluginRegistry.register(key, testObj);
    expect(pluginRegistry.keys().length).toEqual(1);
    expect(pluginRegistry.keys()).toEqual([key]);
    expect(pluginRegistry.has(key)).toEqual(true);
  });

  it('should be able to get entry after register', () => {
    const testObj = { 'json': true };
    const key = 'hello';
    expect(pluginRegistry.keys().length).toEqual(0);
    expect(pluginRegistry.keys()).toEqual([]);
    expect(pluginRegistry.has(key)).toEqual(false);
    expect(pluginRegistry.get(key)).toEqual(null);
    pluginRegistry.register(key, testObj);
    expect(pluginRegistry.get(key)).toEqual(testObj);
  });
});
