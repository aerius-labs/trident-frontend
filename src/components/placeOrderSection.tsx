'use client';
import { Label } from '@radix-ui/react-label';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';
import { preventNegativeValues } from '@/lib/utils';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const PlaceOrderSection = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-start'>
      <Tabs defaultValue='market' className='flex flex-col gap-3 p-4'>
        <TabsList className='grid h-auto w-full grid-cols-2 rounded-[9px] bg-primary p-2'>
          <TabsTrigger
            value='market'
            className='px- col-span-1 py-[9px] font-extrabold text-primaryForeground data-[state=active]:rounded-[9px] data-[state=active]:bg-lightBlue data-[state=active]:text-primaryForeground'
          >
            Market
          </TabsTrigger>
          <TabsTrigger
            value='limit'
            className='px- col-span-1 py-[9px] font-extrabold text-primaryForeground data-[state=active]:rounded-[9px] data-[state=active]:bg-lightBlue data-[state=active]:text-primaryForeground'
          >
            Limit
          </TabsTrigger>
        </TabsList>
        <Separator className='bg-borderAccent' />
        <TabsContent value='market' className='flex flex-col gap-3'>
          <div className='relative grid gap-3'>
            <Label
              htmlFor='size'
              className='w-auto text-xs font-medium tracking-[0.07px] text-textAccent'
            >
              Size
            </Label>
            <Input
              id='size'
              type='number'
              placeholder='0.0'
              className='[&::-webkit-outer-spin-button] h-[45px] rounded-[14px] border-borderAccent bg-primary pl-[17px] pr-20 font-medium tracking-widest text-primaryForeground ring-0 ring-offset-0 [appearance:textfield] placeholder:text-textAccent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 [&::-webkit-inner-spin-button]:appearance-none'
              required
              onWheel={(e) => e.currentTarget.blur()}
              min='0'
              onKeyDown={preventNegativeValues}
            />
            <span className='pointer-events-none absolute bottom-2 right-2 bg-primary pr-4 text-textAccent'>
              USDC
            </span>
          </div>
          <div className='grid gap-3'>
            <Label
              htmlFor='size'
              className='w-auto text-xs font-medium tracking-[0.07px] text-textAccent'
            >
              Leverage
            </Label>
            <Slider />
          </div>
          <div className='flex h-auto flex-row items-start justify-between'>
            <div className='text-textAccent'>Available Collateral</div>
            <div className='flex flex-col gap-2'>
              <div className='text-white'>$500.68</div>
              <Button variant={'feat'} size={'xs'}>
                Max
              </Button>
            </div>
          </div>
          <div className='min-h-[390px] w-full text-textAccent'>
            <Accordion type='single' defaultValue='item-1' collapsible>
              <AccordionItem
                className='rounded-2xl bg-primary px-4'
                value='item-1'
              >
                <AccordionTrigger className='text-xs font-semibold text-white'>
                  Summary
                </AccordionTrigger>
                <AccordionContent className='flex w-full flex-col gap-2'>
                  <div className='flex flex-row justify-between'>
                    <div>Position Size</div>
                    <div>$0</div>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div>Leverage</div>
                    <div>1.1x</div>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div>Take Profit</div>
                    <div>$ 60396</div>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div>Stop Loss</div>
                    <div>$ 60396</div>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div>
                      Slippage Tolerance{' '}
                      <span className='text-[#40E0D0]'>Adjust</span>
                    </div>
                    <div>%</div>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div>Price Impact</div>
                    <div>$20</div>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div>Funding Rate</div>
                    <div>4.983%</div>
                  </div>
                  <Separator className='my-2 bg-borderAccent' />
                  <div className='flex flex-row justify-between'>
                    <div>Avg. Price</div>
                    <div>0</div>
                  </div>
                  <Separator className='my-2 bg-borderAccent' />
                  <div className='flex flex-row justify-between'>
                    <div>Trade Fees</div>
                    <div>$0</div>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div>Borrow Fees</div>
                    <div>$0</div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <Button size={'lg'}>Connect Market</Button>
        </TabsContent>
        <TabsContent value='limit' className='flex flex-col gap-3'>
          <div className='relative grid gap-3'>
            <Label
              htmlFor='price'
              className='w-auto text-xs font-medium tracking-[0.07px] text-textAccent'
            >
              Price
            </Label>
            <Input
              id='price'
              type='number'
              placeholder='0.0'
              className='[&::-webkit-outer-spin-button] h-[45px] rounded-[14px] border-borderAccent bg-primary pl-[17px] pr-20 font-medium tracking-widest text-primaryForeground ring-0 ring-offset-0 [appearance:textfield] placeholder:text-textAccent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 [&::-webkit-inner-spin-button]:appearance-none'
              required
              onWheel={(e) => e.currentTarget.blur()}
              min='0'
              onKeyDown={preventNegativeValues}
            />
            <span className='pointer-events-none absolute bottom-2 right-2 bg-primary pr-4 text-textAccent'>
              USDC
            </span>
          </div>
          <div className='relative grid gap-3'>
            <Label
              htmlFor='size'
              className='w-auto text-xs font-medium tracking-[0.07px] text-textAccent'
            >
              Size
            </Label>
            <Input
              id='size'
              type='number'
              placeholder='0.0'
              className='[&::-webkit-outer-spin-button] h-[45px] rounded-[14px] border-borderAccent bg-primary pl-[17px] pr-20 font-medium tracking-widest text-primaryForeground ring-0 ring-offset-0 [appearance:textfield] placeholder:text-textAccent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 [&::-webkit-inner-spin-button]:appearance-none'
              required
              onWheel={(e) => e.currentTarget.blur()}
              min='0'
              onKeyDown={preventNegativeValues}
            />
            <span className='pointer-events-none absolute bottom-2 right-2 bg-primary pr-4 text-textAccent'>
              USDC
            </span>
          </div>
          <div className='grid gap-3'>
            <Label
              htmlFor='size'
              className='w-auto text-xs font-medium tracking-[0.07px] text-textAccent'
            >
              Leverage
            </Label>
            <Slider />
          </div>
          <div className='flex h-auto flex-row items-start justify-between'>
            <div className='text-textAccent'>Available Collateral</div>
            <div className='text-white'>$500.68</div>
          </div>
          <div className='flex h-auto flex-row items-start justify-between'>
            <div className='text-textAccent'>Available Collateral</div>
            <div className='text-white'>$500.68</div>
          </div>
          <div className='min-h-[320px] w-full text-textAccent'>
            <Accordion type='single' defaultValue='item-1' collapsible>
              <AccordionItem
                className='rounded-2xl bg-primary px-4'
                value='item-1'
              >
                <AccordionTrigger className='text-xs font-semibold text-white'>
                  Summary
                </AccordionTrigger>
                <AccordionContent className='flex w-full flex-col gap-2'>
                  <div className='flex flex-row justify-between'>
                    <div>Position Size</div>
                    <div>$0</div>
                  </div>

                  <div className='flex flex-row justify-between'>
                    <div>Leverage</div>
                    <div>1.1x</div>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div>Price Impact</div>
                    <div>$20</div>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div>Funding Rate</div>
                    <div>4.983%</div>
                  </div>
                  <Separator className='my-2 bg-borderAccent' />
                  <div className='flex flex-row justify-between'>
                    <div>Avg. Price</div>
                    <div>0</div>
                  </div>
                  <Separator className='my-2 bg-borderAccent' />
                  <div className='flex flex-row justify-between'>
                    <div>Trade Fees</div>
                    <div>$0</div>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div>Borrow Fees</div>
                    <div>$0</div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <Button size={'lg'}>Connect Market</Button>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlaceOrderSection;
