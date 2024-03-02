import React from 'react'
import { AlertDialog } from '../ui/alert-dialog'
import { Agency } from '@prisma/client'
import { useToast } from '../ui/use-toast'
// import { useToast } from '@/components/ui/use-toast';

type Props={
data: Partial<Agency>
}

const  AgencyDetails=(props: Props)=> {
    const {toast} = useToast()
  return (
    <AlertDialog>
        {/* <Card>
            <CardHeader>
                <CardTitle>
                    Agency Information
                </CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
        </Card> */}
    </AlertDialog>
  )
}

export default AgencyDetails