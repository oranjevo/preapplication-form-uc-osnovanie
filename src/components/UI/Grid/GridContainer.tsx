import { ReactNode } from 'react'
import Grid2, { Grid2Props } from '@mui/material/Unstable_Grid2'

interface Props extends Grid2Props {
    children: ReactNode
}

const GridContainer = ({ children, ...grid2Props }: Props) => {
    return (
        <Grid2 container {...grid2Props}>
            {children}
        </Grid2>
    )
}

export default GridContainer
