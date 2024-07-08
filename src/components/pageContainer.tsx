import React from 'react';

import { cn } from '@/lib/utils';
const PageContainer = ({
  className,
  children,
}: {
  className?: React.ComponentProps<'div'>['className'];
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `mx-auto min-h-screen max-w-[1379px] space-y-4 bg-primary pb-10 pt-4 ${className}`
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
