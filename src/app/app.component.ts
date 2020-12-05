import { Component, OnInit } from '@angular/core';
import { Coordinate } from './heatmap/Coordinates';
import { HEATMAP_HEIGHT } from 'heatmap.js';
import { HEATMAP_WIDTH } from 'heatmap.js';
import { h337 } from 'heatmap.js';
import { ApiserviceService } from './apiservice.service';
declare let h337 : any; //heatmap.js global object


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiserviceService]
})
export class AppComponent{


  title = 'ITAD';

  constructor(private service: ApiserviceService) {}


  delete() {
    this.service.deleteData().subscribe();
  }
  
}
