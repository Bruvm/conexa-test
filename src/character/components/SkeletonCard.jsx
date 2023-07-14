import { Box, Card, CardActionArea, CardContent, Grid, Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonCard = ({ repeat }) => {
    return (
        <Grid container spacing={3}>
            {Array.from({ length: repeat }).map((_, index) => (
                <Grid item lg={4} xs={6} key={index}>
                    <Card>
                        <CardActionArea>
                            <Skeleton variant="rectangular" width={'100%'} height={200} />

                            <CardContent>
                                <Box sx={{ pt: 0.5 }}>
                                    <Skeleton />
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )

}
