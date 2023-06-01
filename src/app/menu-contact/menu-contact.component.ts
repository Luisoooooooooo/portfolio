import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-contact',
  templateUrl: './menu-contact.component.html',
  styleUrls: ['./menu-contact.component.css']
})
export class MenuContactComponent {
  @Input() menuItemsContact: string[] = []
}
