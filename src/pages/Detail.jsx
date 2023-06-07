import { Link, useParams } from "react-router-dom"
import { useAxios } from "../hooks/useAxios"
import { Button, Container, Grid, Typography } from "@mui/material";
import { HasError, HistoryChart, Loading } from "../components";

import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';

export const Detail = () => {

  const { id } = useParams();
  const { response, loading, hasError } = useAxios(`/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`)

  if (loading) {
    return <Loading />
  } else if (hasError) {
    return <HasError />
  }

  return (
    <Container
      maxWidth='lg'
    >
      <Grid
        container
        gap={2}
      >

        <Grid // Return Button
          item
          xs={12}
        >
          <Button
            variant="text" startIcon={<KeyboardReturnRoundedIcon />}
            component={Link}
            to='home'
          >
            return
          </Button>
        </Grid>

        <Grid
          className="animate__animated animate__fadeIn"
          item
          xs={12}
        >
          <HistoryChart />
        </Grid>

        <Grid // Coin name
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginY: 2
          }}
        >
          <img
            style={{ width: '3.5rem', height: '3.5rem', marginRight: 4, borderRadius: '50%' }}
            src={response?.image.small}
            alt={`Icon ${response?.name}`}
          />
          <Typography
            variant="h4"
          >
            {response?.name}
          </Typography>
        </Grid>

        <Grid // Coin description
          className="animate__animated animate__fadeInUp"
          item
          xs={12}
          sx={{
            paddingBottom: 16
          }}
        >
          <Typography
            variant='body1'
            target='_blank'
            dangerouslySetInnerHTML={{ __html: response?.description.en }}
          />
        </Grid>

      </Grid>

    </Container>
  )
}
