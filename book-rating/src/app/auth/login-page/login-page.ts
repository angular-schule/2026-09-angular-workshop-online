import { Component, inject, input, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-login-page',
  templateUrl: './login-page.html',
})
export class LoginPage {
  #authService = inject(AuthService);
  #router = inject(Router);

  readonly redirect = input<string>();

  protected readonly password = signal('');
  protected readonly passwordForm = form(this.password, {
    submission: {
      action: async () => {
        const password = this.password();
        const success = this.#authService.login(password);

        if (!success) {
          this.loginError.set(true);
          return;
        }

        await this.#router.navigateByUrl(this.redirect() || '/books');
      },
    },
  });

  loginError = signal(false);
}
