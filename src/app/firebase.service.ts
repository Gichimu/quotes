import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  createUser(value){
    return this.db.collection('users').add(value);
  }
  constructor(public db:AngularFirestore) { }
}
