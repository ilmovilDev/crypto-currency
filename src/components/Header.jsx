import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material"

import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <CurrencyBitcoinIcon
            fontSize="large"
            sx={{
              color: 'secondary.main'
            }}
          />
        </IconButton>
        <Typography
          sx={{
            letterSpacing: 2.5,
            fontWeight: 600
          }}
        >
          Crypto React
        </Typography>

        <Stack
          direction='row'
          alignItems='center'
          gap={1.5}
          marginLeft='auto'
        >
          <a
            href='https://www.linkedin.com/in/luis-carrasco-320586270/'
            target='_blank'
          >
            <LinkedInIcon
              aria-label='link to linkedin'
              sx={{
                color: '#ffffff',
              }}
            />
          </a>
          <a
            href='https://github.com/ilmovilDev'
            target='_blank'
          >
            <GitHubIcon
              aria-label='link to github'
              sx={{
                color: '#ffffff',
              }}
            />
          </a>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
