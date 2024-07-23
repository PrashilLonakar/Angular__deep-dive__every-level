import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveExplainRoutingModule } from './directive-explain-routing.module';
import { DirectiveExplainComponent } from './directive-explain.component';


@NgModule({
  declarations: [
    DirectiveExplainComponent
  ],
  imports: [
    CommonModule,
    DirectiveExplainRoutingModule
  ]
})
export class DirectiveExplainModule { }
