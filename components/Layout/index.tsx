import React, { useMemo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useToggle from 'hooks/useToggle';
import ThemeSwitchButton from 'components/themeSwitchButton';
import Sidebar from 'components/sidebar';
import { SiMaterialUi } from 'react-icons/si';
import Link from 'next/link';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Layout(props: Props) {
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" passHref>
              <SiMaterialUi size={32} cursor="pointer" />
            </Link>
            <Toolbar style={{ flexGrow: 1 }}>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                React Material-UI Templates
              </Typography>

              <ThemeSwitchButton isDarkMode={darkMode} onModeChange={handleModeChange} />
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container maxWidth="lg" style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Box m={4} flex={1}>
          {props.children}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
