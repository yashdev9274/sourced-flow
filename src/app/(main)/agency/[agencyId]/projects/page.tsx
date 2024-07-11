import React from 'react'

const ProjectPage = ({ params }: { params: { agencyId: string } }) => {
    return (
        <div>
            This is project page
            <div>
                {params.agencyId}
            </div>
        </div>
    )
}

export default ProjectPage