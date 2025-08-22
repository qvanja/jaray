import { Injectable } from '@angular/core';

declare const axios:any;
declare const $: any;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    let vm =this;
    $.LoadingOverlay("show");
    // Make a request for a user with a given ID
    axios.get(this.url)
      .then(function (response:any) {
        // handle success
        console.log(response.data);
        vm.products = response.data;
      })
      .catch(function (error:any) {
        // handle error
        console.log(error);
      })
    .finally(function () {
      $.LoadingOverlay("hide");
    });
    // this.products = [
    //   {
    //     "id": 14,
    //     "name": "2025 YZFR1MS",
    //     "price": 5800,
    //     "qty": 6,
    //     "img": "assets/25_YZFR1MS.png"
    //   },
    //   {
    //     "id": 15,
    //     "name": "2025 YZFR3ASL",
    //     "price": 4300,
    //     "qty": 5,
    //     "img": "assets/25_YZFR3ASL.png"
    //   },
    //   {
    //     "id": 17,
    //     "name": "2026 TTR50ET",
    //     "price": 4900,
    //     "qty": 3,
    //     "img": "assets/2026_TTR50ET.png"
    //   },
    //   {
    //     "id": 18,
    //     "name": "2026 TTR125LET1",
    //     "price": 3300,
    //     "qty": 5,
    //     "img": "assets/2026_TTR125LET1.png"
    //   },
    //   {
    //     "id": 19,
    //     "name": "2026 TTR230T1",
    //     "price": 6400,
    //     "qty": 4,
    //     "img": "assets/2026_TTR230T1.png"
    //   },
    //   {
    //     "id": 20,
    //     "name": "2026 TW200T2",
    //     "price": 4100,
    //     "qty": 6,
    //     "img": "assets/2026_TW200T2.png"
    //   },
    //   {
    //     "id": 21,
    //     "name": "2026 YZ85LWT",
    //     "price": 3700,
    //     "qty": 3,
    //     "img": "assets/2026_YZ85LWT.png"
    //   },
    //   {
    //     "id": 22,
    //     "name": "2026 YZ450FTL",
    //     "price": 7500,
    //     "qty": 6,
    //     "img": "assets/2026_YZ450FTL.png"
    //   },
    //   {
    //     "id": 23,
    //     "name": "2026 YZ450FTSE",
    //     "price": 6800,
    //     "qty": 5,
    //     "img": "assets/2026_YZ450FTSE.png"
    //   },
    //   {
    //     "id": 24,
    //     "name": "2025 Side winder X-TX LE EPS",
    //     "price": 20000,
    //     "qty": 5,
    //     "img": "assets/2025_Sidewinderxtxleeps.png"
    //   }
    // ];
  }

  private products: any = []
private url:string='https://sv-gen-api.bczin2zin2takeo.us/api/product';
  getproduct(): any {

    return this.products
  }
}
