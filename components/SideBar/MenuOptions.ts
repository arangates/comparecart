export interface MenuOptions {
  'my store': Item[];
  'Research Products': Item[];
  'Learn': Item[];
  'Settings': Item[];
}

export interface Item {
  id: number;
  icon: string;
  name: string;
}
