import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.component.html',
  styleUrls: ['./menu-info.component.css']
})
export class MenuInfoComponent {
  @Input() menuItemsInfo: string[] = [];
}
