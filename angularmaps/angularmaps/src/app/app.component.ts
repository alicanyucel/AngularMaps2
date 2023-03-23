import { Component, OnInit } from '@angular/core';
import { MapsModel } from 'src/model/mapsmodel';
import { CarrierService } from 'src/service/carrierservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularmaps Ali Can Yücel';
  zoom: number = 14; // yakınlaştırır
  // motokurye ikonu ekleme
  icon={
    url:'https://www.pngwing.com/tr/free-png-sozae',
    scaledSize:{width:50,height:60}
  }
  constructor(
    private _carrierService:CarrierService
  ){}
  ngOnInit(): void {
  //  this.getList()
     // 10 saniye arayla verileri getir
    setInterval(() => {
      this.getList(); 
      }, 10000);
  }
  mapsModel:MapsModel[]=[]

    // kooridnat verir
  mapclick(event:any){
    console.log(event)
  }
  // marker click işaretçiye tıkladığımızda ne olacaksa onu belirliyoruz
  markerClick(event:any){
   console.log(event);
  }
  //kooridnat verir ve yakınlaştırır
 
  getList() {
     this._carrierService.getList((res) => this.mapsModel=res.data)
   }
  

  // opacity:saydamlık veriyoruz
  // disabledoubleclikzoom:çift tıklarsam yakınlaştırma true yada false değer alır
  //  [mapDraggable]="false" haritayı sürüklemeye yarar false surukleme yapmaz tru surukleme yapar default true değer
  //markerlara icon,parlaklık,gorunurluk,title,isaretleme verebiliriz
  // [markerDraggable]="true"  işaretçiyi sürükleme taşıma
}
/*
mapsmodel: MapsModel[] = [];
  constructor(
    private _carrierService:CarrierService,
    private _storeService:StoreService
  ){}
  ngOnInit(): void {

  }
 
      // kooridnat verir
    mapclick(event:any){
      console.log(event)
    }
    // marker click işaretçiye tıkladığımızda ne olacaksa onu belirliyoruz
    markerClick(event:any){
     console.log(event);
    }
    //kooridnat verir ve yakınlaştırır
    mapdoubleclick(event:any){
      const obj={
        lat:event.coords.lat,
        lng:event.coords.lng,
      };
    this.locations.push(obj);
    }
    // opacity:saydamlık veriyoruz
    // disabledoubleclikzoom:çift tıklarsam yakınlaştırma true yada false değer alır
    //  [mapDraggable]="false" haritayı sürüklemeye yarar false surukleme yapmaz tru surukleme yapar default true değer
    //markerlara icon,parlaklık,gorunurluk,title,isaretleme verebiliriz
    // [markerDraggable]="true"  işaretçiyi sürükleme taşıma
  }
*/
