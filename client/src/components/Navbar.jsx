import React, { useState } from 'react';
import { Button, Slide, Box, AppBar, Typography, Stack, Toolbar, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';


const Navbar = () => {

  const [show_sideBar, set_Show_sideBar] = useState(false);
  const d = window.screen.availHeight-165;
  const f = window.screen.availHeight;

  const handleToggle = () => {
    if (show_sideBar) {
      set_Show_sideBar(false);
    } else {
      set_Show_sideBar(true);
    }
  }

  return (
    <Stack direction="row">


      <Slide direction="right" sx={{ flexGrow: 1, border:'1px solid gainsboro', height: f}} timeout={{
        appear: 500,
        exit: 200,
        enter: 500
      }} in={show_sideBar} mountOnEnter unmountOnExit>

        <Stack alignItems="flex-start" spacing={3}>

          <Typography variant="h3" component="div">News</Typography>
          
          <Divider sx={{ mt: 1 }}></Divider>

          <Button variant="text" textAlign="start"  sx={{fontSize:'15px'}} startIcon={<DashboardIcon 
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }} />}>Dashboard</Button>

          <Button variant="text" textAlign="start"  sx={{fontSize:'15px'}} startIcon={<ShoppingCartIcon size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }} />}>Order</Button>

          <Button variant="text" textAlign="start"  sx={{fontSize:'15px'}} startIcon={<PeopleAltIcon size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }} />}>Customers</Button>

          <Button variant="text" textAlign="start"  sx={{fontSize:'15px'}} startIcon={<BarChartIcon size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }} />}>Reports</Button>

          <Button variant="text" textAlign="start"  sx={{fontSize:'15px'}} startIcon={<LayersIcon size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }} />}>Integrations</Button>

          <Divider sx={{ mt: 1, mb: 1 }}></Divider>

          <Typography varint="h3" component="div">Saved Orders</Typography>


        </Stack>
      </Slide>



      <Box sx={{ flexGrow: 10 }} backgroundColor="grey">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, }}
              onClick={handleToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
              Dashboard
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        {show_sideBar === false ? (
          <Stack direction="row" sx={{ height: d }}>
            <Stack sx={{ border: '1px solid gainsboro', height: '100%' }}>
              <IconButton size="large"
                edge="start"
                aria-label="menu"
                sx={{ ml: 2, mt: 2, mr: 1 }}>
                <DashboardIcon />
              </IconButton>


              <IconButton size="large"
                edge="start"
                aria-label="menu"
                sx={{ ml: 2, mt: 2, mr: 1 }}>
                <ShoppingCartIcon />
              </IconButton>


              <IconButton size="large"
                edge="start"

                aria-label="menu"
                sx={{ ml: 2, mt: 2, mr: 1 }}>
                <PeopleAltIcon />
              </IconButton>


              <IconButton size="large"
                edge="start"

                aria-label="menu"
                sx={{ ml: 2, mt: 2, mr: 1 }}>
                <BarChartIcon />
              </IconButton>


              <IconButton size="large"
                edge="start"

                aria-label="menu"
                sx={{ ml: 2, mt: 2, mr: 1 }}>
                <LayersIcon />
              </IconButton>

              <Divider sx={{ mt: 1 }}></Divider>

              <IconButton size="large"
                edge="start"

                aria-label="menu"
                sx={{ ml: 2, mt: 8, mr: 1 }}>
                <AssignmentIcon />
              </IconButton>

              <IconButton size="large"
                edge="start"

                aria-label="menu"
                sx={{ ml: 2, mt: 2, mr: 1 }}>
                <AssignmentIcon />
              </IconButton>


              <IconButton size="large"
                edge="start"

                aria-label="menu"
                sx={{ ml: 2, mt: 2, mr: 1 }}>
                <AssignmentIcon />
              </IconButton>





            </Stack>



          </Stack>
        ) : null}


      </Box>
    </Stack>
  )
}

export default Navbar;