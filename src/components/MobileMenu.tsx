import { MobileMenuProps } from "./types";

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  menuItems,
}) => {
  if (!isOpen) return null;

  return (
    <div className="hidden max-md:block max-md:absolute max-md:inset-x-0 max-md:top-full max-md:p-4 max-md:bg-gray-900 max-md:border-t max-md:border-solid max-md:border-t-neutral-700">
      {menuItems?.map((item, index) => (
        <a
          className="block px-4 py-3 text-sm no-underline text-slate-300"
          key={index}
          href={item.href}
        >
          {item.text}
        </a>
      ))}
    </div>
  );
};
