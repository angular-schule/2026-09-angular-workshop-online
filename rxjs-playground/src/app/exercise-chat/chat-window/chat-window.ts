import { Component, signal, input, output } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';

@Component({
  selector: 'rxw-chat-window',
  templateUrl: './chat-window.html',
  imports: [FormField, FormRoot]
})
export class ChatWindow {
  readonly name = input<string>();
  readonly send = output<string>();
  readonly leave = output();
  
  readonly online = signal(true);
  readonly message = signal('');
  readonly messageForm = form(this.message, {
    submission: {
      action: async () => {
        this.send.emit(this.message());
        this.message.set('');
      }
    }
  });


  leaveChat() {
    this.online.set(false);
    this.leave.emit();
  }
}
