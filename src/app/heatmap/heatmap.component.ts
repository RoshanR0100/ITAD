import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Coordinate } from './Coordinates';
import { h337 } from 'heatmap.js';
import { ApiserviceService } from '../apiservice.service';

declare let h337 : any; //heatmap.js global object

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css'],
  providers:[ApiserviceService]
})

export class HeatmapComponent implements OnInit {

      gradientCfg = { // heatmap gradient color range
        '0.15': '#6ad180', // green
        '0.25': '#7cd573',
        '0.35': '#90d865',
        '0.45': '#a4da57',
        '0.55': '#badc48',
        '0.65': '#c9cf35',
        '0.75': '#d6c226',
        '0.80': '#e2b41c',
        '0.85': '#e2961d',
        '0.90': '#dd7826',
        '0.95': '#d25c30',
        '1.0': '#c24039' // highest red
      };
      heatmap: any = null; // heatmap instance
      coordinates: Array<Coordinate> = []; // heatmap coordinates array
      heatmapContainer: HTMLElement;  // heatmap container HTML element

    constructor( private service: ApiserviceService ){
    }


    ngOnInit() {
        const heatmapConfig = { // heatmap config object. For more info visit documentation
          container: document.querySelector('#heatmapContainer'),
          opacity: .8,
          radius: 7,
          visible: true,
          gradient: this.gradientCfg,
          backgroundColor: 'inherit'
      };  
      
        this.heatmap = h337.create(heatmapConfig); // creating the instance
        this.coordinates = this.service.data.map(a=> ({x:a.x, y:a.y, value:a.weight } as Coordinate));
        this.coordinates.push({ x:250, y:250, value: 1});
        this.heatmap.setData({ max: 30, data: this.coordinates }); // passing the dummy coordinates
      
    }
      
}
