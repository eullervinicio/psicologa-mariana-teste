import type { HTMLAttributes, PropsWithChildren } from "react";

import styles from "./Container.module.css";

type ContainerSize = "main" | "wide" | "editorial";

type ContainerProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    readonly size?: ContainerSize;
  }
>;

export function Container({
  children,
  className = "",
  size = "main",
  ...props
}: ContainerProps) {
  const classes = [styles.container, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
