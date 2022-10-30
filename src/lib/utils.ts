import { clsx, type ClassArray } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classArray: ClassArray) {
  return twMerge(clsx(classArray))
}
