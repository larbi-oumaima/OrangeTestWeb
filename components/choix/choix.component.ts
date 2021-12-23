import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-choix",
  templateUrl: "./choix.component.html",
  styleUrls: ["./choix.component.css"],
})
export class ChoixComponent implements OnInit {
  constructor(private router: Router) {}
  pageConnection() {
    this.router.navigate(["authentification"]);
  }
  pageInscription() {
    this.router.navigate(["inscription"]);
  }
  ngOnInit() {}
}
