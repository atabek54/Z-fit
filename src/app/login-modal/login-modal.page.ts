import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { modalController } from '@ionic/core';
import { User } from '../models/user.model';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {

  public title: string='Z-Fit';
  user:User={
    name: '',
    height: '',
    age: '',
    gender: '',
    stateOfMovement: '',
    weight: '',
    bodyMass: '',
    amountOfCaloriesNeed: '',
    amountofWaterNeed:''
  };
  name?:any;
  height?:any
  weight?:any;
  age?:any
  gender?:any;
  stateOfMovement?:any;
  bodyMass:any=0;
  amountOfCaloriesNeed:any=0;
  amountofWaterNeed:any=0;


  question?:string;
  step:number=0;




  constructor(private activatedRoute: ActivatedRoute,private modalCtrl:ModalController,
    private navCtrl:NavController) {

}
  ngOnInit(): void {
    const user =localStorage.getItem('User')

    this.gender='Bay';
    this.stateOfMovement='Hiç';
    this.question='Adınızı giriniz';
  }
  onSegment1Change(){
    this.user.gender=this.gender
  }
  onSegment2Change(){
    this.user.stateOfMovement=this.stateOfMovement
  }
  changeQuestionTitle(){
    if(this.step==0){
      this.question='Adınızı girin';
    }
    if(this.step==1){
      this.question='Boyunuzu metre cinsinden girin';
    }
    if(this.step==2){
      this.question='Kilonuzu kg cinsinden girin';
    }
    if(this.step==3){
      this.question='Yaşınızı girin';
    }
    if(this.step==4){
      this.question='Cinsiyetinizi seçin';
    }
    if(this.step==5){
      this.question='Hareketlilik seviyenizi seçin';
    }
  }


  calculetAmountOfWaterNeed(){
this.amountofWaterNeed=((Number(this.user.weight)/35)*1000)/250;
this.amountofWaterNeed=parseFloat(this.amountofWaterNeed).toFixed(0)
this.user.amountofWaterNeed=this.amountofWaterNeed;

  }
calculateBodyMass(){

this.bodyMass=Number(this.user.weight)/(Math.pow(Number(this.user.height),2))
this.bodyMass=parseFloat(this.bodyMass).toFixed(2)
this.user.bodyMass=this.bodyMass;
if(this.user.gender=='Bay'){
if(Number(this.user.bodyMass)<18.5){
this.amountOfCaloriesNeed='3000';
this.user.amountOfCaloriesNeed=this.amountOfCaloriesNeed;
}else if(Number(this.user.bodyMass)>=18.5||Number(this.user.bodyMass)<=24.99){
  this.amountOfCaloriesNeed='2000';
this.user.amountOfCaloriesNeed=this.amountOfCaloriesNeed;
}
else if(Number(this.user.bodyMass)>=25){
  this.amountOfCaloriesNeed='1500';
this.user.amountOfCaloriesNeed=this.amountOfCaloriesNeed;
}
//kadınsa
}else{
  if(Number(this.user.bodyMass)<18.5){
    this.amountOfCaloriesNeed='2200';
    this.user.amountOfCaloriesNeed=this.amountOfCaloriesNeed;
    }else if(Number(this.user.bodyMass)>=18.5||Number(this.user.bodyMass)<=24.99){
      this.amountOfCaloriesNeed='1800';
    this.user.amountOfCaloriesNeed=this.amountOfCaloriesNeed;
    }
    else if(Number(this.user.bodyMass)>=25){
      this.amountOfCaloriesNeed='1200';
    this.user.amountOfCaloriesNeed=this.amountOfCaloriesNeed;
    }
}

}


  async next(){
  if(this.step==0){
    this.user.name=this.name



  }
  if(this.step==1){
    this.user.height=this.height


  }
  if(this.step==2){
    this.user.weight=this.weight


  }
  if(this.step==3){
    this.user.age=this.age

  }

  if(this.step==4){
    this.user.gender=this.gender

  }

  if(this.step==5){
    this.user.stateOfMovement=this.stateOfMovement

    this.calculateBodyMass()
    this.calculetAmountOfWaterNeed();
//Kaydet
 localStorage.setItem('User',JSON.stringify(this.user))
 const currentUser=localStorage.getItem('User');


await this.modalCtrl.dismiss()






  }else{
    this.step++
this.changeQuestionTitle()
  }

}

back(){
  this.step--;
  this.changeQuestionTitle()
}

}
