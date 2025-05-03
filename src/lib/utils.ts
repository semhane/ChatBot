import clsx from 'clsx'; // No need for 'ClassValue' import
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: any[]) {  // 'any[]' works here because clsx accepts multiple types
  return twMerge(clsx(...inputs));  // Merge Tailwind CSS classes
}
