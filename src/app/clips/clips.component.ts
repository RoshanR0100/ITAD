import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.css'],
  providers:[ApiserviceService]
})
export class ClipsComponent implements OnInit {

  imgs = []
  constructor( public service: ApiserviceService) {
    this.imgs.push(this.service.getImg);
   }

   

  ngOnInit() {
    
  }

  

}
