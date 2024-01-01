class PooledObject {}
interface ObjectPoolInterface {
  acquire(): PooledObject;
  release(pooledObject: PooledObject): void;
}

class Map {
  private _entries: any = {};

  add(key, entry) {
    this._entries = { ...this._entries, [key]: entry };
  }

  remove(key: string) {
    const { [key]: _, ...rest } = this._entries;
    this._entries = rest;
    return _;
  }

  isEmpty() {
    return Object.keys(this._entries).length === 0;
  }

  entries() {
    // @ts-ignore
    return Object.entries(this._entries);
  }

  removeByRef(entry) {
    // @ts-ignore
    const entries = Object.entries(this._entries).filter(([key, e]) => {
      return entry !== e;
    });

    // @ts-ignore
    this._entries = Object.fromEntries(entries);
  }

  count() {
    // @ts-ignore
    return Object.entries(this._entries()).length;
  }
}

class ObjectPool implements ObjectPoolInterface {
  // make singleton
  private static _instance = null;

  private _expTime = 6000; // 6sec
  private _inUSe: Map = new Map();
  private _available: Map = new Map();

  constructor() {
    if (ObjectPool._instance === null) {
      ObjectPool._instance = this;
    }
    return ObjectPool._instance;
  }

  getInstance() {
    return ObjectPool._instance;
  }

  acquire() {
    const now = Date.now();

    if (this._available.isEmpty()) {
      return this._createObject();
    }

    const entries = this._available.entries();
    for (let i = 0; i < entries.length; i++) {
      const [time, entry] = entries[i];
      if (now - time > this._expTime) {
        this._available.remove(time);
      } else {
        const o = this._available.remove(time);
        this._inUSe.add(time, o);
        return o;
      }
    }

    return this._createObject();
  }

  release(obj) {
    const now = Date.now();
    this._available.add(now, obj);
    this._inUSe.removeByRef(obj);
  }

  private _createObject(): PooledObject {
    const now = Date.now();
    const pooledObject = new PooledObject();

    this._inUSe.add(now, pooledObject);

    return pooledObject;
  }
}

export default ObjectPool;
