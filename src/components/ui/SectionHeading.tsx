import type { HTMLAttributes } from "react";

import styles from "./SectionHeading.module.css";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  readonly eyebrow?: string;
  readonly title: string;
  readonly description?: string;
  readonly level?: 1 | 2 | 3;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  level = 2,
  className = "",
  ...props
}: SectionHeadingProps) {
  const HeadingTag = `h${level}` as const;
  const classes = [styles.heading, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <HeadingTag className={styles.title}>{title}</HeadingTag>
      {description ? (
        <p className={styles.description}>{description}</p>
      ) : null}
    </div>
  );
}
