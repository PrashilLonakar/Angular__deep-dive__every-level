import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveExplainRoutingModule } from './directive-explain-routing.module';
import { DirectiveExplainComponent } from './directive-explain.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ComponentDirectiveComponent } from './component-directive/component-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { ColorChangeDirective } from 'src/app/core/directives/color-change.directive';

@NgModule({
  declarations: [
    DirectiveExplainComponent,
    ComponentDirectiveComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    CustomDirectiveComponent,
    ColorChangeDirective,
  ],
  imports: [CommonModule, DirectiveExplainRoutingModule, MatExpansionModule],
})
export class DirectiveExplainModule {}
