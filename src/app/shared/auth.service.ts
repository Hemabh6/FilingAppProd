import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor(public fireauth:AngularFireAuth, private router:Router) { }

  async signIn(email:string,password:string){
await this.fireauth.signInWithEmailAndPassword(email,password)
.then(res=>{
  this.isLoggedIn = true;
  localStorage.setItem('user',JSON.stringify(res.user))
  this.router.navigate(['dashboard'])
})
  }

logout(){
  this.fireauth.signOut()
  localStorage.removeItem('user')
}

}
