import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-Firebase';
  constructor() {
    const config = {
      apiKey: "AIzaSyCAlHruZTXVqkKFFASkaWXrJwkDo_7Mbuk",
      authDomain: "angular-datebase.firebaseapp.com",
      databaseURL: "https://angular-datebase.firebaseio.com",
      projectId: "angular-datebase",
      storageBucket: "angular-datebase.appspot.com",
      messagingSenderId: "175017371011",
      appId: "1:175017371011:web:b1bb4f6a8a49377096c2b6",
      measurementId: "G-3BSQKW0GNG"
    };
    firebase.initializeApp(config);
  }
}
