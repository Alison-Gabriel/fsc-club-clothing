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
    <label className="text-brand-dark-foreground flex flex-col gap-1 font-bold">
      <span className={`${hasInputError && "text-red-500"}`}>{label}</span>

      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className={`bg-brand-input ring-brand-dark-foreground/30 focus:ring-brand-dark-foreground shadow-brand-darken-blend w-full rounded-lg px-5 py-2.5 font-normal shadow-md ring transition placeholder:font-medium focus:outline-none ${hasInputError && "ring-red-500"}`}
      />

      {hasInputError && (
        <span className="text-sm font-semibold text-red-500">{error}</span>
      )}
    </label>
  );
};

export default Input;
