import {StorageReader} from "./patterns/structural/adapter/StorageReader";
import {StorageAdapter} from "./patterns/structural/adapter/StorageAdapter";

const reader = new StorageReader<string | number>(new StorageAdapter());
reader.saveData('id:1', 1);
reader.saveData('id:2', 'data string');



