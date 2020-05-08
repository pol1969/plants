import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantService } from './plant.service';
import { PlantDetailComponent } from './plant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
