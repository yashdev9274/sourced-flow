import { db } from '@/lib/db'
import {
    getLanesWithTicketAndTags,
    getPipelineDetails,
} from '@/lib/queries'
import { LaneDetail } from '@/lib/types'
import { redirect } from 'next/navigation'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'


type Props = {
    params: { subaccountId: string; pipelineId: string }
}

const PipelineIdPage = async ({ params }: Props) => {

    const pipelineDetails = await getPipelineDetails(params.pipelineId)

    if (!pipelineDetails)
        return redirect(`/subaccount/${params.subaccountId}/pipelines`)

    const pipelines = await db.pipeline.findMany({
        where: { subAccountId: params.subaccountId },
    })

    const lanes = (await getLanesWithTicketAndTags(
        params.pipelineId
    )) as LaneDetail[]
    return (
        <Tabs
            defaultValue="view"
            className="w-full"
        >
            <TabsList className="bg-transparent border-b-2 h-16 w-full justify-between mb-4">
            </TabsList>
        </Tabs>
    )
}

export default PipelineIdPage