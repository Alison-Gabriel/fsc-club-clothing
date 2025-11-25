import clsx from "clsx";
import { LogOutIcon, XIcon } from "lucide-react";
import { createPortal } from "react-dom";

import NavLink from "./nav-link";

interface SheetProps {
  isOpen: boolean;
  close: () => void;
}

const Sheet = ({ isOpen, close }: SheetProps) => {
  const isNotSheetOpen = !isOpen;

  return createPortal(
    <div
      className={clsx(
        "absolute top-0 right-0 bottom-0 left-0 z-50 h-full w-full bg-black/50 backdrop-blur-xs",
        isNotSheetOpen && "hidden",
      )}
    >
      <aside className="bg-brand-background fixed top-0 right-0 bottom-0 z-50 flex h-full w-xs flex-col justify-between p-5 shadow-lg">
        <div className="flex flex-col gap-4">
          <button className="self-end" onClick={close}>
            <XIcon className="text-brand-dark-foreground" />
          </button>

          <nav className="grid grid-cols-2 gap-3">
            <NavLink to="/" className="col-span-2">
              Explorar
            </NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Criar Conta</NavLink>
          </nav>
        </div>

        <button className="text-brand-foreground flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-rose-600 py-1.5 text-xs font-bold transition-colors hover:bg-rose-600/80">
          <LogOutIcon className="size-3.5" />
          Sair da conta
        </button>
      </aside>
    </div>,
    document.body,
  );
};

export default Sheet;
