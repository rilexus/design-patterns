const proxyTarget = {
  lastName: 'target_last_name',
  getLastName: () => {
    return this.lastName
  },
}

const proxyHandler = {
  get: (target, key) => {
    console.log('get: ', target, key)
    return target[key]
  },

  // for functions as target
  apply: (target, thisArg, args) => {
    console.log('apply: ', thisArg, args)
    return null
  },
}

const nativeProxy = new Proxy(proxyTarget, proxyHandler)

class MyClass {
  constructor(private name: string, private  lastName: string) {}

  setName(name: string){
    this.name = name
  }

  getName(){
    return this.name
  }
}

class MyClassProxy {
  target: MyClass

  constructor(public name: string, public lastName: string) {
    this.target = new MyClass(name, lastName)
  }

  getName(){
    return this.target.getName()
  }



}


export { proxyTarget, proxyHandler, nativeProxy }