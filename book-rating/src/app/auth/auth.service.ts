import { Service, signal } from '@angular/core';

@Service()
export class AuthService {
    readonly #validPassword = 'katze';

    #isAuthenticated = signal(false);
    readonly isAuthenticated = this.#isAuthenticated.asReadonly();

    login(password: string): boolean {
        if (password === this.#validPassword) {
            this.#isAuthenticated.set(true);
            return true;
        }
        return false;
    }

    logout() {
        this.#isAuthenticated.set(false);
    }
}
