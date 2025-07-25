import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { Slider} from './slider/slider';
import { ProductBox } from './product-box/product-box';
import { Footer } from './footer/footer';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Nav,
    Slider,
    ProductBox,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angularApp';
  product: any = [
      {
        "id": 1,
        "name": "2024 bolt",
        "price": 8999,
        "qty": 3,
        "img": "/assets/24_bolt.png"
      },
      {
        "id": 2,
        "name": "2024 fjr1300es",
        "price": 18299,
        "qty": 4,
        "img": "/assets/24_fjr1300es.png"
      },
      {
        "id": 3,
        "name": "2024 vstar",
        "price": 4799,
        "qty": 5,
        "img": "assets/24_vstar.png"
      },
      {
        "id": 4,
        "name": "2024 xsr700",
        "price": 8599,
        "qty": 3,
        "img": "assets/24_xsr700.png"
      },
      {
        "id": 5,
        "name": "2024 zuma125",
        "price": 3800,
        "qty": 6,
        "img": "assets/24_zuma125.png"
      },
      {
        "id": 6,
        "name": "2025 CZD300SB",
        "price": 6700,
        "qty": 5,
        "img": "assets/25_CZD300SB.png"
      },
      {
        "id": 7,
        "name": "2025 MT10SPSS",
        "price": 7200,
        "qty": 4,
        "img": "assets/25_MT10SPSS.png"
      },
      {
        "id": 8,
        "name": "2025 MTT9SB",
        "price": 3100,
        "qty": 6,
        "img": "assets/25_MTT9SB.png"
      },
      {
        "id": 9,
        "name": "2025 XSR900SW",
        "price": 8000,
        "qty": 3,
        "img": "assets/25_XSR900SW.png"
      },
      {
        "id": 10,
        "name": "2025 XT250S",
        "price": 4900,
        "qty": 5,
        "img": "assets/25_XT250S.png"
      },
      {
        "id": 11,
        "name": "2025 XTZ7SL",
        "price": 5300,
        "qty": 6,
        "img": "assets/25_XTZ7SL.png"
      },
      {
        "id": 12,
        "name": "2025 YXZ10YEZSB",
        "price": 3600,
        "qty": 4,
        "img": "assets/25_YXZ10YEZSB.png"
      },
      {
        "id": 13,
        "name": "2025 YXZ10YMXSL",
        "price": 6200,
        "qty": 3,
        "img": "assets/25_YXZ10YMXSL.png"
      },
      {
        "id": 14,
        "name": "2025 YZFR1MS",
        "price": 5800,
        "qty": 6,
        "img": "assets/25_YZFR1MS.png"
      },
      {
        "id": 15,
        "name": "2025 YZFR3ASL",
        "price": 4300,
        "qty": 5,
        "img": "assets/25_YZFR3ASL.png"
      },
      {
        "id": 16,
        "name": "2026 PW50T2",
        "price": 7600,
        "qty": 4,
        "img": "assets/2026_PW50T2.png"
      },
      {
        "id": 17,
        "name": "2026 TTR50ET",
        "price": 4900,
        "qty": 3,
        "img": "assets/2026_TTR50ET.png"
      },
      {
        "id": 18,
        "name": "2026 TTR125LET1",
        "price": 3300,
        "qty": 5,
        "img": "assets/2026_TTR125LET1.png"
      },
      {
        "id": 19,
        "name": "2026 TTR230T1",
        "price": 6400,
        "qty": 4,
        "img": "assets/2026_TTR230T1.png"
      },
      {
        "id": 20,
        "name": "2026 TW200T2",
        "price": 4100,
        "qty": 6,
        "img": "assets/2026_TW200T2.png"
      },
      {
        "id": 21,
        "name": "2026 YZ85LWT",
        "price": 3700,
        "qty": 3,
        "img": "assets/2026_YZ85LWT.png"
      },
      {
        "id": 22,
        "name": "2026 YZ450FTL",
        "price": 7500,
        "qty": 6,
        "img": "assets/2026_YZ450FTL.png"
      },
      {
        "id": 23,
        "name": "2026 YZ450FTSE",
        "price": 6800,
        "qty": 5,
        "img": "assets/2026_YZ450FTSE.png"
      },
      {
        "id": 24,
        "name": "2025 Side winder X-TX LE EPS",
        "price": 20000,
        "qty": 5,
        "img": "assets/2025_Sidewinderxtxleeps.png"
      }
  ];





      // image: string = '001.png';
  // isDisabled: boolean = false;
  // height:number = 300;
  // width:number = 300;
  // showImage: boolean = true;

//   allImages: string[] = [
//     '001.png',
//     '002.png',
//     '003.png',
//     '004.png',
//     '005.png',
//     '006.png',
//     '25_MT10SPSS.png',
//     '25_YXZ10YMXSL.png',
//     '25_YZFR1MS.png',
//     '25_YZFR1S1L.png',
//     '2026_YZ250TSE.png',
//     '2026_YZ450FTL.png'
//   ];
//   imageList: string[] = [];
//   constructor() {
//     this.imageList = Array(12).fill('2026_YZ450FTL.png');
//   }
//   changeImage(){
//     this.imageList = [];
//
//     for (let i = 0; i < 12; i++) {
//       const randomIndex = Math.floor(Math.random() * this.allImages.length);
//       this.imageList.push(this.allImages[randomIndex]);
//     }
//   }
//   changeDisable(){
//     this.isDisabled = !this.isDisabled;
//   }
//   addSize(){
//     this.height += 10;
//     this.width += 10;
//   }
//   removeSize(){
//     this.height -= 10;
//     this.width -= 10;
//   }
//   toggleImage(){
//     this.showImage = !this.showImage;
//   }
 }
