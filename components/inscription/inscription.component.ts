import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DashboardServiceService } from "src/app/services/dashboard-service.service";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.component.html",
  styleUrls: ["./inscription.component.css"],
})
export class InscriptionComponent implements OnInit {
  title: any;
  inscriForm: FormGroup;
  insc: any = {};

  constructor(
    private fb: FormBuilder,
    private userService: DashboardServiceService,
    private router: Router
  ) {}
  ngOnInit() {
    this.title = "Inscription";
    this.inscriForm = this.fb.group({
      nom: ["", [Validators.required]],
      prenom: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      motDePasse: ["", [Validators.required, Validators.minLength(8)]],
    });
  }
  inscription(p: any) {
    this.userService.addUser(p).subscribe(() => {
      console.log(p); //affiche le user
      console.log("User added with success");
    });
  }
}
