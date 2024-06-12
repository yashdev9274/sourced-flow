"use client"

import React from 'react'
import {
    Agency,
    AgencySidebarOption,
    SubAccount,
    SubAccountSidebarOption,
} from '@prisma/client'
import { useEffect, useMemo, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { LucideChevronDownCircle, Menu } from 'lucide-react'
import clsx from 'clsx'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import Compass from '../icons/compass'
import { Command } from '../ui/command'


type Props = {

    defaultOpen?: boolean
    subAccounts: SubAccount[]
    sidebarOpt: AgencySidebarOption[] | SubAccountSidebarOption[]
    sidebarLogo: string
    details: any
    user: any
    id: string
}

const MenuOptions = ({
    details,
    id,
    sidebarLogo,
    sidebarOpt,
    subAccounts,
    user,
    defaultOpen,
}: Props) => {
    // const { setOpen } = useModal()
    const [isMounted, setIsMounted] = useState(false)

    const openState = useMemo(
        () => (defaultOpen ? { open: true } : {}),
        [defaultOpen]
    )

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return

    return (
        <Sheet
            modal={false}
            {...openState}
        >
            <SheetTrigger
                asChild
                className="absolute left-4 top-4 z-[100] md:!hidden felx"
            >
                <Button
                    variant="outline"
                    size={'icon'}
                >
                    <Menu />
                </Button>
            </SheetTrigger>

            <SheetContent
                showX={!defaultOpen}
                side={'left'}
                className={clsx(
                    'bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1px] p-6',
                    {
                        'hidden md:inline-block z-0 w-[300px]': defaultOpen,
                        'inline-block md:hidden z-[100] w-full': !defaultOpen,
                    }
                )}
            >
                <div>
                    <AspectRatio ratio={16 / 5} >
                        <Image
                            src={sidebarLogo}
                            alt="Sidebar Logo"
                            fill
                            className="rounded-md object-contain"
                        />
                    </AspectRatio>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className='w-full my-4 flex items-center justify-between py-8'
                                variant="ghost"
                            >
                                <div className='flex items-center text-left gap-2'>
                                    <Compass />
                                    <div className='flex flex-col'>
                                        {details.name}
                                    </div>
                                </div>
                                <div>
                                    <LucideChevronDownCircle
                                        size={16}
                                        className="text-muted-foreground"
                                    />
                                </div>

                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 h-80 mt-4 z-[200]">
                            <Command>

                            </Command>

                        </PopoverContent>
                    </Popover>
                </div>
            </SheetContent>
        </Sheet>
    )
}
export default MenuOptions;