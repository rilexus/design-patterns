import {Tablet} from "./Tablet";
import {Phone} from "./Phone";

const devices = {Tablet: Tablet, Phone: Phone}


const DeviceFactory = function(){
  return {
    create(type = 'Phone', attributes:any = {}){
      const Device = devices[type]
      return new Device(...attributes)
    }
  }
}

export {
  DeviceFactory
}