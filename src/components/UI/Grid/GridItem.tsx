import Grid2, { Grid2Props } from '@mui/material/Unstable_Grid2'
import { ReactNode } from 'react'

interface Props extends Grid2Props {
    children: ReactNode
}

const GridItem = ({ children, ...props }: Props) => {
    return <Grid2 {...props}>{children}</Grid2>
}

export default GridItem
