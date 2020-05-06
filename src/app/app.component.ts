import { Component } from '@angular/core';
import { Plant } from './plant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plants';
  plant:Plant = new Plant('тюльпан','растет на даче', 99);
  temp:Plant = new Plant('тюльпан','растет на даче', 99);

  cancel():void {
	  this.plant.name = this.temp.name;
	  this.plant.description = this.temp.description;
	  this.plant.price = this.temp.price;
  }

  save():void {
	  this.temp.name = this.plant.name;
	  this.temp.description = this.plant.description;
	  this.temp.price = this.plant.price;
  }
}
