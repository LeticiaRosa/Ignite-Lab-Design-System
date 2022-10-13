import { clsx } from 'clsx';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps {
}
export function Checkbox({ }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className={
      clsx('h-6 w-6 p-[2px] bg-Gray-800 rounded ')
    }>
      <CheckboxPrimitive.Indicator asChild >
        <Check weight='bold' className='w-5 h-5 text-Cyan-500' />
      </CheckboxPrimitive.Indicator >

    </CheckboxPrimitive.Root>
  )
}
