import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  itemsInfo: string[] = ["Freelance (2019 — now)", "Graphic Designer at Ultramarina (2018 — 2019)", "Graphic Designer at TENMAG (2015 — 2017)", "Internship at TENMAG (2015)"];
  itemsContact = [
    { name: 'E-mail', url: 'hola@luisovazquez.es' },
    { name: 'Instagram', url: 'https://www.instagram.com/luisovazquez.es/' },
    { name: 'Behance', url: 'https://www.behance.net/luisovazquez' },
  ]
}
