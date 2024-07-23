import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveExplainComponent } from './directive-explain.component';
import { ComponentDirectiveComponent } from './component-directive/component-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';

const routes: Routes = [
  {
    path: '',
    component: DirectiveExplainComponent,
    children: [
      {
        path: 'component-directive',
        component: ComponentDirectiveComponent,
      },
      {
        path: 'structural-directive',
        component: StructuralDirectiveComponent,
      },
      {
        path: 'attribute-directive',
        component: AttributeDirectiveComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectiveExplainRoutingModule {}
