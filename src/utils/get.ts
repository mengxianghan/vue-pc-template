export const getVariable = (name: string): string | number => getComputedStyle(document.documentElement).getPropertyValue(name)
