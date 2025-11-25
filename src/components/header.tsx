import { signOut } from "firebase/auth";
import { LogOutIcon, MenuIcon, ShoppingBagIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

import { auth } from "../lib/firebase";
import NavLink from "./nav-link";
import MobileSheet from "./sheet";

const Header = () => {
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  const handleLogOut = () => signOut(auth);

  const handleToggleIsMobileSheetOpen = () => {
    setIsMobileSheetOpen((prev) => !prev);
  };

  return (
    <header className="bg-brand-background text-brand-foreground flex h-16 w-full items-center justify-evenly py-5 shadow md:justify-between md:px-7 md:py-5">
      <Link to="/">
        <h2 className="text-lg font-bold md:text-xl">
          <span className="text-violet-500">Club</span> Clothing
        </h2>
      </Link>

      <div className="flex h-full flex-row-reverse items-center gap-5 md:flex-row">
        <div className="flex items-center justify-center">
          <button
            onClick={handleToggleIsMobileSheetOpen}
            className="cursor-pointer md:hidden"
          >
            <MenuIcon />
          </button>

          <MobileSheet
            isOpen={isMobileSheetOpen}
            close={handleToggleIsMobileSheetOpen}
          />
        </div>

        <nav className="hidden items-center gap-3 font-semibold md:flex">
          <NavLink to="/">Explorar</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Criar Conta</NavLink>
        </nav>

        <div className="bg-brand-foreground/30 h-full w-px" />

        <div className="flex items-center gap-4">
          <button className="relative cursor-pointer">
            <ShoppingBagIcon className="size-5" />
            <span className="absolute -top-2 -right-2 flex size-4.5 items-center justify-center rounded-full bg-violet-500 text-xs font-bold shadow">
              9
            </span>
          </button>

          <button
            className="hidden cursor-pointer md:block"
            onClick={handleLogOut}
          >
            <LogOutIcon className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
