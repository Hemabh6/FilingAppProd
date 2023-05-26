import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GstclientService {

  constructor(private firestore: AngularFirestore) { }

  addClient(client: any): Promise<any> {
    return this.firestore.collection('client').add(client);
  }

  getClients(): Observable<any> {
    return this.firestore.collection('client', ref => ref.orderBy('business', 'asc')).snapshotChanges();
  }

  updateClient(id: string, data:any): Promise<any> {
    return this.firestore.collection('client').doc(id).update(data);
  }

  deleteClient(id: string): Promise<any> {
    return this.firestore.collection('client').doc(id).delete();
  }
}
