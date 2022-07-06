import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { default as ClockMenu } from './clock/menu';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';

function GeneralWidgetsMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [settings, setSettings] = React.useState({});

  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    props.generalSettingsOutro(settings);
  }, [settings]);

  useEffect(() => {
    setSettings(props.generalSettingsIntro);
  }, []);

  const buttonStyle = {
    position: 'absolute',
    right: '0.95rem',
    top: 0,
    zIndex: 12,
  };

  return (
    <div style={buttonStyle}>
      <IconButton
        color="primary"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        component="span"
        style={buttonStyle}
        onClick={handleClick}
      >
        <EditIcon />
      </IconButton>
      <Paper>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
          <MenuItem>
            {props.widgetType == 'AnalogClock' && (
              <ClockMenu
                width={props.width}
                height={props.height}
                settingsOutro={setSettings}
                settingsIntro={settings}
              />
            )}
          </MenuItem>
        </Menu>
      </Paper>
    </div>
  );
}

export default GeneralWidgetsMenu;
