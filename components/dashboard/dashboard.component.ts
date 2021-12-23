import { Component, OnInit } from "@angular/core";
import * as FileSaver from "file-saver";
import readXlsxFile from "read-excel-file";
import { DashboardServiceService } from "src/app/services/dashboard-service.service";
import * as XLSX from "xlsx";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(
    private userService: DashboardServiceService //design patttern
  ) {}
  UsersRecords: any = [];
  users: any;

  ngOnInit() {
    this.getAllUsers();
  }

  excelRead(e) {
    let fileReaded: any;
    this.UsersRecords = [];
    fileReaded = e.target.files[0];
    let type = e.target.files[0].name.split(".").pop();
    const schema = {
      id: {
        prop: "id",
        type: String,
        required: false,
      },
      name: {
        prop: "name",
        type: String,
        required: false,
      },
      prenom: {
        prop: "prenom",
        type: String,
        required: false,
      },
      email: {
        prop: "email",
        type: String,
        required: false,
      },
      motDePasse: {
        prop: "motDePasse",
        type: String,
        required: false,
      },
    };
    readXlsxFile(e.target.files[0], { schema }).then((data) => {
      if (data.rows) {
        for (let i of data.rows) {
          this.UsersRecords.push(i);
          console.log(this.UsersRecords[0]["prenom"]);
        }
      }
      console.log(this.UsersRecords); // pour vérifier l'importation des données du fichier excel (valide)
    });
  }

  getAllUsers() { // Pour obtenir tous les utilssateurs de la base de donnée
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users); // pour vérifier l'importation
    });
  }
}
