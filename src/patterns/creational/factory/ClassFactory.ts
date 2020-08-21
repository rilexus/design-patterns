import {
  AuthenticationService, HTTPService,
  UserController,
  UserService
} from "../../structural/dependency-injection/services";

export class ClassFactory {
  createUserController(){
    const httpService = new HTTPService()
    return new UserController(new UserService(new AuthenticationService(httpService), httpService))
  }

}

