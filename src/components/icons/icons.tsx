import * as React from 'react';

const OrderBookSVG = ({ ...props }: React.ComponentProps<'svg'>) => (
  <svg
    width={25}
    height={24}
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M4.5 4H11.5V11H4.5V4Z' fill='#F6465D' />
    <path d='M4.5 13H11.5V20H4.5V13Z' fill='#0ECB81' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.5 4H20.5V8H13.5V4ZM13.5 10H20.5V14H13.5V10ZM20.5 16H13.5V20H20.5V16Z'
      fill='#848E9C'
    />
  </svg>
);

const BuyOrderSVG = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={25}
    height={24}
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_216_5011)'>
      <path d='M4.5 4H11.5V20H4.5V4Z' fill='#0ECB81' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.5 4H20.5V8H13.5V4ZM13.5 10H20.5V14H13.5V10ZM20.5 16H13.5V20H20.5V16Z'
        fill='#848E9C'
      />
    </g>
    <defs>
      <clipPath id='clip0_216_5011'>
        <rect width={24} height={24} fill='white' transform='translate(0.5)' />
      </clipPath>
    </defs>
  </svg>
);

const SellOrderSVG = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={25}
    height={24}
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_216_5016)'>
      <path d='M4.5 4H11.5V20H4.5V4Z' fill='#F6465D' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.5 4H20.5V8H13.5V4ZM13.5 10H20.5V14H13.5V10ZM20.5 16H13.5V20H20.5V16Z'
        fill='#848E9C'
      />
    </g>
    <defs>
      <clipPath id='clip0_216_5016'>
        <rect width={24} height={24} fill='white' transform='translate(0.5)' />
      </clipPath>
    </defs>
  </svg>
);

export { BuyOrderSVG, OrderBookSVG, SellOrderSVG };
