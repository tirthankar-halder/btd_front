export interface MenuItem {
  text: string;
  href: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  menuItems: MenuItem[];
}

export interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}
