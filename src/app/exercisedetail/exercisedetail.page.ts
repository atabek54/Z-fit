import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercisedetail',
  templateUrl: './exercisedetail.page.html',
  styleUrls: ['./exercisedetail.page.scss'],
})
export class ExercisedetailPage implements OnInit {
exerciseId:any
exercises:any=[
  {'id':'0','image':'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Article+Image+Update/Running/How+Far/Carousel.jpg','title':'Daha Uzun Mesafe Koşmanın 7 Yolu','description':'1. Daha Yavaş Koşarak Daha Uzağa Gidebilirsiniz  2. Mesafenizi Yavaş Yavaş Artırabilirsiniz 3. Haftada Bir Kez Uzun Mesafe Koşabilirsiniz    4. Yürüyüşler Molaya, Molalar Yürüyüşe Dönüşebilir 5. Güzergahınızı Parçalara Bölebilirsiniz  6. Açlık ve Susuzluğa Dikkat Etmelisiniz    7. Koşuyu Sürdürülebilir Hale Getirmek İçin Sabredin '},
  {'id':'1','image':'https://post.healthline.com/wp-content/uploads/2022/08/male-yoga-1200x628-facebook-1200x628.jpg','title':'Egzersiz İçin En Doğru Zaman Nedir?','description':'Söz konusu kilo vermekse beslenmeyle birlikte spora da dikkat etmemiz gerektiğini biliyoruz. Ancak egzersiz yapmanın zamanı konusunda kafalar bazen karışabiliyor. Kilo da vermek istiyorsanız egzersiz yapmak için en doğru zaman sabah uyanır uyanmaz, kahvaltı etmeden önceki zaman dilimi. Saatinizi biraz erkene kurup kahvaltıdan önce spor yaptığınızda farkı hissedeceksiniz. Diğer saatlerde yapılan egzersize göre aç karnına yapılan egzersiz hem daha çok yağ yakmayı hem de kaçamak yapsanız da kilo almayı engelliyor.  Aç karnına yapılan egzersiz kilo almayı engellediği gibi kilo vermek isteyenler için de başvurulması gereken çözümlerden biri. Araştırmada çalışan profesörlerden Peter Hespel, bu sonuçların özellikle de kilo vermek isteyenleri ilgilendirdiğini belirtiyor: “Vücut ağırlığındaki artışları engellemek için en iyi yol, dengeli bir beslenme ve aktif bir hayat biçimi. Ancak eğer dengeli beslenme konusunda kaçamaklar yapıyorsanız, sabah aç karnına spor yapmak hayatınızın bir parçası olmalı. Çünkü tok karnına yapılan egzersize göre çok daha fazla verimli” diyor.  Evet, gördüğünüz gibi, egzersizin süresi ve yoğunluğu kadar zamanı da son derece etkili. Tek yapmanız gereken bir yarım saat erken kalkmak. İnsan sonuçlarını merak ediyor değil mi?'},

  {'id':'2','image':'https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2021/01/GRT-male-riding-bike-in-city-1296x728-header.jpg?w=1155&h=1528','title':'10 Bin Adım Mı Yoksa 1 Saat Bisiklet Mi?','description':'Günde 10 bin adım yürümek; zinde bir yaşam için en sık duyduğumuz önerilerden birisidir. Peki 1 saat bisiklete ne dersiniz? Zinde bir yaşam için hangisinin daha etkili olduğuna kısaca bir göz atmak ister misiniz?  Yürüyüş Daha Fazla Zaman Alıyor  10 bin adım yürümek, normal bir adımla yaklaşık 8 km mesafeye denk geliyor. Bu da ortalama bir hızla yaklaşık 1 saat 36 dakikaya denk gelmektedir. Bisiklet Daha Fazla Kalori Yakıyor Saatte ortalama 5 km hızla yürüyen bir kişi (saatte) 232 kcal harcıyor. Yani 10 bin adımla 8 km kat eden birisi yaklaşık 371 kcal yakmış oluyor. Bisiklette ise ortalama 20 km/h hız ile saatte 563 kcal yakılıyor. Yürüme hızınızı 6,5 km/h ‘ye çıkarttığınızda 352 kcal, bisiklet hızınızı 30 km/h’a çıkarttığınızda ise 844 kcal yakmış oluyorsunuz. Obezite ile Savaşta Bisiklet Daha Etkili İngiltere’de 150 bin katılımcı ile yapılan bir araştırmanın sonuçlarına göre yürüyüş vücut kitle indeksi ve yağ oranındaki düşüşte önemli ölçüde etkili olurken, bisiklet daha da etkili bir düşüşü garanti ediyor.  Yürüyüş Herhangi Bir Ekipman Gerektirmiyor    Günlük yürüyüşler için herhangi bir özel ekipman gerekmiyorken, bisiklet için doğal olarak daha fazla ekipmana ihtiyaç oluyor.    Bisiklet Daha Mı İyi?    Eğer bisiklete binmeyi seviyorsanız kesinlikle evet. Bisiklet, kısıtlı bir zaman diliminde hızlı kalori yakmak ve formda kalmak için daha iyi bir seçenek. Ekipman ihtiyacı ve bakım maliyeti gibi unsurlar ise bisikletten alacağınız zevke göre değerlendirilebilecek faktörler arasındadır. Fakat yürüyüşün de sağlığınız için son derece faydalı bir egzersiz olduğunu ve gündelik yaşamanızda hareket etmenin en pratik yollarından biri olduğunu unutmayın!      '},
]
exercise:any
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.exerciseId= this.activatedRoute.snapshot.paramMap.get('id');
this.exercise=this.exercises[this.exerciseId]

  }

}
