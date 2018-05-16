import { IMap } from './interface';
import { keys, has } from 'lodash';

export default class PluginRegistry {
    type: string;
    _registry: {[key:string]:any};

    constructor(type: string) {
        this.type = type;
        this._registry = {};
    }

    register(key: string, value: any): void {
        console.log(`Register ${this.type}: ${key} = ${value}`);
        this._registry.set(key, value);
    }

    entries(): IMap<any> {
        return this._registry;
    }

    keys(): string[] {
        return keys(this._registry);
    }

    has(key: string): boolean {
        return has(this._registry, key);
    }

    get(key: string): any {
        return this._registry[key] || null; // For rendering we need none existing entries to return null so react ignores them
    }
}
