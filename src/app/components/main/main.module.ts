import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ComponentDirectiveComponent } from './directive-explain/component-directive/component-directive.component';
import { StructuralDirectiveComponent } from './directive-explain/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './directive-explain/attribute-directive/attribute-directive.component';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, RouterModule],
})
export class MainModule {}
