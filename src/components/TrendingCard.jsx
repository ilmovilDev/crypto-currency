import { Link } from "react-router-dom"
import { Box, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useAxios } from "../hooks/useAxios"
import { Loading } from "./Loading"
import { HasError } from "./HasError"

import tranding from '../mookups/trending.json'

export const TrendingCard = () => {

  const { response, loading, hasError } = useAxios('/search/trending');

  if (loading) {
    return <Loading />
  } else if (hasError) {
    return <HasError />
  } else if ( !response || !response.coins ) {
    return <Typography variant="h6">No data found to display</Typography>
  }

  return (
    <Grid
      sx={{
        'a': {
          color: '#000',
          textDecoration: 'none',
          bgcolor: '#e9ecef',
          borderRadius: 2.5,
          boxShadow: 1
        },
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: {
          xs: 'start',
          md: 'center'
        },
        gap: 1
      }}
    >
      {response?.coins.map(coin => {

        const { id, name, symbol, small } = coin.item;

        return (
          <Grid
            aria-label={`Read more about ${ name }`}
            key={id} 
            component={Link} 
            to={`/coin/${id}`} 
            sx={{ 
              display: 'flex',
              paddingLeft: 2, 
              alignItems: 'center',
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 36, height: 36, borderRadius: '50%' }}
              image={small}
              alt={`icon ${ name }`}
            />
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}
            >
              <CardContent 
                sx={{ 
                  flex: '1 0 auto' 
                }}
              >
                <Typography variant="body1" fontWeight={600}>
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" lineHeight={0.75}>
                  {symbol}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        )
      })

      }

    </Grid>
  )
}