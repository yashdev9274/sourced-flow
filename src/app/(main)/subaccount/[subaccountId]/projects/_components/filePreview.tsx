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
import React from 'react'

function FilePreview() {
    return (
        <div>

            <Dialog>
                <DialogTrigger className='w-20' asChild>
                    <Button className='w-full bg-black hover:bg-zinc-900 justify-start mt-3 text-white'>New File</Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New File</DialogTitle>
                        <DialogDescription>
                            <Input
                                placeholder='Enter File Name'
                                className='mt-3'

                            />
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

            </Dialog>
        </div>
    )
}

export default FilePreview