export type Theme = 'light' | 'dark';

export type ColorOverride = string | { base?: string; dark?: string };

export const resolveColor = (override: ColorOverride | undefined, dark: boolean): string | undefined => {
  if (override === undefined) return undefined;
  if (typeof override === "string") return override;
  return dark ? override.dark : override.base;
};
