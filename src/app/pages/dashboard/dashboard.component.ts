import { Component, OnInit, ElementRef } from '@angular/core';
import { ClientdataService } from 'src/app/shared/clientdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
clients:any [] =[];
  constructor(private elementRef: ElementRef ,
              private dataservice:ClientdataService) { }

  ngOnInit(): void {
    this.getClients();
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  getClients(){
    this.dataservice.getClients().subscribe(data=>{
      this.clients = [];
      data.forEach((element: any) => {
        this.clients.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
    });
      console.log(this.clients)
  });
  }

}
