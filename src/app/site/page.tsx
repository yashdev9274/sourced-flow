import MainContent from '@/components/homeComponents/MainContent'
import MainPageCardComponents from '@/components/homeComponents/MainPageCardComponents'
import WhyUs from '@/components/homeComponents/WhyUs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards } from '@/lib/constants'
// import { stripe } from '@/lib/stripe'

import clsx from 'clsx'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { features } from 'process'
export default function Home() {
  return (
    <>
    
      <section className="
        h-full w-full pt-36 
        relative flex items-center 
        justify-center flex-col"
      >
        {/* grid */}
        <MainContent />
      </section>
      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
        <WhyUs />
        <MainPageCardComponents />
      </section>
    </>
  );
}
