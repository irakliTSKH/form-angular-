import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
})
export class FormComponentComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  // name, email, message -->  interface


  isSubmitted: boolean = false;
  messages: Array<any> = [];


  onSubmit(): void {
    this.isSubmitted = true;
    this.messages.push({
      'name': this.name,
      'email': this.email,
      'message': this.message
    })    
    console.log(this.messages)
  }

  deleteMessage(index: number):void {
    this.messages.splice(index, 1)
  }
}
