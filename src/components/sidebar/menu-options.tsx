"use client"

import React from 'react'
import {
    Agency,
    AgencySidebarOption,
    SubAccount,
    SubAccountSidebarOption,
} from '@prisma/client'
import { useEffect, useMemo, useState } from 'react'

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
        <div>MenuOptions</div>
    )
}
export default MenuOptions;