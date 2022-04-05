import {StorageInterface} from "./StorageAdapter";

export type DataID = string;

export interface StorageReaderInterface<StorageDataType> {
  readData(byID: DataID):StorageDataType;
  saveData(id: DataID, data: StorageDataType);
}

// separate data from the data access logic
export class StorageReader<DataType> implements StorageReaderInterface<DataType> {
  private storage: StorageInterface<DataType>;

  constructor(storage: StorageInterface<DataType>){
    this.storage = storage;
  }

  public readData(byID: DataID): DataType {
    return this.storage.getData(byID);
  }

  public saveData(id: DataID, data: DataType){
    this.storage.putData(id, data);
  }
}
