import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { unstable_noStore as noStore } from "next/cache";
// import subaccountId from '../../page'
// import { getAuthUserDetails } from '@/lib/queries'
import { User } from '@clerk/nextjs/server'
import { Prisma } from '@prisma/client'

type Props = {
    params: { subaccountId: string; file: any }
}
export default async function NewFileRoute() {

    noStore();

    // const user = await getAuthUserDetails();

    async function postData(formData: FormData) {
        "use server";

        if (!User) {
            throw new Error("Not Authorised")
        }

        const title = formData.get("title") as string;
        const description = formData.get("description") as string;

        // const file = await Prisma.files.create({
        //     data: {
        //         userId: User?.id,
        //         description: description,
        //         title: title,
        //     },
        // });
    }

    return (
        <div>

            <Dialog>
                <form >

                    <DialogTrigger className='w-20 justify-end' asChild>
                        <Button className='w-20 bg-black hover:bg-zinc-900 justify-centre mt-3 text-white'>New File</Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader className='text-xl'> Create New File
                            <DialogTitle className='text-sm'>Name your File</DialogTitle>
                            <DialogDescription>
                                <Input
                                    placeholder='Enter File Name'
                                    className='mt-3'
                                    required

                                />
                            </DialogDescription>
                            <DialogDescription>
                                <div className="flex flex-col gap-y-2">

                                    <label>Description</label>
                                    <Textarea
                                        placeholder='Describe your file as you want'
                                        className='mt-3'
                                        required

                                    />
                                </div>
                            </DialogDescription>

                        </DialogHeader>
                        <DialogFooter className=''>
                            <DialogClose asChild>
                                <Button
                                    type='button'
                                    className='bg-black hover:bg-zinc-900 text-white'
                                >
                                    Create
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </form>

            </Dialog>
        </div >
    )
}
