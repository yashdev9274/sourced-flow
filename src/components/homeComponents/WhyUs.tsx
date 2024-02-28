import React from 'react';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { features } from 'process';

const WhyUs = () => {
    return ( 
        <div>
            <h2 className="text-3xl text-center">
            Choose what fits you right
            </h2>
            <p className="text-muted-foreground text-center">
            Our straightforward pricing plans are tailored to meet your needs. If
            {" you're"} not <br />
            ready to commit you can get started for free.
            </p>
        </div>
     );
}
 
export default WhyUs;