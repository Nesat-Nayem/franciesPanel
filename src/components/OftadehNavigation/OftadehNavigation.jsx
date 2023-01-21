import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import OftadehAvatarMenu from "../OftadehAvatarMenu/OftadehAvatarMenu";
import navigationConfig from "../../oftadeh-configs/navigationConfig";

import OftadehNavGroup from "./sections/OftadehNavGroup";
import OftadehNavCollapse from "./sections/OftadehNavCollapse";
import OftadehNavItem from "./sections/OftadehNavItem";
import OftadehNavLink from "./sections/OftadehNavLink";
import { Typography } from "@material-ui/core";
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  mainContainer:{

    "& .MuiDrawer-paper":{
      overflowY: "visible !important",
      position: "absolute !important",
      background: "white !important"
     }

  },
  logoBg: {
    backgroundColor: theme.palette.type !== "dark" && "white",
  },
  logo: {
    padding: "1rem",
    color:"black !important",
    "& span": {
      display: "block",
      color: "rgba(41, 113, 245, 0.87)",
    },
   
  },
  navCustom: {
    backgroundColor:"white",
    "& .MuiTypography-root": {
      fontSize: ".85rem",
      color:"black !Important"
    },
    "& .MuiListItemIcon-root": {
      minWidth: "35px",
      color:"black !Important"
    },
    "& .MuiCollapse-wrapperInner a": {
      paddingLeft: "50px",
      color:"black !Important"
    },

 "& .MuiDrawer-paper":{
  overflowY: "none !important",
  position: "none !important",
  background: "none !important"
 }
 

  },



}));
const OftadehNavigation = (props) => {
  const classes = useStyles(props);

  

  return (
    <div className={clsx(classes.mainContainer)}>
      <div className={clsx(classes.toolbar, classes.logoBg)}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://i.ibb.co/NmND26W/tttttttttttttttttttt-removebg-preview.png"
            className="mb-1"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "100px",
              marginTop: "1rem",
            }}
          />
        </div>
        <Typography
          className={classes.logo}
          variant="h6"
          component="h1"
          align="center"
        >
          David Miller
          <span>Channel Partner</span>
        </Typography>
      </div>
      <Divider />
      <List className={classes.navCustom}>
        {navigationConfig.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === "group" && <OftadehNavGroup item={item} />}

            {item.type === "collapse" && <OftadehNavCollapse className={classes.navcollapes} item={item} />}

            {item.type === "item" && <OftadehNavItem item={item} />}

            {item.type === "link" && <OftadehNavLink item={item} />}

            {item.type === "divider" && <Divider className="my-16" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default OftadehNavigation;
