import { Prisma, Role, Notification, Lane, Ticket, Tag, User, Contact } from "@prisma/client"
import { getAuthUserDetails, getUserPermissions } from "./queries"
import { z } from "zod"

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

export type TicketAndTags = Ticket & {
    Tags: Tag[]
    Assigned: User | null
    Customer: Contact | null
}

export type LaneDetail = Lane & {
    Tickets: TicketAndTags[]
}

export const CreatePipelineFormSchema = z.object({
    name: z.string().min(1),
})

export const CreateFunnelFormSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
    subDomainName: z.string().optional(),
    favicon: z.string().optional(),
})