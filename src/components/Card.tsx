import React from 'react';

/* eslint-disable @next/next/no-img-element */
// export default function Card() {
//   return (
//   );
// }

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className='w-[50vw] h-[8em] border-white border-[1px] rounded-md flex items-center'>
    <div className='w-full flex items-center grow' ref={ref} {...props} />
  </div>
));
Card.displayName = 'Card';

const CardImg = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className='h-full flex justify-center items-center m-8' ref={ref} {...props} />
));
CardImg.displayName = 'CardImg';

const CardInfo = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className='h-full flex flex-col gap-3 p-4 grow' ref={ref} {...props}></div>
));
CardInfo.displayName = 'CardInfo';

const CardName = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} />
));
CardName.displayName = 'CardName';

const CardBadges = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className='flex gap-2' ref={ref} {...props} />
));
CardBadges.displayName = 'CardBadges';

const CardBadge = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p className='bg-slate-800 pr-2 pl-2 rounded-full' {...props} />
));
CardBadge.displayName = 'CardBadge';

const CardShare = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => (
  <div className='w-12'>
    <button type='button' ref={ref} {...props} />
  </div>
));
CardShare.displayName = 'CardShare';

export { Card, CardImg, CardInfo, CardName, CardBadges, CardBadge, CardShare };
