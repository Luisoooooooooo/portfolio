import { Component } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {
  images = [
    {
      imageSrc: 'assets/img/carousel/home-02.jpg',
      imageAlt: 'Vinyl DREAMS',
    },
    {
      imageSrc: 'assets/img/carousel/home-10.jpg',
      imageAlt: 'From Designer to Designer',
    },
    {
      imageSrc: 'assets/img/carousel/home-11.jpg',
      imageAlt: 'Close up of "Wasted Time" fanzine.',
    },
  ]
}
