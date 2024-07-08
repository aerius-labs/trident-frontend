import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// eslint-disable-next-line import/prefer-default-export
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const preventNegativeValues = (e: {
  key: string;
  preventDefault: () => void;
}) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
