import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators  } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cars:  Array<{name :string,productionYear:number,img: string}> =[
    {
      name:"BMW",
      productionYear: 2020,
      img:"https://cdn.pixabay.com/photo/2016/04/24/10/48/sports-car-1349139_960_720.jpg"
  },
  {
    name:"VW",
    productionYear: 2022,
    img:"https://cdn.pixabay.com/photo/2018/02/21/12/38/volkswagen-golf-r-3170253__340.jpg"
  },
  {
    name:"TOYOTA",
    productionYear: 2023,
    img:"https://cdn.pixabay.com/photo/2022/12/02/10/23/car-racing-7630654__340.jpg"
  }]


  carPush = new FormGroup({

    img: new FormControl('',Validators.required),
 
    name: new FormControl('',Validators.required),

    productionYear:new FormControl('',Validators.required)
 
  });
 
  onSubmit(){

    if(this.carPush.valid){

      let myVal: any= this.carPush.value

     this.cars.push(myVal)

   }

  }

   


}
