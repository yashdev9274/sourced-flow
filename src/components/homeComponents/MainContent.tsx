import React from 'react';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { features } from 'process';

const MainContent = () => {
  return (
    <div>
      <div className="
        absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />
      <p className='text-color-gray text-2xl italic text-center '> Manage your team at one place</p>
      <div className='bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative'>
        <h1 className='text-5xl font-bold text-center md:text-[200px]'>SoFlow</h1>
      </div>
      <div className="flex justify-center items-center relative md:mt-[-70px]">
        <Image 
          src={"/assets/preview.png"}
          alt="banner image"
          height={800}
          width={800}
          className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
        />
        <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
      </div>
    </div>
  );
}

export default MainContent;