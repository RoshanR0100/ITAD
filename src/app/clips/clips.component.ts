import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ClipsService } from '../clips.service';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.css'],
  providers:[ApiserviceService]
})
export class ClipsComponent implements OnInit {

  imgs: string[] = []
  res: any;
  constructor(public service: ClipsService) {
    this.res = service.getClipUrl().then(e => {
      this.imgs = e;
    })
   }

   

  ngOnInit() {
    
  }

  

}
