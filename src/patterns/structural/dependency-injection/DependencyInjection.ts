import {ClassFactory} from "../../creational/factory/ClassFactory";
import {User, UserController} from "./services";


class Application {
  userController: UserController

  constructor() {
    this.userController = new ClassFactory().createUserController()
  }

  async authenticate(user: User){
    return this.userController.isAuthenticated(user)
  }
}

//BAD - How to test?
function _getUser(id) {
  return fetch('url', {body: id})
}

// GOOD
function getUser(fetch, id) {
  return fetch('url', {bod: id})
}

function createFetch(fetch /* injection */) {
  return async (url, options) => {
    const result = await fetch(url, options)
    // do stuff with the result on each call
    return result
  }
}

const newFetch = createFetch(fetch)



async function fetchNewsLatter(dispatch, id) {
  dispatch({type: 'start'})

  const latter = await newFetch('url', {})

}
