import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  username: string ="";
  email: string ="";
  password: string ="";

  constructor(private modalController: ModalController ,private userService: UserService) {}

  signup() {
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Here you can handle the signup logic, like API requests
    const newUser = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.userService.addUser(newUser).subscribe((response) => {
      console.log('User created:', response);
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
