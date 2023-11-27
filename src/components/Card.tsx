import { cn } from '@/lib/utils';
import React from 'react';

/* eslint-disable @next/next/no-img-element */
// export default function Card() {
//   return (
//   );
// }

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className='w-[50vw] h-[8em] border-white border-[1px] rounded-md flex items-center'>
    <div className={cn('w-full flex items-center grow', className)} ref={ref} {...props} />
  </div>
));
Card.displayName = 'Card';

const CardImg = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn('h-full flex justify-center items-center m-8', className)} ref={ref} {...props} />
));
CardImg.displayName = 'CardImg';

const CardInfo = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn('h-full flex flex-col gap-3 p-4 grow', className)} ref={ref} {...props} />
));
CardInfo.displayName = 'CardInfo';

const CardName = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <div className={className} ref={ref} {...props} />
));
CardName.displayName = 'CardName';

const CardBadges = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn('flex gap-2', className)} ref={ref} {...props} />
));
CardBadges.displayName = 'CardBadges';

const CardBadge = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p className={cn('bg-slate-800 pr-2 pl-2 rounded-full', className)} ref={ref} {...props} />
));
CardBadge.displayName = 'CardBadge';

const CardShare = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => (
  <div className={cn('w-12', className)}>
    <button type='button' ref={ref} {...props} />
  </div>
));
CardShare.displayName = 'CardShare';

export { Card, CardImg, CardInfo, CardName, CardBadges, CardBadge, CardShare };
