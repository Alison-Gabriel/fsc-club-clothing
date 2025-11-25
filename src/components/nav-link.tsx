import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { Link, type LinkProps, useLocation } from "react-router";
import { twMerge } from "tw-merge";

const navLinkVariants = cva(
  "flex cursor-pointer items-center rounded-2xl bg-transparent px-4 py-1.5 text-xs font-bold transition-colors hover:bg-violet-500/10 items-center justify-center border border-violet-500",
  {
    variants: {
      mode: {
        dark: "text-brand-foreground",
        light: "text-brand-dark-foreground",
      },
      variant: {
        selected: "bg-violet-500 hover:bg-violet-500/70",
        unselected: "bg-transparent text-violet-500",
      },
    },
    defaultVariants: {
      mode: "dark",
      variant: "unselected",
    },
  },
);

interface NavLinkProps extends VariantProps<typeof navLinkVariants>, LinkProps {
  children: ReactNode;
}

const NavLink = ({ children, to, mode, className, ...props }: NavLinkProps) => {
  const { pathname } = useLocation();
  const isCurrentPath = pathname === to;

  return (
    <Link
      {...props}
      to={to}
      className={twMerge(
        navLinkVariants({
          variant: isCurrentPath ? "selected" : "unselected",
          mode,
          className,
        }),
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
