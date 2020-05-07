import { Injectable } from '@angular/core';
import { Plant } from './plant';

const plants:Plant[] = [
	new Plant('Лаванда','Серебристая листва',99.9),
	new Plant('Вербена','Красная с белым глазком',139.9),
	new Plant('Лилейник','Ярко-красный бархатный',349.9)
];

@Injectable({
  providedIn: 'root'
})
export class PlantService {
	getPlants():Plant[] {return plants;}


}

