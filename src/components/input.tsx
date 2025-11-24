import type { ComponentPropsWithRef } from "react";

interface InputProps extends ComponentPropsWithRef<"input"> {
  label: string;
  error?: string;
}

const Input = ({
  type = "text",
  placeholder,
  label,
  error,
  ...props
}: InputProps) => {
  const hasInputError = Boolean(error);

  return (
    <label className="text-brand-dark-foreground flex flex-col gap-1 text-sm font-bold">
      {label}

      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className={`bg-brand-input ring-brand-dark-foreground/30 focus:ring-brand-dark-foreground shadow-brand-darken-blend w-full rounded-lg px-5 py-2.5 font-normal shadow-md ring-[1.5px] transition placeholder:font-medium focus:outline-none ${hasInputError && "text-red-500 ring-red-500"}`}
      />

      {hasInputError && (
        <span className="font-semibold text-red-500">{error}</span>
      )}
    </label>
  );
};

export default Input;
