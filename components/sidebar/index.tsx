import { Drawer, Box, IconButton, useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useToggle from 'hooks/useToggle';
import MenuItems from './MenuItems';

export default function Sidebar() {
  const showDrawer = useMediaQuery('(max-width:768px)');
  const [drawerOpen, setDrawerOpen] = useToggle(false);

  return (
    <>
      {showDrawer && (
        <>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            ModalProps={{
              container: document.getElementById('layout'),
              style: { position: 'absolute' },
            }}
            PaperProps={{
              style: {
                position: 'absolute',
                // width: fullWidth ? '100%' : 'auto',
                boxShadow: '-10px 1px 22px -8px rgba(0,0,0,0.32)',
              },
            }}
          >
            <Box>
              <MenuItems />
            </Box>
          </Drawer>
        </>
      )}
    </>
  );
}
