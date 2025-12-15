export function getPropertyValue<T extends string | number | undefined>(name: string): T {
  return getComputedStyle(document.documentElement).getPropertyValue(name) as unknown as T
}
