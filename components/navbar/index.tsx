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

export default function Navbar(props: Props) {
  const [darkMode, setDarkMode] = useToggle(true);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
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
      <Container maxWidth="lg" id="layout">
        <Sidebar />
        <Box my={4}>{props.children}</Box>
      </Container>
    </ThemeProvider>
  );
}
