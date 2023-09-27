import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm : any;
  submitted =false;
constructor(){}
ngonInit():void{
  this.contactForm = new FormGroup ({
    firstname: new FormControl("", [Validators.required])
});
}
formData(){
  console.log(this.contactForm);
  this.submitted =true;


}
}
