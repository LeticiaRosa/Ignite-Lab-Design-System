import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export interface TextInputRootProps {
  children: ReactNode
}

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
  return (<div className={
    clsx('flex gap-3 h-12 items-center py-4 px-3 bg-Gray-800 rounded focus-within:ring-2 w-full ring-Cyan-300 ')
  }  >
    {props.children}
  </div>)
}

function TextInputInput(props: TextInputProps) {
  return (
    <input className={
      clsx('flex-1 bg-Transparent text-Gray-100 text-xs placeholder:text-Gray-400 outline-none')
    } {...props} />

  )
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className={clsx('w-6 h-6 text-Gray-400')}>{props.children}</Slot>
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}