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
}
