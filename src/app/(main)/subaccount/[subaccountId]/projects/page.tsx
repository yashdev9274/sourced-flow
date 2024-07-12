import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const ProjectPage = () => {
    return (
        <Tabs
            defaultValue="view"
            className="w-full"
        >
            <TabsList className="bg-transparent border-b-2 h-7 w-full flex justify-end mb-4 pb-5">

                <div>
                    <TabsTrigger value="view">Project View</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </div>
            </TabsList>
            <TabsContent value="view">

            </TabsContent>
        </Tabs>
    )
}

export default ProjectPage