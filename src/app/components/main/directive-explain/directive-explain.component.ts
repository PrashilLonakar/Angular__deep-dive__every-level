import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-directive-explain',
  templateUrl: './directive-explain.component.html',
  styleUrls: ['./directive-explain.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectiveExplainComponent {
  panelOpenState = false;
}
