"use client"

import React, { use, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AlertDialog } from '../ui/alert-dialog'
import { Agency } from '@prisma/client'
import { useToast } from '../ui/use-toast'
import {
    Card, CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '../ui/form'
import FileUpload from '../global/file-upload'

type Props = {
    data?: Partial<Agency>
}

const FormSchema = z.object({
    name: z.string().min(2, { message: 'Agency name must be atleast 2 chars.' }),
    companyEmail: z.string().min(1),
    companyPhone: z.string().min(1),
    whiteLabel: z.boolean(),
    address: z.string().min(1),
    city: z.string().min(1),
    zipCode: z.string().min(1),
    state: z.string().min(1),
    country: z.string().min(1),
    agencyLogo: z.string().min(1),
})

const AgencyDetails = ({ data }: Props) => {
    const { toast } = useToast();
    const router = useRouter()
    const [deleteAgency, setDeletingAgecny] = useState(false)
    const form = useForm<z.infer<typeof FormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: data?.name,
            companyEmail: data?.companyEmail,
            companyPhone: data?.companyPhone,
            whiteLabel: data?.whiteLabel || false,
            address: data?.address,
            city: data?.city,
            zipCode: data?.zipCode,
            state: data?.state,
            country: data?.country,
            agencyLogo: data?.agencyLogo,
        },
    })
    const isLoading = form.formState.isSubmitting

    useEffect(() => {
        if (data) {
            form.reset(data)
        }
    }, [data])

    const handleSubmit = async () => { }

    return (
        <AlertDialog>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Company Information
                    </CardTitle>
                    <CardDescription>
                        Lets create your account for your company.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="space-y-4"
                        >
                            <FormField
                                disabled={isLoading}
                                control={form.control}
                                name="agencyLogo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Logo</FormLabel>
                                        <FormControl>
                                            <FileUpload></FileUpload>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* </FormField> */}
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </AlertDialog>
    )
}

export default AgencyDetails

function async() {
    throw new Error('Function not implemented.')
}
