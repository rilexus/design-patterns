import {Singleton} from "../../creational/singleton/Singleton";

export class User {
  name: string;
  password: string;
  token: string
}

export class HTTPService extends Singleton {

  constructor() {
    super();
  }

  get(url: string, params: any): Promise<any> {
    return new Promise<any>(() => {})
  }

  post(url: string, params: any): Promise<any> {
    return new Promise<any>(() => {})
  }
}

export class AuthenticationService {
  httpService: HTTPService

  constructor(httpService: HTTPService) {
    this.httpService = httpService
  }

  async authenticate(user: User): Promise<boolean> {
    const _user = await this.httpService.get('https://www.users.com', {name: user.name})
    const isAuthenticated = _user.password === user.password
    return  isAuthenticated
  }

  async byToken(token){
    const isValidToken = await this.httpService.get('token_validation', {token: token})
    return isValidToken
  }
}

export class UserService {
  httpService: HTTPService

  constructor(private authenticationService: AuthenticationService, httpService: HTTPService) {
    this.httpService = httpService
  }

  async getUserByName(name: string){
    return this.httpService.get('https://www.users.com', {name: name})
  }

  async authenticate(user: User) {
    return this.authenticationService.byToken(user.token)
  }

  async saveUser(user: User){
    return this.httpService.post('users', {user: user})
  }

}

export class UserController {
  constructor(private userService: UserService) {}

  async isAuthenticated(user: User){
    return this.userService.authenticate(user)
  }

}