import type { ComponentProps, ElementType, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  icon: ElementType;
  children: ReactNode;
}

const Button = ({ icon: Icon, children, type, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className="bg-brand-background text-brand-foreground hover:bg-brand-background/95 shadow-brand-darken-blend flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-bold shadow-md transition-all"
    >
      <Icon className="size-4" /> {children}
    </button>
  );
};

export default Button;
