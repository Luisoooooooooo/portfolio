import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemsHeader: string[] = ["Work"];
  itemsFooter: string[] = ["Info"];
  images = [
    {
      imageSrc: 'assets/img/carousel/home-01.jpg',
      imageAlt: 'Poster Fake',
    },
    {
      imageSrc: 'assets/img/carousel/home-02.jpg',
      imageAlt: 'Vinyl DREAMS',
    },
    {
      imageSrc: 'assets/img/carousel/home-03.jpg',
      imageAlt: '3D Basketball',
    },
    {
      imageSrc: 'assets/img/carousel/home-04.jpg',
      imageAlt: 'Poster Cactus',
    },
    {
      imageSrc: 'assets/img/carousel/home-05.jpg',
      imageAlt: 'ISO 216',
    },
    {
      imageSrc: 'assets/img/carousel/home-06.jpg',
      imageAlt: 'From Designer to Designer',
    },
    {
      imageSrc: 'assets/img/carousel/home-07.jpg',
      imageAlt: 'Close up of "Wasted Time" fanzine.',
    },
  ]
}
