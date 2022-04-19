import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MainListItems from './listItem';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import './style.css';
import { Avatar, Button, Card, CardMedia, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import avatar from '../images/avatar.png'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from '../images/champria.png'
import ChatIcon from '@mui/icons-material/Chat';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Copyright(props: any) {
  return (
    <div style={{ backgroundColor: '#282828', color: "#fff", diplay: 'flex', flexDirection: 'row', padding: '10px' }} variant="body2" color="text.secondary" align="center" {...props}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={logo} alt="" style={{ width: '30px', height: '30px', marginRight: '10px'}} />
          {'©2022 Champria.gg Terms of Service Privacy Policy'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {'Connect with us'}
          <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
            <ChatIcon style={{ marginRight: '5px' }}/>
            <FacebookIcon style={{ marginRight: '5px' }}/>
            <TwitterIcon style={{ marginRight: '5px' }}/>
            <InstagramIcon style={{ marginRight: '5px' }}/>
            <LinkedInIcon/>
          </div>
        </div>
        </div>
    </div>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} style={{ backgroundColor: '#2e1771' }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              
            </Typography>
            <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
                <Avatar alt="Remy Sharp" src={avatar} />
                <KeyboardArrowDownIcon/>
            </IconButton>
            
          </Toolbar>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
            style={{ minHeight: '150px', flexDirection: 'column', alignItems: 'flex-start' }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              noWrap
              // sx={{ flexGrow: 1 }}
            >
              My Scrims
            </Typography>
            <div>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={10}
                label="Team Name"
                style={{ marginRight: '10px', border: '2px solid #fff', color: '#fff' }}
              >
                <MenuItem value={10}>Team Name</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <Button variant="contained" style={{ padding: '10px' }}>Create Scrim</Button>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} style={{ height: '100vh' }}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
            style={{ 
                backgroundColor: '#7635ef',
                border: 'none'
             }}
          >
            <img src={logo} alt="" style={{ width: '30px', height: '30px', marginRight: '10px'}} />
            <IconButton 
            onClick={toggleDrawer} 
            style={{ color: '#fff' }}>
              CHAMPRIA
            </IconButton>
          </Toolbar>
          {/* <Divider /> */}
          <List component="nav" style={{ backgroundColor: '#2f2f2f',
            color: '#fff',
            height: '100vh'
            }}>
            <MainListItems/>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: '#181818',
            flexGrow: 1,
            height: '100vh',
            overflowY: 'hidden'
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} style={{ marginTop: '300px', minHeight: '600px' }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={6} lg={8}>
                
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={6} lg={4}>
              <div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <Typography
                    component="h1"
                    variant="h5"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                    style={{ color: '#fff' }}
                  >
                    Scrim Review
                  </Typography>
                  <div>
                  <IconButton aria-label="delete" size="small" className='border-btn' style={{ border: '2px solid #333', color: '#fff', marginRight: '10px', borderRadius: '4px' }}>
                    <KeyboardArrowUpIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete" size="small" className='border-btn' style={{ border: '2px solid #333', color: '#fff', borderRadius: '4px' }}>
                    <KeyboardArrowDownIcon fontSize="inherit" />
                  </IconButton>
                  </div>
                </div>
                <div>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ padding: '5px', display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: '#282828', color: '#fff' }}>
                    <Typography variant="subtitle1" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                  </Box>
                  <Box sx={{ padding: '5px', paddingLeft: '15%', display: 'flex', backgroundColor: '#7635ef', width: '50%', color: '#fff', alignItems: 'center' }}>
                    <ThumbUpIcon fontSize="inherit" style={{marginRight: '5px'}}/>
                    <ThumbDownAltIcon fontSize="inherit"  style={{marginRight: '5px'}}/>
                    <FiberNewIcon fontSize="inherit"  style={{marginRight: '5px'}}/>
                    <FileUploadIcon fontSize="inherit" />
                  </Box>
                </Card>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ padding: '5px', display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: '#282828', color: '#fff' }}>
                    <Typography variant="subtitle1" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                  </Box>
                  <Box sx={{ padding: '5px', paddingLeft: '15%', display: 'flex', backgroundColor: '#7635ef', width: '50%', color: '#fff', alignItems: 'center' }}>
                    <ThumbUpIcon fontSize="inherit" style={{marginRight: '5px'}}/>
                    <ThumbDownAltIcon fontSize="inherit"  style={{marginRight: '5px'}}/>
                    <FiberNewIcon fontSize="inherit"  style={{marginRight: '5px'}}/>
                    <FileUploadIcon fontSize="inherit" />
                  </Box>
                </Card>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ padding: '5px', display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: '#282828', color: '#fff' }}>
                    <Typography variant="subtitle1" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                  </Box>
                  <Box sx={{ padding: '5px', paddingLeft: '15%', display: 'flex', backgroundColor: '#7635ef', width: '50%', color: '#fff', alignItems: 'center' }}>
                    <ThumbUpIcon fontSize="inherit" style={{marginRight: '5px'}}/>
                    <ThumbDownAltIcon fontSize="inherit"  style={{marginRight: '5px'}}/>
                    <FiberNewIcon fontSize="inherit"  style={{marginRight: '5px'}}/>
                    <FileUploadIcon fontSize="inherit" />
                  </Box>
                </Card>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ padding: '5px', display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: '#282828', color: '#fff' }}>
                    <Typography variant="subtitle1" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                  </Box>
                  <Box sx={{ padding: '5px', paddingLeft: '15%', display: 'flex', backgroundColor: '#7635ef', width: '50%', color: '#fff', alignItems: 'center' }}>
                    <Typography variant="subtitle1" component="div">
                      View
                    </Typography>
                    <ArrowForwardIosIcon/>
                  </Box>
                </Card>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ padding: '5px', display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: '#282828', color: '#fff' }}>
                    <Typography variant="subtitle1" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                  </Box>
                  <Box sx={{ padding: '5px', paddingLeft: '15%', display: 'flex', backgroundColor: '#7635ef', width: '50%', color: '#fff', alignItems: 'center' }}>
                    <Typography variant="subtitle1" component="div">
                      View
                    </Typography>
                    <ArrowForwardIosIcon/>
                  </Box>
                </Card>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ padding: '5px', display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: '#282828', color: '#fff' }}>
                    <Typography variant="subtitle1" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                  </Box>
                  <Box sx={{ padding: '5px', paddingLeft: '15%', display: 'flex', backgroundColor: '#7635ef', width: '50%', color: '#fff', alignItems: 'center' }}>
                    <Typography variant="subtitle1" component="div">
                      View
                    </Typography>
                    <ArrowForwardIosIcon/>
                  </Box>
                </Card>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ padding: '5px', display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: '#282828', color: '#fff' }}>
                    <Typography variant="subtitle1" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                    <Typography variant="caption" component="div">
                    PandaChan vs DORS
                    </Typography>
                  </Box>
                  <Box sx={{ padding: '5px', paddingLeft: '15%', display: 'flex', backgroundColor: '#7635ef', width: '50%', color: '#fff', alignItems: 'center' }}>
                    <Typography variant="subtitle1" component="div">
                      View
                    </Typography>
                    <ArrowForwardIosIcon/>
                  </Box>
                </Card>
                </div>
              </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Copyright sx={{ pt: 4 }} />
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}