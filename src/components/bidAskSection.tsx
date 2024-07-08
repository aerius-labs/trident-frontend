'use client';

import { useState } from 'react';

import SpreadTable from '@/components/spreadTable';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { spreadTableColumn } from '@/lib/constants';

import { BuyOrderSVG, OrderBookSVG, SellOrderSVG } from './icons/icons';
import { buyOrder, sellOrder } from './sample data/spreadTableData';
import ComboboxDemo from './ui/combobox';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export enum orderBookEnum {
  orderBook = 'orderBook',
  buyOrder = 'buyOrder',
  sellOrder = 'sellOrder',
}

const BidAskSection = () => {
  const [orderBookType, setOrderBookType] = useState<orderBookEnum>(
    orderBookEnum.orderBook
  );
  return (
    <div className='flex h-full w-full flex-col items-center justify-start'>
      <Tabs
        defaultValue='book'
        className='flex w-full flex-col gap-3 px-4 pt-4'
      >
        <TabsList className='grid h-auto w-full grid-cols-2 rounded-[9px] bg-primary p-2'>
          <TabsTrigger
            value='book'
            className='col-span-1 py-[9px] font-extrabold text-primaryForeground data-[state=active]:rounded-[9px] data-[state=active]:bg-lightBlue data-[state=active]:text-primaryForeground'
          >
            BOOK
          </TabsTrigger>
          <TabsTrigger
            value='trades'
            className='col-span-1 py-[9px] font-extrabold text-primaryForeground data-[state=active]:rounded-[9px] data-[state=active]:bg-lightBlue data-[state=active]:text-primaryForeground'
          >
            TRADES
          </TabsTrigger>
        </TabsList>
        <Separator className='bg-borderAccent' />
        <TabsContent value='book' className='flex flex-col gap-3'>
          <div className='flex flex-row justify-between'>
            <ToggleGroup
              defaultValue='orderBook'
              type='single'
              value={orderBookType}
              onValueChange={(value: orderBookEnum) => {
                if (value) setOrderBookType(value);
              }}
            >
              <ToggleGroupItem variant={'outline'} value='orderBook'>
                <OrderBookSVG />
              </ToggleGroupItem>
              <ToggleGroupItem variant={'outline'} value='buyOrder'>
                <BuyOrderSVG />
              </ToggleGroupItem>
              <ToggleGroupItem variant={'outline'} value='sellOrder'>
                <SellOrderSVG />
              </ToggleGroupItem>
            </ToggleGroup>
            <ComboboxDemo />
          </div>
          <div className='h-[650px] overflow-auto'>
            {orderBookType === orderBookEnum.orderBook ? (
              <SpreadTable
                orderBookType={orderBookType}
                columns={spreadTableColumn}
                buyData={buyOrder}
                sellData={sellOrder}
              />
            ) : orderBookType === orderBookEnum.buyOrder ? (
              <SpreadTable
                orderBookType={orderBookType}
                columns={spreadTableColumn}
                buyData={buyOrder}
              />
            ) : (
              <SpreadTable
                orderBookType={orderBookType}
                columns={spreadTableColumn}
                sellData={sellOrder}
              />
            )}
          </div>
        </TabsContent>
        <TabsContent value='trades' className='flex flex-col gap-3'>
          <SpreadTable
            orderBookType={orderBookType}
            columns={spreadTableColumn}
            buyData={buyOrder}
            sellData={sellOrder}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BidAskSection;
