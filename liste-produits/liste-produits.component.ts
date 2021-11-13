import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  s:string="bonjour"
  valeur:string="masquer"
  //texte:string;
  productsF:Produit[];
  set texte(a:string)
  {
    this.productsF=this.filtrer(a);
  }
  filtrer(nom:string):Produit[]
  {
    return this.products.filter(x=>x.nom.indexOf(nom)!=-1)
  }
  products :Produit[]=[
    {id :1,nom :"pc portable",prix :1200,quantite :50,urlImg :"./assets/images/pc portable.jfif"},
    {id :2,nom :"clavier",prix :10,quantite :0, urlImg :"./assets/images/clavier.jfif"}
    ]
  constructor() { }

  ngOnInit() {
    this.productsF=this.products;
  }
  masquer()
  {
    if(this.valeur=="masquer")
       this.valeur="afficher"
    else 
       this.valeur="masquer"   
  }
  getcolor(v:number):string
  {
    if(v==0) return "red";
    else return "black";
  }

}
