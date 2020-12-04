import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ClipsService {

  constructor(private readonly storage: AngularFireStorage) { }

  async getClipUrl() {
    var videolist:string[] = [];
    var ref = this.storage.ref("")

    ref.listAll().subscribe(result => {
      result.items.forEach(e => {
        e.getDownloadURL().then(f => {
          videolist.push(f);
        })
      })
    })
    console.log(videolist);
    return await videolist;
  }
}
