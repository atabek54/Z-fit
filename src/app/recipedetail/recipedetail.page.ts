import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.page.html',
  styleUrls: ['./recipedetail.page.scss'],
})
export class RecipedetailPage implements OnInit {
  recipeId:any
  recipes:any=[
    {'id':'0','image':'https://cdn.yemek.com/uploads/2014/07/smoothie-berry-tarifi.jpg','title':'Kuruyemişli Smoothie','materials':'●	1/2 Muz,8-10 Adet Badem ●	1 Tatlı Kaşığı Zencefil  ●	1 Tatlı Kaşığı Tarçın  ●	1/2 Kase Yaban Mersini ●	1/2 Su Bardağı Yağsız Süt','preparation':'1.	1/2 adet muzu doğrayın.2.	1/2 oranında muzu, 8-10 adet bademi, 1 tatlı kaşığı zencefili ve 1 tatlı kaşığı tarçını blendera ekleyin.    3.	Son olarak üzerine 1/2 kase yaban mersini ve 1/2 su bardağı yağsız süt ilave ederek blenderda karıştırın.    4.	Hazırladığınız karışımı bardağa dökün ve dilediğiniz meyvelerle süsleyin.'},
    {'id':'1','image':'https://i.ytimg.com/vi/R26ogpzZoi8/maxresdefault.jpg','title':'Mercimek Cips (Glutensiz)','materials':'●	1 su bardağı kırmızı mercimek    ●	1 çay kaşığı tuz (tam dolu değil) ●	1 çay kaşığı mavi haşhaş   ●	2 çay kaşığı çörek otu    ●	1 çay kaşığı pul biber    ●	2 çay kaşığı keten tohumu  ●	Yarım çay bardağı zeytinyağı ','preparation':'1.	Öncelikle bir gece önceden kırmızı mercimekleri yıkayıp, suya koyuyoruz.    2.	Sabah kalan suyu süzüyoruz ve rondomuza alıyoruz.  3.	Üzerine haşhaş, çörek otu, keten tohumu, tuz, pul biber ve zeytinyağı döküp rondoda tüm mercimekler parçalanıncaya kadar çektiriyoruz.    4.	Tüm mercimek karışımı homojen hal aldığında yağlı kağıt serdiğimiz fırın tepsisine silikon bir spatula ile yayıyoruz. Burada ince olmasına özen gösterin, ince olursa daha kıtır olur.    5.	200°C fırında, 20-25 dakika üzeri kızarana kadar pişiriyoruz'},


    {'id':'2','image':'https://ketorejim.com/wp-content/uploads/2020/10/Sag%CC%86likli-Ekmek-Tarifi-ketorejim-01.jpg','title':'Diyet Ekmek (Low Carb)','materials':'●	250 gr quark (yada süzme yoğurt) ●	4 adet yumurta ●	50 gr fındık  ●	50 gr badem ●	60 gr keten tohumu ●	40 gr chia tohumu  ●	Yarım paket kabartma tozu    ●	Tuz    ●	Üzeri için susam ve kabak çekirdeği    ','preparation':'5.	Öncelikle yoğurma kabına süzme yoğurt ve yumurtayı alıp karıştırıyoruz.  6.	Fındık ve bademi blenderdan geçirip toz haline getirip ekliyoruz.  7.	Keten tohumu, chia tohumu, kabartma tozu ve tuzu ekleyip karıştırıyoruz.   8.	Hamurumuzu iyice karıştırdıktan sonra 5 dakika dinlendiriyoruz.    9.	Dikdörtgen bir kek kalıbına yağlı kağıdı seriyoruz ve hamuru üzerine döküyoruz.    10.	Susamı ve çekirdeği üzerine serptikten sonra fırına (190 derece üst ve alt ısıtmalı) veriyoruz ve 60-70 dk pişiriyoruz.    11.	Pişen ekmeğimizi fırından çıkardıktan sonra kalıpta soğumaya bırakıyoruz.'},



  ]
  constructor(private activatedRoute: ActivatedRoute) { }
  recipe:any
  ngOnInit() {
    this.recipeId= this.activatedRoute.snapshot.paramMap.get('id');
    this.recipe=this.recipes[this.recipeId]
  }

}
