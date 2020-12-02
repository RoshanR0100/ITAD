import { Component } from '@angular/core';
import { Coordinate } from './heatmap/Coordinates';
import { HEATMAP_HEIGHT } from 'heatmap.js';
import { HEATMAP_WIDTH } from 'heatmap.js';
import { h337 } from 'heatmap.js';
declare let h337 : any; //heatmap.js global object


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ITAD';

 
  
}
