"use client"

import { NotificationWithUser } from '@/lib/types'
import { Role } from '@prisma/client'
import React, { useState } from 'react'

type Props = {
    notifications: NotificationWithUser | []
    role?: Role
    className?: String
    subAccountId?: String

}

const Infobar = ({ notifications, role, subAccountId, className }: Props) => {

    const [allNotifications, setAllNotifications] = useState(notifications)
    const [showAll, setShowAll] = useState(true)
    return (
        <div>Infobar</div>
    )
}

export default Infobar