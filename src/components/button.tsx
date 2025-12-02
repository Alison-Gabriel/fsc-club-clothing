import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tw-merge";

interface RootProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export const Root = ({ children, className, ...props }: RootProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        clsx(
          "group bg-brand-background hover:bg-brand-background/95 shadow-brand-darken-blend disabled:bg-brand-background/80 flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] py-2.5 shadow-md/50 transition-all disabled:cursor-default",
          className,
        ),
      )}
    >
      {children}
    </button>
  );
};

interface IconProps {
  children: ReactNode;
}

export const Icon = ({ children }: IconProps) => {
  return <>{children}</>;
};

interface LabelProps {
  text: string;
}

export const Label = ({ text }: LabelProps) => {
  return (
    <span className="text-brand-foreground group-disabled:text-brand-foreground/80 group-hover:text-brand-foreground/95 font-semibold">
      {text}
    </span>
  );
};
