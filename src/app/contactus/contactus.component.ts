import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators  } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  info = new FormGroup({

    firstName: new FormControl('',Validators.required),
 
    lastName: new FormControl('',Validators.required),

    email:new FormControl('',Validators.required)
 
  });
 
  onSubmit(){

    if(this.info.valid){

      var a = this.info.value;

      console.log(a)

   }

  }
}
