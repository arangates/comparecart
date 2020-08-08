 export interface MenuOptions {
  id:      number;
  name:    string;
  options: Option[];
}

export interface Option {
  id:   number;
  icon: string;
  name: string;
}