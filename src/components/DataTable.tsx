import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const DataTable = ({ columns, data, caption }: any) => {
  return (
    <div className='relative'>
      <Table className='mt-4 w-full bg-primary'>
        {caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader className='sticky top-0 z-10 border-b border-t border-borderAccent bg-primary'>
          <TableRow className='hover:bg-secondary'>
            {columns.map((column: string, index: number) => (
              <TableHead className='text-nowrap text-center' key={index}>
                {column}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row: any, rowIndex: number) => (
            <TableRow className='rounded-lg hover:bg-secondary' key={rowIndex}>
              {columns.map((column: string, colIndex: number) => (
                <TableCell className='text-center text-white' key={colIndex}>
                  {row[column] ?? '-'}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
