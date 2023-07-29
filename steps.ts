import { Application } from "./pages/app";

export class Steps {
    constructor(private app: Application) {

    }

    async signUpAsNewUserThruUI(user?: {}) {
        await this.app.signUp.open();
    }

    signUpAsNewUserThruAPI(user?: {}) {
        //...
    }
}