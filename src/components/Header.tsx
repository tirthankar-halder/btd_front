import { HeaderProps } from "./types";
import { MobileMenu } from "./MobileMenu";

const menuItems = [
  { text: "How it works", href: "#" },
  { text: "About Us", href: "#" },
  { text: "Feedback", href: "#" },
];

export const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMenuOpen }) => {
  return (
    <header className="fixed w-full bg-gray-900 border-b border-solid border-b-neutral-700 z-[100]">
      <nav className="flex relative justify-between items-center px-6 py-4 mx-auto my-0 max-w-screen-xl">
        <div className="flex gap-6 items-center">
          <div className="flex gap-4 items-center">
            <img
              alt="DYAZ Logo"
              src="https://cdn.builder.io/api/v1/image/assets%2F41f741e823cc4e94baf452a17e418b14%2F9c77971f08cf453f9736f93efdbccd88"
              className="object-cover overflow-hidden w-28 h-8 transition-opacity cursor-pointer aspect-square duration-[0.2s]"
            />
          </div>
          <div className="flex gap-4 max-md:hidden">
            {menuItems.map((item, index) => (
              <a key={index} className="text-sm no-underline text-slate-300">
                {item.text}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-4 items-center max-md:flex max-md:justify-end max-md:w-full">
          <button
            className="hidden max-md:block max-md:p-2 max-md:cursor-pointer max-md:border-[none] max-md:text-slate-300"
            onClick={onMenuToggle}
          >
            <span className="block mb-1.5 w-6 h-0.5 transition-[0.3s] bg-slate-300" />
            <span className="block mb-1.5 w-6 h-0.5 transition-[0.3s] bg-slate-300" />
            <span className="block w-6 h-0.5 transition-[0.3s] bg-slate-300" />
          </button>
        </div>
        <MobileMenu isOpen={isMenuOpen} menuItems={menuItems} />
      </nav>
    </header>
  );
};
