import { ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-brand-background text-brand-foreground flex w-full items-center justify-between px-7 py-5 shadow">
      <Link to="/">
        <h2 className="text-2xl font-bold">Club Clothing</h2>
      </Link>

      <div className="flex items-center gap-5">
        <nav className="flex items-center gap-5 font-semibold">
          <Link className="underline-offset-4 hover:underline" to="/explore">
            Explorar
          </Link>
          <Link className="underline-offset-4 hover:underline" to="/login">
            Login
          </Link>
          <Link className="underline-offset-4 hover:underline" to="/signup">
            Criar Conta
          </Link>
        </nav>

        <button className="flex items-center gap-1 font-bold">
          <ShoppingBagIcon className="size-5" />
          <span>5</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
