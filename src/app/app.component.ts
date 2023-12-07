import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monetique';
  user : any = {
    n_carte : "",
    n_cin : "",
    password : "",
  }
  payer() {
    console.log(this.user);
    alert("Paiement effectué avec succès");
  }
}
