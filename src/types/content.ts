export type NavigationItem = {
  readonly label: string;
  readonly href: `#${string}`;
};

export type SectionIntro = {
  readonly eyebrow?: string;
  readonly title: string;
  readonly description?: string;
};

export type ContentItem = {
  readonly title: string;
  readonly description: string;
};

export type ProcessStep = ContentItem & {
  readonly number: string;
};

export type FaqItem = {
  readonly question: string;
  readonly answer: readonly string[];
};
