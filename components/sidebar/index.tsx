import { Drawer, IconButton, useMediaQuery, Paper } from '@material-ui/core';
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
          <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
              <MenuIcon />
            </IconButton>
          </div>

          <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <div>
              <MenuItems />
            </div>
          </Drawer>
        </>
      ) : (
        <Paper>
          <MenuItems />
        </Paper>
      )}
    </>
  );
}
