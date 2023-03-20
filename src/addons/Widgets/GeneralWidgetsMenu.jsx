import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import ListOfWidgets from './ListOfWidgets';

function GeneralWidgetsMenu({
  generalSettingsOutro,
  generalSettingsIntro,
  widgetType,
  width,
  height,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [settings, setSettings] = useState({});

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    generalSettingsOutro(settings);
  }, [settings]);

  useEffect(() => {
    setSettings(generalSettingsIntro);
  }, []);

  const buttonStyle = {
    position: 'absolute',
    right: '0.95rem',
    top: 0,
    zIndex: 12,
  };
  const widgetComponent = ListOfWidgets.find(
    (elem) => elem.WidgetName === widgetType,
  );

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
          <MenuItem>
            {widgetComponent && (
              <widgetComponent.MenuComponent
                width={width}
                height={height}
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
