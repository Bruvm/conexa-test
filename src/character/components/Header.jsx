import { Box, Button, Typography, Grid} from '@mui/material'
import RickAndMortyImage from '../../assests/img/rick_and_morty.png'
import { PaddingRounded } from '@mui/icons-material'

export const Header = () => {
    return (
        <Grid container className="header" sx={{ backgroundColor: 'neutral.main', display:'flex', flexDirection: {xs:'row', lg:'column'}, justifyContent: 'flex-start', paddingLeft:{xs: '50px', lg: '120px'}, paddingRight:{xs:'50px'} }}>
            <Grid  xs={12} md={7} lg={6} sx={{ display: 'flex'}}>
                <img src={RickAndMortyImage} alt='RickAndMortyImage' className='img-header' style={{ width: '100%', marginTop: 'auto' }} />
            </Grid>
            <Grid  xs={12} md={8} lg={6}>
                <Box sx={{ paddingTop: '40px' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '25px', marginBottom: '20px', fontFamily: 'Pangolin', color: "secondary.main" }}>
                        This is a website where you can find all the characters of the best TV show in the whole earth
                    </Typography>
                    <Button variant='contained' href="#characters">Start now</Button>
                </Box>
            </Grid>
        </Grid>
    )
}
