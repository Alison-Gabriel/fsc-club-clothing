import type { ComponentPropsWithRef } from "react";

interface InputProps extends ComponentPropsWithRef<"input"> {
  label: string;
}

const Input = ({ type = "text", placeholder, label, ...props }: InputProps) => {
  return (
    <label className="text-brand-dark-foreground flex flex-col gap-1 font-bold">
      {label}
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className="bg-brand-input focus-visible:outline-brand-dark-foreground shadow-brand-darken-blend w-full rounded-lg px-5 py-2.5 font-normal shadow-md placeholder:font-medium"
      />
    </label>
  );
};

export default Input;
