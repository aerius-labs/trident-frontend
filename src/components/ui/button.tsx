import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 hover:opacity-90 active:opacity-80 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-blueGradient text-primaryForeground rounded-2xl font-extrabold h-12 text-lg shadow-[0px_2px_2px_0px_#00000040]',
        secondary:
          'bg-secondary text-primaryForeground  px-[14px] py-3 rounded-xl font-semibold text-lg shadow-[0px_2px_2px_0px_#00000040]',
        green:
          'bg-btnGreen text-primaryForeground  px-8 py-4 rounded-[14px] font-extrabold text-lg',
        red: 'bg-btnRed text-primaryForeground  px-8 py-4 rounded-[14px] font-extrabold text-lg',
        outline:
          'bg-secondary text-primaryForeground outline-1 outline-offset-0 outline-[#363A41] px-[14px] py-3 rounded-xl font-semibold text-lg shadow-[0px_2px_2px_0px_#00000040]',
        link: 'text-primaryForeground font-extrabold underline-offset-4 hover:underline hover:text-white h-0 w-0',
      },
      size: {
        default: 'h-12 px-[18px] py-4',
        lg: 'h-12 w-72',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
