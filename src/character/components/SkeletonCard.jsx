import { Box, Card, CardActionArea, CardContent, Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonCard = () => {
    return (
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
    )
}
