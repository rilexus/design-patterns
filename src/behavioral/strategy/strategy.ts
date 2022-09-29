interface StrategyInterface {
  canActivate(context: any, meta: any): boolean;
}

class FaceIDAuthentication implements StrategyInterface {
  canActivate(context: any, meta: any): boolean {
    // implement authentication
    // check face
    return true;
  }
}

class PasswordAuthentication implements StrategyInterface {
  canActivate(context: any, meta: any): boolean {
    // implement authentication
    // check for password
    return true;
  }
}

interface AuthenticationInterface {
  authenticate(meta: any): boolean;
}

export class Authentication implements AuthenticationInterface {
  private strategy: StrategyInterface;

  constructor(strategy: StrategyInterface) {
    this.strategy = strategy;
  }

  authenticate(meta: any): boolean {
    return this.strategy.canActivate(this, meta);
  }

  setStrategy(strategy: StrategyInterface) {
    // allow changing the auth mechanism
    this.strategy = strategy;
  }
}

const faceAuthentication = new Authentication(new FaceIDAuthentication());
faceAuthentication.authenticate({});

const passwordAuthentication = new Authentication(new PasswordAuthentication());
passwordAuthentication.authenticate({ password: "", name: "" });
