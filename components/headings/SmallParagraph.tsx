import { cn } from '@/lib/utils';
import React from 'react'

function SmallParagraph({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <p className={cn("text-xs md:text-sm lg:text-base 2xl:text-xl leading-snug", className)}>{text}</p>;
}

export default SmallParagraph