import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Plant } from './plant';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	plants:Plant[];
	constructor(private ps:PlantService) {};
	ngOnInit() {
		this.plants = this.ps.getPlants();
	}
  }

