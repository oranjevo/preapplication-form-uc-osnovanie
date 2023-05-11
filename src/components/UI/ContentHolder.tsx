import { Container } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const ContentHolder = ({ children }: Props) => {
    return (
        <Container
            maxWidth={'md'}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                minWidth: '900px'
            }}
        >
            {children}
        </Container>
    )
}

export { ContentHolder }
