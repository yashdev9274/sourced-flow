import React from 'react'

type Props = {
    children: React.ReactNode
    params: { agencyId: string }
}

const layout = ({ children, params }: Props) => {
    return (
        <div>layout</div>
    )
}

export default layout;