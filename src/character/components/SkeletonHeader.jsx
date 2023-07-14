import { Grid, Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonHeader = () => {
  return (
    <Grid container sx={{height: '80vh'}}>
        <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
    </Grid>
  )
}
