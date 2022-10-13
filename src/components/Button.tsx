import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode,
  asChild?: boolean,
}
export function Button({
  children,
  asChild
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={
      clsx('py-4 px-3 bg-Cyan-500 rounded font-semibold text-Black text-sm w-full transition-colors hover:bg-Cyan-300 focus:ring-2 ring-White outline-none')
    }>
      {children}</Comp>
  )
}
