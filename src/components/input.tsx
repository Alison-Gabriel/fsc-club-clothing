import clsx from "clsx";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tw-merge";

interface RootProps {
  children: ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return <div className="flex flex-col">{children}</div>;
};

interface LabelProps {
  text: string;
}

export const Label = ({ text }: LabelProps) => {
  return (
    <label className="text-brand-dark-foreground mb-0.5 font-semibold">
      {text}
    </label>
  );
};

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <span className="mt-2 text-xs font-medium text-red-500">{message}</span>
  );
};

type FieldProps = ComponentPropsWithRef<"input">;

export const Field = ({ placeholder, className, ...props }: FieldProps) => {
  return (
    <input
      {...props}
      placeholder={placeholder}
      className={twMerge(
        clsx(
          "bg-brand-input shadow-brand-darken-blend w-full rounded-lg px-5 py-2.5 shadow-md/50 transition",
          className,
        ),
      )}
    />
  );
};
