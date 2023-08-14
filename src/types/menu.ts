export interface SubmenuItem {
  id: number;
  title: string;
  path: string;
  newTab: boolean;
}

export interface Menu {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
  submenu?: SubmenuItem[];
}
