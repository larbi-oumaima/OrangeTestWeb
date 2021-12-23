import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-authentification",
  templateUrl: "./authentification.component.html",
  styleUrls: ["./authentification.component.css"],
})
export class AuthentificationComponent implements OnInit {
  title: any;
  authentiForm: FormGroup;
  logs: any = {};

  constructor(private router: Router, private fb: FormBuilder) {}
  ngOnInit() {
    this.title = "Authentification";
    this.authentiForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      motDePasse: ["", [Validators.required, Validators.minLength(8)]],
    });
  }
  authentifier() { //avec email et password déjà définis (sans parcours de base)
    console.log(this.logs);

    let findedUser;
    if (
      this.logs.email == "oumaimalaarbi@gmail.com" &&
      this.logs.motDePasse == "1234567890"
    ) {
      console.log("trouvé");//veuillez inspecter l'elt
      this.router.navigate(["dashboardUsers"]);
    }
  }
}
