import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
    console.log("called");
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    // setting the user prop in this class to the user value we get back from this response.
    this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users);
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
