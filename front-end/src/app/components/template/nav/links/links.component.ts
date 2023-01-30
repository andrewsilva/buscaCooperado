import { Component, Input } from '@angular/core';

interface INavLinks {
  fontSet: string;
  icon: string;
  text: string;
  current: boolean;
}

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['../nav.component.css', '../../../../../assets/font-icons.css']
})
export class LinksComponent {
  @Input() expanded = false;

  @Input() links: INavLinks[] = [
    {
      fontSet: 'material-icons-round',
      icon: 'search',
      text: 'Buscar',
      current: true,
    },
    {
      fontSet: 'material-icons-round',
      icon: 'star_border',
      text: 'Favoritos',
      current: false,
    },
    {
      fontSet: 'material-icons-outlined',
      icon: 'sms',
      text: 'Chat',
      current: false,
    },
    {
      fontSet: 'material-icons-round',
      icon: 'tune',
      text: 'Configurações',
      current: false,
    },
    {
      fontSet: 'material-icons-outlined',
      icon: 'account_balance',
      text: 'Banco',
      current: false,
    },
  ];
}
