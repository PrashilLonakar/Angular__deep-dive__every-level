import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DarkModeService } from './core/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('drawer', { static: true }) drawer!: MatSidenav;
  showFiller = false;
  showSidebar = true;

  onDrawer() {
    this.drawer.toggle();
    this.showSidebar = !this.showSidebar;
  }

  constructor(private darkmodeService: DarkModeService) {}

  get isDarkModeOn(): boolean {
    return this.darkmodeService.getMode();
  }
}
