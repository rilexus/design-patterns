export class Logger {
  private static _instance: Logger;

  constructor(){
    if (!Logger._instance){
      Logger._instance = this;
    }
    return Logger._instance
  }
  
  public static get instance(){
    return Logger._instance;
  }

  log(...args){
    console.log(...args);
  }
}

