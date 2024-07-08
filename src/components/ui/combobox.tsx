'use client';

import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { spreadLimit } from '@/lib/constants';

export default function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>(spreadLimit[0]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          size={'xs'}
          aria-expanded={open}
          className='w-max justify-between px-2 text-xs font-normal'
        >
          {value
            ? spreadLimit?.find((spread) => spread === value)
            : spreadLimit[0]}
          {open ? (
            <ChevronUp className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          ) : (
            <ChevronDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-max bg-secondary p-1'>
        <Command className='bg-secondary'>
          <CommandGroup>
            <CommandList className='p-0'>
              {spreadLimit.map((spread) => (
                <CommandItem
                  key={spread}
                  value={spread}
                  onSelect={(currentValue) => {
                    setValue(
                      currentValue === value ? spreadLimit[0] : currentValue
                    );
                    setOpen(false);
                  }}
                  className='flex cursor-default select-none items-center rounded-sm px-1 py-1 text-sm text-textAccent outline-none aria-selected:bg-lightBlue/60 aria-selected:text-slate-900'
                >
                  {spread}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
