import React from 'react';

import { cn } from '@/lib/utils';
const Container = ({
  className,
  children,
}: {
  className?: React.ComponentProps<'div'>['className'];
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `mx-10 grid min-w-[1140px] max-w-[1359px] grid-cols-12 gap-4 ${className}`
      )}
    >
      {children}
    </div>
  );
};

export default Container;
