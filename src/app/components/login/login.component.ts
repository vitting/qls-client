import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "qls-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  model = {
    "username": "",
    "password": ""
  };
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      "username": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  submit() {
    this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword("cvn7@vitting.dk", "password1234").then((data) => {
      console.log(data);
    });
  }

  test() {
    // this.afAuth.authState.subscribe((user) => {
    //   if (user) {
    //     console.log(user.toJSON());
    //   }
    // });
    // this.afAuth.auth.currentUser.getIdToken().then((data1) => {
    //   console.log(data1);
    // }).catch((error1) => {
    //   console.log(error1);
    // });
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword("cvn13@vitting.dk", "password1234").then((data) => {
      // user.updateProfile({
      //   displayName: "Christian Nicolaisen",
      //   photoURL: ""      
      // }).then((d) => {
      //   console.log(d);
      // }).catch((e) => {
      //   console.log(e);
      // });  

      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  test2() {
    this.afAuth.auth.signOut().then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  token() {
    // this.afAuth.idToken.subscribe((data) => {
    //   console.log(data);
    // });
    

    // console.log(this.afAuth.auth.currentUser.toJSON());

    // this.afAuth.auth.currentUser.getIdToken().then((data) => {
    //   console.log(data);
    // }).catch((error) => {
    //   console.log(error);
    // });

    console.log(this.afAuth.auth.currentUser.displayName);

    // this.afAuth.auth.currentUser.updateProfile({
    //   displayName: "Christian Nicolaisen",
    //   photoURL: ""
    // }).then((d) => {
    //   console.log(d);
    // }).catch((e) => {
    //   console.log(e);
    // });
  }
}
