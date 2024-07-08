import React from 'react';

import { OrderBook } from '@/components/sample data/spreadTableData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SpreadTableColumn } from '@/lib/constants';

import { orderBookEnum } from './bidAskSection';

const SpreadTable = ({
  orderBookType,
  columns,
  buyData,
  sellData,
}: {
  orderBookType: orderBookEnum;
  columns: SpreadTableColumn;
  buyData?: OrderBook[];
  sellData?: OrderBook[];
}) => {
  return (
    <div className='relative'>
      <Table className='w-full bg-secondary'>
        <TableHeader className='sticky top-0 z-10 border-b border-t border-secondary bg-secondary'>
          <TableRow className='border-none hover:bg-secondary'>
            {columns.map((column: string, index: number) => (
              <TableHead className='h-6 text-nowrap text-center' key={index}>
                {column}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        {orderBookType === orderBookEnum.orderBook ? (
          <TableBody>
            {buyData?.slice(0, 13)?.map((row, rowIndex: number) => (
              <TableRow
                className='border-none hover:bg-secondary'
                key={rowIndex}
              >
                {columns.map((column, colIndex: number) => {
                  return (
                    <React.Fragment key={colIndex}>
                      {column === 'Price' ? (
                        <TableCell
                          className='border-none py-0.5 text-center text-green-500'
                          key={colIndex}
                        >
                          {row[column] ?? '-'}
                        </TableCell>
                      ) : (
                        <TableCell
                          className='py-0.5 text-center text-white'
                          key={colIndex}
                        >
                          {row[column] ?? '-'}
                        </TableCell>
                      )}
                    </React.Fragment>
                  );
                })}
              </TableRow>
            ))}

            {sellData?.slice(0, 13).map((row, rowIndex: number) => (
              <TableRow
                className='rounded-lg border-none hover:bg-secondary'
                key={rowIndex}
              >
                {columns.map((column, colIndex: number) => {
                  return (
                    <React.Fragment key={colIndex}>
                      {column === 'Price' ? (
                        <TableCell
                          className='py-0.5 text-center text-red-500'
                          key={colIndex}
                        >
                          {row[column] ?? '-'}
                        </TableCell>
                      ) : (
                        <TableCell
                          className='py-0.5 text-center text-white'
                          key={colIndex}
                        >
                          {row[column] ?? '-'}
                        </TableCell>
                      )}
                    </React.Fragment>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        ) : orderBookType === orderBookEnum.buyOrder ? (
          <TableBody>
            {buyData?.map((row, rowIndex: number) => (
              <TableRow
                className='rounded-lg border-none hover:bg-secondary'
                key={rowIndex}
              >
                {columns.map((column, colIndex: number) => {
                  return (
                    <React.Fragment key={colIndex}>
                      {column === 'Price' ? (
                        <TableCell
                          className='py-0.5 text-center text-green-500'
                          key={colIndex}
                        >
                          {row[column] ?? '-'}
                        </TableCell>
                      ) : (
                        <TableCell
                          className='py-0.5 text-center text-white'
                          key={colIndex}
                        >
                          {row[column] ?? '-'}
                        </TableCell>
                      )}
                    </React.Fragment>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {sellData?.map((row, rowIndex: number) => (
              <TableRow
                className='rounded-lg border-none hover:bg-secondary'
                key={rowIndex}
              >
                {columns.map((column, colIndex: number) => {
                  return (
                    <React.Fragment key={colIndex}>
                      {column === 'Price' ? (
                        <TableCell
                          className='py-0.5 text-center text-red-500'
                          key={colIndex}
                        >
                          {row[column] ?? '-'}
                        </TableCell>
                      ) : (
                        <TableCell
                          className='py-0.5 text-center text-white'
                          key={colIndex}
                        >
                          {row[column] ?? '-'}
                        </TableCell>
                      )}
                    </React.Fragment>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </div>
  );
};

export default SpreadTable;
