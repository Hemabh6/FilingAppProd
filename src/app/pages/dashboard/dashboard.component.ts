import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';

import { ClientdataService } from 'src/app/shared/clientdata.service';
import { GstclientService } from 'src/app/shared/gstclient.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  createClient: FormGroup;
  clients:any[]=[];
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Add Client';
  evcValues = [
    'EVC','DSC'
  ];

  formfreq = ['Yearly','Quarterly'];
  formopen=false;

displayStyle = "none";
  constructor(private elementRef: ElementRef ,
              private dataservice:ClientdataService,
              private fb:FormBuilder,
              private gstService:GstclientService,
              private aRoute: ActivatedRoute,
              private router: Router) { 

                this.createClient = this.fb.group({
                  firmname: ['', Validators.required],
                  business: ['', Validators.required],
                  gst: ['', Validators.required],
                  prop: ['', Validators.required],
                  userId:['',Validators.required],
                  userPassword:['',Validators.required],
                  emailId:['',Validators.required],
                  emailPass:['',Validators.required],
                  frequency:['',Validators.required],
                  evc:['', Validators.required],
                  mobile:['',Validators.required],
                  isActive:['false']
                })
                this.id = this.aRoute.snapshot.paramMap.get('id');
              }

  ngOnInit(): void {
    this.getClients();
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }
  

  addEditClient(){

    this.submitted = true;
    if (this.createClient.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarEmpleado();
    } else {
      this.editClient(this.id);
    }
  }


  editClient(id: string) {
    console.log(id)
    this.titulo = 'Edit Client'
    const client: any = {
      firmname: this.createClient.value.firmname,
      business: this.createClient.value.business,
      gst: this.createClient.value.gst,
      prop: this.createClient.value.prop,
      userId:this.createClient.value.userId,
      userPassword:this.createClient.value.userPassword,
      emailId:this.createClient.value.emailId,
      emailPass:this.createClient.value.emailPass,
      frequency:this.createClient.value.frequency,
      evc: this.createClient.value.evc,
      mobile:this.createClient.value.mobile
      
    }

    this.loading = true;

    this.gstService.updateClient(id, client).then(() => {
      this.loading = false;
      alert("Updated Successfully");
     // this.toastr.info('Client information was modified successfully!', 'Updated Client information', {
        //positionClass: 'toast-bottom-right'
      //})
      //this.router.navigate(['/list-empleados']);
    })
  }

  agregarEmpleado() {
    const client: any = {
      firmname: this.createClient.value.firmname,
      business: this.createClient.value.business,
      gst: this.createClient.value.gst,
      prop: this.createClient.value.prop,
      userId:this.createClient.value.userId,
      userPassword:this.createClient.value.userPassword,
      emailId:this.createClient.value.emailId,
      emailPass:this.createClient.value.emailPass,
      frequency:this.createClient.value.frequency,
      evc: this.createClient.value.evc,
      mobile:this.createClient.value.mobile,
      isActive:this.createClient.value.isActive
    }
    this.loading = true;
    this.gstService.addClient(client).then(() => {
     // this.toastr.success('Client was registered successfully!', 'Client Registered', {
       // positionClass: 'toast-bottom-right'
      //});
      alert("Client Added Successfully");
      this.loading = false;
      this.displayStyle="none";
      this.getClients();
      //this.router.navigate(['/list-empleados']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  openForm(){
    this.formopen=true;
    this.displayStyle="block"
  }

  closePopup(){
    this.formopen=false;
    this.displayStyle="none"
  }



  getClients(){
    this.gstService.getClients().subscribe(data=>{
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

  deleteClient(id: string) {
    this.gstService.deleteClient(id).then(() => {
      console.log('empelado eliminado con exito');
      // this.toastr.error('Client details deleted successfully!', 'Client Removed!', {
      //   positionClass: 'toast-bottom-right'
      // });
    }).catch((error: any) => {
      console.log(error);
    })
  }

}
