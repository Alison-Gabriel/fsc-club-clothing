import { signOut } from "firebase/auth";
import { LogOutIcon, ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router";

import { auth } from "../lib/firebase";
import NavLink from "./nav-link";

const Header = () => {
  const handleLogOut = () => signOut(auth);

  return (
    <header className="bg-brand-background text-brand-foreground flex h-16 w-full items-center justify-between px-7 py-5 shadow">
      <Link to="/">
        <h2 className="text-2xl font-bold">Club Clothing</h2>
      </Link>

      <div className="flex h-full items-center gap-5">
        <nav className="flex items-center gap-3 font-semibold">
          <NavLink to="/explore">Explorar</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Criar Conta</NavLink>
        </nav>

        <div className="bg-brand-foreground/30 h-full w-px" />

        <div className="flex items-center gap-4">
          <button className="relative cursor-pointer">
            <ShoppingBagIcon className="size-5" />
            <span className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold">
              9
            </span>
          </button>

          <button className="cursor-pointer" onClick={handleLogOut}>
            <LogOutIcon className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
