import { signOut } from "firebase/auth";
import { BsCart3 } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router";

import { auth } from "../lib/firebase";

const Header = () => {
  const handleLogOut = () => signOut(auth);

  return (
    <header className="bg-brand-background text-brand-foreground flex h-16 max-h-16 w-full items-center justify-evenly py-5 shadow md:justify-between md:px-5 md:py-4">
      <h2 className="text-lg font-bold uppercase md:text-2xl">Club Clothing</h2>

      <nav className="flex items-center gap-10 font-semibold">
        <Link to="/" className="font-semibold">
          Explorar
        </Link>

        <Link to="/login" className="font-semibold">
          Login
        </Link>

        <Link to="/signup" className="font-semibold">
          Criar Conta
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <button className="cursor-pointer">
              <BsCart3 className="size-6" />
            </button>

            <span className="font-semibold">5</span>
          </div>

          <button className="cursor-pointer" onClick={handleLogOut}>
            <PiSignOutBold className="size-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
