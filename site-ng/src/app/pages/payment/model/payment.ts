export class Payment{
 private id: string;
 private name: string;
 private product: string;
 private user: string;
 private value:number;
 private paymentMetod:string;

 constructor(id: string, name: string,  product: string , user: string ,value:number,  paymentMetod:string ){
  this.id = id;
  this.name = name;
  this.product = product;
  this.user= user;
  this.value=value;
  this.paymentMetod=paymentMetod;

}

}
