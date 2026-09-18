import { cn } from "@/lib/cn";

const variantClasses = {
  primary:
    "bg-blue text-white shadow-[0_10px_24px_rgb(8_120_249_/_0.28)] hover:bg-[#0666d6]",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
  outline:
    "border border-navy/15 bg-white text-navy hover:border-blue hover:text-blue",
  ghost: "text-current hover:bg-white/10",
} as const;

const sizeClasses = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-sm md:text-[0.95rem]",
} as const;

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

export function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-wide transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue",
    "disabled:pointer-events-none disabled:opacity-60",
    "active:translate-y-px",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName(variant, size, className)}
      {...props}
    />
  );
}
