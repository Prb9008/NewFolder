import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor( private router: Router) { }

 // Logout function
 logout() {
  localStorage.removeItem('user'); // Remove user from local storage
  this.router.navigate(['/login']); // Redirect to login page
}

  ngOnInit() {
    return
  }


}
