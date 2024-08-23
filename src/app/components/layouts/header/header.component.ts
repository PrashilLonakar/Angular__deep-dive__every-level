import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() drawerEvent = new EventEmitter<string>();
  isLightTheme: boolean;

  constructor(private darkmodeService: DarkModeService) {
    this.isLightTheme = this.darkmodeService.getMode();
  }

  onDrawerClick(val: string) {
    this.drawerEvent.emit(val);
  }

  onThemeChange() {
    this.isLightTheme = !this.isLightTheme;
    this.darkmodeService.switchMode(!this.isLightTheme);
  }
}
