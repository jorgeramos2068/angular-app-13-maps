import { Component, OnInit } from '@angular/core';

interface MenuItem {
  url: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public menuItems: MenuItem[] = [
    {
      url: '/maps/fullscreen',
      name: 'Full Screen',
    },
    {
      url: '/maps/zoom-range',
      name: 'Zoom Range',
    },
    {
      url: '/maps/markups',
      name: 'Markups',
    },
    {
      url: '/maps/estates',
      name: 'Estates',
    },
  ];
}
