import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44378/api/Submissions'

  constructor(private httpClient: HttpClient) { 
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json;charset = utf8' })
  }

  getData() {
    console.log('1234')
    return this.httpClient.get(this.accessPointUrl, { headers: this.headers });
  }

  deleteData() {
    return this.httpClient.delete(this.accessPointUrl, { headers: this.headers });
  }

}
