import Unauthorized from '@/components/unauthorized'
import { verifyAndAcceptInvitation } from '@/lib/queries'
import { currentUser } from '@clerk/nextjs'
import { redirect } from "next/navigation"
import React from 'react'

type Props = {
    children: React.ReactNode
    params: { agencyId: string }
}

const layout = async ({ children, params }: Props) => {

    const agencyId = await verifyAndAcceptInvitation()
    const user = await currentUser()

    if (!user) {
        return redirect("/")
    }

    if (!agencyId) {
        return redirect('/agency')
    }

    if (
        user.privateMetadata.role !== 'AGENCY_OWNER' &&
        user.privateMetadata.role !== 'AGENCY_ADMIN'
    )
        return <Unauthorized />

    return (
        <div>layout</div>
    )
}

export default layout;