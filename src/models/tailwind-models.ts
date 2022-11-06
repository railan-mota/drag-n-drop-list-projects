type Colors =
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose";

type Luminance = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type BgColor = `bg-${Colors}-${Luminance}`;
export type TextColor = `text-${Colors}-${Luminance}`;
export type BorderColor = `border-${Colors}-${Luminance}`;
