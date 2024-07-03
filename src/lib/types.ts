import { Prisma, Role, Notification, Lane, Ticket, Tag, User, Contact } from "@prisma/client"
import { _getTicketsWithAllRelations, getAuthUserDetails, getPipelineDetails, getTicketsWithTags, getUserPermissions } from "./queries"
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

export type PipelineDetailsWithLanesCardsTagsTickets = Prisma.PromiseReturnType<
    typeof getPipelineDetails
>

export const LaneFormSchema = z.object({
    name: z.string().min(1),
})

export type TicketWithTags = Prisma.PromiseReturnType<typeof getTicketsWithTags>

const currencyNumberRegex = /^\d+(\.\d{1,2})?$/

export const TicketFormSchema = z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    value: z.string().refine((value) => currencyNumberRegex.test(value), {
        message: 'Value must be a valid price.',
    }),
})

export type TicketDetails = Prisma.PromiseReturnType<
    typeof _getTicketsWithAllRelations
>