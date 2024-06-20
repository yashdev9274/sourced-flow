import { Prisma, Role, Notification } from "@prisma/client"
import { getAuthUserDetails, getUserPermissions } from "./queries"

export type NotificationWithUser =
    | ({
        User: {
            id: string
            name: string
            avatarUrl: string
            email: string
            createdAt: Date
            updatedAt: Date
            role: Role
            agencyId: string | null
        }
    } & Notification)[]
    | undefined

export type AuthUserWithAgencySigebarOptionsSubAccounts =
    Prisma.PromiseReturnType<typeof getAuthUserDetails>

export type UserWithPermissionsAndSubAccounts = Prisma.PromiseReturnType<
    typeof getUserPermissions
>