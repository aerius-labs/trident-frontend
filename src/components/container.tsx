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
        `mx-10 grid max-w-[1359px] grid-cols-12 gap-4 overflow-x-scroll lg:min-w-[1024px] ${className}`
      )}
    >
      {children}
    </div>
  );
};

export default Container;
