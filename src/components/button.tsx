import clsx from "clsx";
import type {
  ComponentProps,
  ElementType,
  FunctionComponent,
  ReactNode,
} from "react";

interface ButtonProps extends ComponentProps<"button"> {
  icon: ElementType;
  children: ReactNode;
}

const Button = ({ icon: Icon, children, type, ...props }: ButtonProps) => {
  const isLoaderIcon =
    (Icon as FunctionComponent).displayName === "LoaderCircle";

  return (
    <button
      {...props}
      type={type}
      className="bg-brand-background text-brand-foreground hover:bg-brand-background/95 shadow-brand-darken-blend disabled:bg-brand-background/80 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-bold shadow-md transition-all disabled:cursor-default"
    >
      <Icon className={clsx("size-4", isLoaderIcon && "animate-spin")} />{" "}
      {children}
    </button>
  );
};

export default Button;
