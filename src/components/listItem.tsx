import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';


export default function MainListItems() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Scrims" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Recruitment Tools" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="My Teams" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Overwatch Data" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Event" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Champria chillin" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Champria challenge" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Sos Spring 2022" />
                </ListItemButton>
              </List>
            </Collapse>
          <ListItemButton>
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Blog" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Contact us" />
          </ListItemButton>
        </React.Fragment>
      )
};
