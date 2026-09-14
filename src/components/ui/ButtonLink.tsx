import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

import styles from "./ButtonLink.module.css";

type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    readonly variant?: "primary" | "secondary" | "text";
    readonly disabled?: boolean;
  }
>;

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  disabled = false,
  ...props
}: ButtonLinkProps) {
  const classes = [styles.button, styles[variant], disabled ? styles.disabled : "", className]
    .filter(Boolean)
    .join(" ");

  if (disabled) {
    return (
      <span
        className={classes}
        aria-disabled="true"
        aria-label={props["aria-label"]}
        title={props.title}
      >
        {children}
      </span>
    );
  }

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
