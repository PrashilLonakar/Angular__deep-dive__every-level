import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SidebarConstants } from '../../../core/constants/sidebar.constant';

const TREE_DATA: any = SidebarConstants.menus;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  treeControl = new NestedTreeControl<any>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: any) =>
    !!node.children && node.children.length > 0;
}
