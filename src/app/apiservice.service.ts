import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocationPoint{
constructor(public x: number, public y: number, public weight: number ){

}
}
export class ApiserviceService {
  data: LocationPoint[]
  constructor(private httpClient: HttpClient) { }

  async getData(){
      // this.httpClient.get("").toPromise().then(result=>{

      // });
      this.data = new Array<LocationPoint>();
      this.data.push(new LocationPoint(270, 270, 1));
  }
}
