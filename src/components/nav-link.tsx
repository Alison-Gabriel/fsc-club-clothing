import clsx from "clsx";
import type { ReactNode } from "react";
import { Link, type LinkProps, useLocation } from "react-router";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
}

const NavLink = ({ children, to, ...props }: NavLinkProps) => {
  const { pathname: currentPath } = useLocation();

  return (
    <Link
      {...props}
      to={to}
      className={clsx(
        "text-brand-foreground hover:bg-brand-foreground/10 flex cursor-pointer items-center rounded-2xl px-4 py-2 text-sm font-bold transition-all",
        currentPath === to && "bg-cyan-500 hover:bg-cyan-500/50",
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
