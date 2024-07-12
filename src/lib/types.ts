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
            billingAddress: Json | null;
            paymentMethod: Json | null;
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

export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export type Collaborator = {
    id: string;
    createdAt: Date;
    userId: string;
    workspaceId: string;
};

export type Customer = {
    id: string;
    stripeCustomerId: string | null;
};

export type File = {
    id: string;
    createdAt: Date;
    bannerUrl: string | null;
    data: string | null;
    folderId: string;
    iconId: string;
    inTrash: string | null;
    title: string;
    workspaceId: string;
};

export type Folder = {
    id: string;
    createdAt: Date;
    bannerUrl: string | null;
    data: string | null;
    iconId: string;
    inTrash: string | null;
    title: string;
    workspaceId: string;
};



export type Product = {
    id: string;
    active: boolean | null;
    description: string | null;
    image: string | null;
    metadata: Json | null;
    name: string | null;
};

// export type Subscription = {
//     id: string;
//     cancelAt: Date | null;
//     cancelAtPeriodEnd: boolean | null;
//     canceledAt: Date | null;
//     created: Date;
//     currentPeriodEnd: Date;
//     currentPeriodStart: Date;
//     endedAt: Date | null;
//     metadata: Json | null;
//     priceId: string | null;
//     quantity: number | null;
//     status: SubscriptionStatus | null;
//     trialEnd: Date | null;
//     trialStart: Date | null;
//     userId: string;
// };

// export type User = {
//     id: string;
//     avatarUrl: string | null;
//     billingAddress: Json | null;
//     email: string | null;
//     fullName: string | null;
//     paymentMethod: Json | null;
//     updatedAt: Date | null;
// };

export type Workspace = {
    id: string;
    createdAt: Date;
    bannerUrl: string | null;
    data: string | null;
    iconId: string;
    inTrash: string | null;
    logo: string | null;
    title: string;
    workspaceOwner: string;
};

export type ProductWithPrice = Product & {
};