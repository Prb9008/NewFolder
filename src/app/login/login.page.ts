import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignupComponent } from '../signup/signup.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = "";
  password: string ="";

  constructor(private modalController: ModalController ,private userService: UserService , private router: Router) {}

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Here you can handle the login logic, like API requests
    // Use the service to get users and validate login
    this.userService.getUsers().subscribe((users) => {
      const user = users.find((u: { email: string; password: string }) => u.email === this.email && u.password === this.password);
      if (user) {
        console.log('Login successful:', user);
        // Navigate to Dashboard after successful login
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Invalid credentials');
      }
    });
  }

  async openSignup() {
    const modal = await this.modalController.create({
      component: SignupComponent,
      cssClass: 'signup-modal'
    });
    return await modal.present();
  }
}
