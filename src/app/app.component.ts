import { Component ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admindashboard';
  login:boolean=true;
  constructor(private elementRef: ElementRef,  public  _router: Router,private auth:AuthService) { }

  ngOnInit() {
    debugger
    this.login = this.auth.isLoggedIn
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
