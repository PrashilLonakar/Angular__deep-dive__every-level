import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() drawerEvent = new EventEmitter<string>();

  onDrawerClick(val: string) {
    this.drawerEvent.emit(val);
  }

}
