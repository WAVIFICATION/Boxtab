import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListOfwidgets from '../../Addons/Widgets/ListOfWidgets';

export default function GeneralSettings(props) {
  const [open, setOpen] = useState(false);
  const [openWidgets, setOpenWidgets] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 4,
  };
  console.log(ListOfwidgets)

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          zIndex: '100',
          position: 'absolute',
          right: '0.75rem',
          top: '0.75rem',
        }}
      >
        <SettingsIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="Title" variant="h3" component="div">
            Boxtab
          </Typography>
          <Typography id="Description" variant="h6" component="div">
            Settings
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>

          <List>
            <ListItemButton onClick={() => {setOpenWidgets(!openWidgets)}}>
              <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
              <ListItemText primary="Widgets" />
              {openWidgets ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openWidgets} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {ListOfwidgets.list.map((widgets) => WidgetLister(widgets, props.addWidgets))}
              </List>
            </Collapse>
          </List>
        </Box>
      </Modal>
    </div>
  );
}

function WidgetLister(widgetInfo, addWidgets) {
  return (
    <ListItemButton sx={{ pl: 4 }} key={widgetInfo.WidgetName}>
      <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
      <ListItemText primary={widgetInfo.DisplayName} onClick={() => addWidgets(widgetInfo.WidgetName)}/>
    </ListItemButton>
  );
}
