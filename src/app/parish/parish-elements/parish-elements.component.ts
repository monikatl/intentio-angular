import { Component, OnInit } from '@angular/core';
import { Parish } from '../../../model/parish';
import { ParishService } from '../../services/parish-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parish-elements',
  templateUrl: './parish-elements.component.html',
  styleUrl: './parish-elements.component.css'
})
export class ParishElementsComponent {



  parish: Parish = new Parish()

  constructor(private router: Router, private parishService: ParishService) {}

  items = [
    { id: 0, title: 'Patron', content: this.parish.patron.getString(), expanded: false },
    { id: 1, title: 'Adres', content: this.parish.address.getString(), expanded: false },
    { id: 2, title: 'Numer konta', content: this.parish.account_number, expanded: false },
    { id: 3, title: 'Kontakt', content: this.parish.contact.getString(), expanded: false },
    { id: 4, title: 'Kancelaria parafialna', content: this.parish.contact, expanded: false }
  ];

  toggleItem(item: any) {
    item.expanded = !item.expanded;
  }

  navigate(id: Number) {
    let path = '/parish-editor/parish-elements/'
    switch(id) {
      case 0:
        path += 'patron-details';
        break;
      case 1:
        path += 'address-details';
        break;
      case 2:
        path += 'account-details';
        break;
      case 3:
        path += 'contact-details';
        break;
      case 4:
        path += 'office-details';
        break;
    }
    this.router.navigate([path])
  }
  
}
