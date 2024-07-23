export class SidebarConstants {
  public static menus: Array<{
    id: number;
    text: string;
    route?: string;
    tagId: string;
    isChildren?: boolean;
    children?: any;
  }> = [
    {
      id: 1,
      text: 'Directive',
      tagId: 'DirectiveMenuBtn',
      isChildren: true,
      children: [
        {
          id: 1,
          text: 'Component',
          route: '/admin/post',
          tagId: 'ComponentDirBtn',
        },
        {
          id: 2,
          text: 'Structural',
          route: '/admin/category',
          tagId: 'StructuralDirBtn',
        },
        {
          id: 2,
          text: 'Attribute',
          route: '/admin/user',
          tagId: 'AttributeDirBtn',
        },
      ],
    },
  ];
}
