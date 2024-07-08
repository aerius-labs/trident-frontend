import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { tableData } from '@/lib/walletTableData';

import DataTable from './DataTable';

export function WalletStats() {
  return (
    <Tabs defaultValue='position' className='w-full p-4'>
      <TabsList className='grid h-16 w-full grid-cols-5 rounded-lg'>
        <TabsTrigger value='position'>Position</TabsTrigger>
        <TabsTrigger value='open-orders'>Open Orders</TabsTrigger>
        <TabsTrigger value='balance'>Balance</TabsTrigger>
        <TabsTrigger value='order-history'>Order History</TabsTrigger>
        <TabsTrigger value='history'>History</TabsTrigger>
      </TabsList>
      {tableData.map((tab) => (
        <TabsContent key={tab.title} value={tab.title}>
          <div className='rounded-xl bg-primary p-4 text-lg font-semibold'>
            <p className='text-white'>Compartment Allocation</p>
            <div className='h-64 overflow-auto'>
              <DataTable columns={tab.columns} data={tab.data} caption={''} />
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
