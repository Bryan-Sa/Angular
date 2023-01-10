import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
   email: string = "test";
   password : string = "";
   stylesObj = 
  {width: "50%", height: "40vh", "text-align": "center", margin: "auto", "min-width":"350px"};
  options: AnimationOptions = {
    path: '../../assets/lottie-gif/cercle.json',
  };
  options2: AnimationOptions = {
    path: '../../assets/lottie-gif/cercle2.json',
  };
  options3: AnimationOptions = {
    path: '../../assets/lottie-gif/cercle3.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  testFunction(test: string): number {
    this.email = test;
    return(5);
  }
}
