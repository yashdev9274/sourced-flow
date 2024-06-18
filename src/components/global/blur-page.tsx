import React from 'react'

type Props = {
    children: React.ReactNode
}

const BlurPage = ({ children }: Props) => {
    return (
        <div>{children}</div>
    )
}

export default BlurPage