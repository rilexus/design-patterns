import {DataID} from "./StorageReader";

class WordStorage {
  storage = []; // any data structure

  put(id: string, data: string){
    this.storage.push({id,data})
  }

  pop(){
    // get data here
  }
}

class NumberStorage {
  storage = []; // any data structure

  save(id: string, data: number){
    this.storage.push({id, data});
  }

  get(id: string){
    // get data here
  }
}

export interface StorageInterface<DataType> {
  getData(byId: DataID): DataType;
  putData(id: DataID, data: DataType): void;
}

// combine two different interfaces (WordStorage, NumberStorage) to match one specific interface(StorageInterface)
export class StorageAdapter<DataType> implements StorageInterface<DataType> {
  wordStorage: WordStorage;
  numberStorage: NumberStorage;

  constructor(){
    this.numberStorage = new NumberStorage();
    this.wordStorage = new WordStorage();
  }

  getData(byId: string): DataType {
    return // get data from storage
  }

  putData(id: string, data: DataType): void {
    // combine two different storage interfaces
    if (typeof data === "string"){
      this.wordStorage.put(id, data);
    } else if(typeof data === 'number'){
      this.numberStorage.save(id, data)
    }
  }
}
