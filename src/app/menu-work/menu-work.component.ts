import { Component, Input } from '@angular/core';

interface projectName {
  name: string;
  url: string;
}

@Component({
  selector: 'app-menu-work',
  templateUrl: './menu-work.component.html',
  styleUrls: ['./menu-work.component.css']
})
export class MenuWorkComponent {
  @Input() menuItemsWork: string[] = [];
  @Input() linksWork: projectName[] = []
}
