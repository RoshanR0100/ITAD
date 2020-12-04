import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';

@Injectable()
export class LocationPoint{
constructor(public x: number, public y: number, public weight: number ){

}
}

@Injectable()
export class ImgData{
  constructor(/*public url: Url,*/ public test: string, public test2: string){
    
  }
}
@Injectable()
export class ApiserviceService {
  imgdata: ImgData[]
  data: LocationPoint[]
  constructor(private httpClient: HttpClient) { }

  async getData(){
      // this.httpClient.get("").toPromise().then(result=>{

      // });
      this.data = new Array<LocationPoint>();
      this.data.push(new LocationPoint(270, 270, 1));
  }
  async getImg(){
    this.imgdata = new Array<ImgData>();
    this.imgdata.push(new ImgData("this is a string", "this is also a string"));
  }
}
