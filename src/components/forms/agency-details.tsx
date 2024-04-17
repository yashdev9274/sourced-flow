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
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from '../ui/button';
import Loading from '../global/loading';

import { cn } from "@/lib/utils"
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Switch } from '../ui/switch'
// import FileUpload from '../global/file-upload'

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
                        Organisation Information
                    </CardTitle>
                    <CardDescription>
                        Lets create an account for your organisation.
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
                                        <FormLabel>Organisation Logo</FormLabel>
                                        <FormControl>
                                            <FileUpload
                                                apiEndpoint='agencyLogo'
                                                onChange={field.onChange}
                                                value={field.value}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Organisation Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Your company name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* <div>
                                    <Label htmlFor="lastname">Last name</Label>
                                    <Input id="lastname" placeholder="Durden" type="text" />
                                </div> */}
                                <FormField
                                    control={form.control}
                                    name="companyEmail"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Organisation Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    readOnly
                                                    placeholder="Email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                            </div>
                            <div className="flex md:flex-row gap-4">
                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="companyPhone"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Phone"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {/* <FormField
                                disabled={isLoading}
                                control={form.control}
                                name="whiteLabel"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border gap-4 p-4">
                                            <div>
                                                <FormLabel>Whitelabel Agency</FormLabel>
                                                <FormDescription>
                                                    Turning on whilelabel mode will show your organisation logo
                                                    to all sub accounts by default. You can overwrite this
                                                    functionality through sub account settings.
                                                </FormDescription>
                                            </div>

                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            /> */}
                            <FormField
                                disabled={isLoading}
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="123 st..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex md:flex-row gap-4">
                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>City</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="City"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="state"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>State</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="State"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    disabled={isLoading}
                                    control={form.control}
                                    name="zipCode"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Zipcode</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Zipcode"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>


                            {/* Create goal feature */}
                            <Button
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? <Loading /> : 'Save Organisation Details'}
                            </Button>
                        </form>
                    </Form>

                </CardContent>
            </Card>
        </AlertDialog >
    )
}

export default AgencyDetails

function async() {
    throw new Error('Function not implemented.')
}
