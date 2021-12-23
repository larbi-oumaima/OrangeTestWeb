import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DashboardServiceService {
  userURL: string = "http://localhost:1444/api/users";

  constructor(private httpClient: HttpClient) {}
  getAllUsers() { //Développé (Exportation d la base vers le dashboard mais avec des tuptles vides
    return this.httpClient.get(this.userURL);
  }

  getUserById(
    id: number //A développer
  ) {
    return this.httpClient.get(`${this.userURL}/${id}`);
  }
  addUser(
    user: any //Ajout réussi
  ) {
    return this.httpClient.post(this.userURL, user);
  }
  deleteUser(
    id: number //A développer
  ) {
    return this.httpClient.delete(`${this.userURL}/${id}`);
  }
}
