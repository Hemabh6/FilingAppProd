import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {
signIncred:FormGroup;
  constructor(private fb:FormBuilder,
    private auth:AuthService,
    private route:Router,
    private aroute:ActivatedRoute) {
      this.signIncred = this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required]
      })
     }

  ngOnInit(): void {
  }
async signIn(){
  await this.auth.signIn(this.signIncred.get('email')?.value,this.signIncred.get('password')?.value)  
} 
}
