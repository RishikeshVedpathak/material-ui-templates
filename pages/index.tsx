import React, { useMemo } from 'react';
import Head from 'next/head';
import useToggle from 'hooks/useToggle';
import ThemeSwitchButton from 'components/themeSwitchButton';
import { SiMaterialUi } from 'react-icons/si';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function Home() {
  const [darkMode, setDarkMode] = useToggle(true);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
        },
        typography: {
          h1: { fontFamily: 'Cinzel' },
          h2: { fontFamily: 'Cinzel' },
          h3: { fontFamily: 'Cinzel' },
          h4: { fontFamily: 'Cinzel' },
          h5: { fontFamily: 'Cinzel' },
          h6: { fontFamily: 'Cinzel' },
          subtitle1: { fontFamily: 'Montserrat' },
          subtitle2: { fontFamily: 'Montserrat' },
          body1: { fontFamily: 'Montserrat' },
          body2: { fontFamily: 'Montserrat' },
        },
      }),
    [darkMode]
  );

  const handleModeChange = (isDarkMode: boolean) => {
    setDarkMode(isDarkMode);
  };

  return (
    <>
      <Head>
        <title>React Material-IU Templates</title>
        <meta name="description" content="React Material-IU Templates" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <AppBar>
            <Toolbar style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <ThemeSwitchButton isDarkMode={darkMode} onModeChange={handleModeChange} />
            </Toolbar>
          </AppBar>
        </Container>
        <Container
          maxWidth="md"
          style={{ display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <SiMaterialUi size={140} cursor="pointer" color={theme.palette.primary.main} />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography variant="h3" color="primary" component="h1">
                React Material-UI Templates
              </Typography>
              <Typography variant="subtitle1" component="h6">
                Ready to use react templates for faster and easier web development. Beautifully crafted responsive
                templates build using{' '}
                <Chip
                  label={<Link href="https://material-ui.com/">Material-UI</Link>}
                  clickable
                  icon={<SiMaterialUi color={theme.palette.secondary.main} />}
                />
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <Button variant="contained" color="primary" size="large">
              <Link href="/templates">View Templates</Link>
            </Button>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}
