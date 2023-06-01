import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  itemsWork = ["Alburaya — Web, 2020", "Madridaje — Editorial, 2019", "Logofolio — Branding, 2016", "From Designer to Designer — Editorial, 2015", "Wasted Time — Editorial, 2013"];
  linksWork = [
    {
      name: 'Alburaya — Web, 2020',
      url: '/Project-page',
    },
    {
      name: 'Madridaje — Editorial, 2019',
      url: 'madridaje',
    },
    {
      name: 'Logofolio — Branding, 2016',
      url: 'logofolio',
    },
    {
      name: 'From Designer to Designer — Editorial, 2015',
      url: 'from-designer-to-designer',
    },
    {
      name: 'Wasted Time — Editorial, 2013',
      url: 'wasted-time',
    },
  ]
}
