'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@/lib/utils';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [value, setValue] = React.useState([0.11]);
  return (
    <SliderPrimitive.Root
      value={value}
      onValueChange={setValue}
      max={30}
      step={0.01}
      ref={ref}
      className={cn(
        'relative mb-12 flex w-full touch-none select-none items-center',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className='relative h-[7px] w-full grow overflow-hidden rounded-full bg-borderAccent'>
        <SliderPrimitive.Range className='absolute h-full bg-lightBlue' />
      </SliderPrimitive.Track>
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger asChild>
            <SliderPrimitive.Thumb className='block h-5 w-5 rounded-full border-4 border-lightBlue bg-borderAccent ring-offset-0 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-borderAccent focus-visible:ring-offset-2' />
          </TooltipTrigger>
          <TooltipContent
            side='bottom'
            className='z-50 animate-none overflow-hidden border-none bg-transparent p-0 text-sm text-lightBlue shadow-none data-[state=closed]:animate-none data-[state=open]:animate-none'
          >
            {value}x
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

// eslint-disable-next-line import/prefer-default-export
export { Slider };
