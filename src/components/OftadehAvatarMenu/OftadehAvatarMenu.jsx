import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Mod } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  ListItemIcon,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import OftadehAvatarBadge from "../OftadehAvatarBadge/OftadehAvatarBadge";
import { AccountCircle, Settings, ExitToApp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
  menuIcon: {
    minWidth: "33px",
  },
  paddingRightZero: {
    paddingRight: 0,
  },
}));

const OftadehAvatarMenu = (props) => {
  const classes = useStyles(props);
  const { history } = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ListItem
        button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        alignItems="flex-start"
        className={classes.paddingRightZero}
      >
        <ListItemAvatar>
          <OftadehAvatarBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            <Avatar
              alt="Suraj"
              src="https://lh5.googleusercontent.com/-WqhFe4eMggE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFUa5CK9Wi6g5qd8ZUt6apKFYSwA/photo.jpg?sz=328"
            />
          </OftadehAvatarBadge>
        </ListItemAvatar>
        <Hidden implementation="css" smDown>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography component="span" variant="subtitle2">
                David Miller
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="caption"
                  className={classes.inline}
                  color="textPrimary"
                >
                  CP
                </Typography>
              </React.Fragment>
            }
          />
        </Hidden>
      </ListItem>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    <Link
                      to="/pages/auth/profile"
                      style={{ listStyle: "none", textDecoration: "none" }}
                    >
                      Profile
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={() => history.push("/")}>
                    <ListItemIcon className={classes.menuIcon}>
                      <ExitToApp fontSize="small" />
                    </ListItemIcon>
                    <Link
                      to="/"
                      style={{ listStyle: "none", textDecoration: "none" }}
                    >
                    
                      Logout
                    </Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

OftadehAvatarMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default OftadehAvatarMenu;
