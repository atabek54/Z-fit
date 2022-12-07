import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginModalPage } from '../login-modal/login-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
user:any;
myTakenCalorie:any;
myDrunkWater:any;
foods:any=[{'yemek':'köfte','kalori':'125'},{'yemek':'makarna','kalori':'150'},{'yemek':'bulgur pilavı','kalori':'215'}, {'yemek':'karnıyarık','kalori':'134'},{'yemek':'kebap','kalori':'215'}, {'yemek':'pirinç pilavı','kalori':'352'},{'yemek':'yaprak sarması','kalori':'141'}, {'yemek':'zeytinyağlı dolma','kalori':'173'},{'yemek':'taze fasulye','kalori':'56'}, {'yemek':'izmir köfte','kalori':'348'},{'yemek':'kuru fasulye','kalori':'336'}, {'yemek':'fırında tavuk','kalori':'138'},{'yemek':'bakla','kalori':'72'}, {'yemek':'bezelye','kalori':'74'},{'yemek':'bamya','kalori':'36'}, {'yemek':'börülce','kalori':'127'},{'yemek':'ayva','kalori':'57'}, {'yemek':'armut','kalori':'61'},{'yemek':'çilek','kalori':'37'}, {'yemek':'elma','kalori':'58'},{'yemek':'erik','kalori':'75'}, {'yemek':'incir','kalori':'80'},{'yemek':'karpuz','kalori':'26'}, {'yemek':'kavun','kalori':'33'},{'yemek':'kayısı','kalori':'51'}, {'yemek':'kiraz','kalori':'70'},{'yemek':'mandalina','kalori':'46'}, {'yemek':'muz','kalori':'80'},{'yemek':'şeftali','kalori':'37'}, {'yemek':'üzüm','kalori':'67'},{'yemek':'bal','kalori':'315'}, {'yemek':'dondurma','kalori':'193'},{'yemek':'çikolata','kalori':'550'}, {'yemek':'sütlaç','kalori':'140'},{'yemek':'kadayıf','kalori':'290'}, {'yemek':'şöbiyet','kalori':'300'},{'yemek':'fındık','kalori':'634'}, {'yemek':'badem','kalori':'600'},{'yemek':'ceviz','kalori':'650'}, {'yemek':'kabak','kalori':'26'},{'yemek':'mercimek','kalori':'340'}, {'yemek':'nohut','kalori':'360'},{'yemek':'domates çorbası','kalori':'30'}, {'yemek':'tavuklu sebze çorbası','kalori':'31'},{'yemek':'kremalı mantar','kalori':'39'}, {'yemek':'fırınlanmış patates','kalori':'93'},{'yemek':'mantı','kalori':'124'}, {'yemek':'omlet','kalori':'154'},{'yemek':'börek','kalori':'185'}, {'yemek':'hamburger','kalori':'254'},{'yemek':'patates kızartması','kalori':'254'}, {'yemek':'soğan halkaları','kalori':'411'},{'yemek':'nugget','kalori':'236'}, {'yemek':'pizza','kalori':'250'},{'yemek':'peynir','kalori':'350'}, {'yemek':'salam','kalori':'336'},{'yemek':'sosis','kalori':'230'}, {'yemek':'sucuk','kalori':'350'},{'yemek':'profiterol','kalori':'334'}, {'yemek':'waffle','kalori':'312'},{'yemek':'peynirli pasta','kalori':'321'}, {'yemek':'doğum günü pastası','kalori':'465'},{'yemek':'donat','kalori':'403'}, {'yemek':'kola','kalori':'42'},{'yemek':'kahve','kalori':'1'}, {'yemek':'limonata','kalori':'42'},{'yemek':'çay','kalori':'1'}, {'yemek':'süt','kalori':'61'},{'yemek':'sıcak çikolata','kalori':'89'}, {'yemek':'meyve suyu','kalori':'54'},{'yemek':'soğuk çay','kalori':'27'}, {'yemek':'soda','kalori':'53'}];
myAteFoods:any=[]
amountOfWater:any;
amountOfCalorie:any;

  constructor(private modalCtrl:ModalController) {
this.user= localStorage.getItem('User')
this.user=JSON.parse(this.user)
console.log(this.user)

  }
  async openEditModal(){

      const modal = await this.modalCtrl.create({
        component: LoginModalPage,
        // Modal'a aktarilacak veriler componentProps'a yazilir
        // componentProps: {
        //   user: this.user
        // }
      });
      return await modal.present();

  }
ngOnInit(): void {
  this.myTakenCalorie=0
  this.myDrunkWater=0
  this.amountOfWater=this.user.amountofWaterNeed

  this.amountOfCalorie=this.user.amountOfCaloriesNeed


}
calculateMyCalorie(){
  console.log(this.myAteFoods)
  const result = this.myAteFoods.reduce((accumulator: any,current: any)=>{
    return Number(accumulator) + Number(current);
  },0);
  this.myTakenCalorie=result;
  console.log(this.myTakenCalorie)
}
addDrunkWater(){
  this.myDrunkWater+=1;

}

removeDrunkWater(){
  if(this.myDrunkWater!=0){
    this.myDrunkWater-=1;

  }

}
}
