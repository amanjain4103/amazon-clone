import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link, useHistory} from "react-router-dom";

const CustomPopup = (props) => {

  const history = useHistory();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    history.push(props.toRoute);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.messageHeader}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.messageBody}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK!!!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default CustomPopup;