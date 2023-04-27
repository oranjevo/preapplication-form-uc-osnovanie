import Grid2, { Grid2Props } from '@mui/material/Unstable_Grid2'
import { ReactNode } from 'react'

interface Props extends Grid2Props {
    children: ReactNode
}

const GridItem = ({ children, ...grid2Props }: Props) => {
    return <Grid2 {...grid2Props}>{children}</Grid2>
}

export { GridItem }
