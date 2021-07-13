import { Drawer, Box, IconButton, useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useToggle from 'hooks/useToggle';
import MenuItems from './MenuItems';

export default function Sidebar() {
  const showDrawer = useMediaQuery('(max-width:768px)');
  const [drawerOpen, setDrawerOpen] = useToggle(false);

  return (
    <>
      {showDrawer ? (
        <>
          <Box>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Box>
              <MenuItems />
            </Box>
          </Drawer>
        </>
      ) : (
        <Box borderRight={1}>
          <MenuItems />
        </Box>
      )}
    </>
  );
}
