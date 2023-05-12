import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import navigationConfig from "../../oftadeh-configs/navigationConfig";
import storageNav from "../../oftadeh-configs/storageNav";
import courierNav from "../../oftadeh-configs/courierNav";
import vehicleNav from "../../oftadeh-configs/vehicleNav";
import moverNav from "../../oftadeh-configs/moverNav";

import OftadehNavGroup from "./sections/OftadehNavGroup";
import OftadehNavCollapse from "./sections/OftadehNavCollapse";
import OftadehNavItem from "./sections/OftadehNavItem";
import OftadehNavLink from "./sections/OftadehNavLink";
import { Typography } from "@material-ui/core";
import clsx from "clsx";

import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  logoBg: {
    backgroundColor: theme.palette.type !== "dark" && "#18202c",
    // backgroundColor: "#18202c"
  },
  logo: {
    padding: "1rem",
    "& span": {
      display: "block",
      color: "rgba(41, 113, 245, 0.87)",
    },
  },
  navCustom: {
    "& .MuiTypography-root": {
      fontSize: ".85rem",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "35px",
    },
    "& .MuiCollapse-wrapperInner a": {
      paddingLeft: "50px",
    },
  },
}));



// }));
const OftadehNavigation = (props) => {
  // console.log("props from navigation", props);
  const classes = useStyles(props);

  // const service = useSelector((state) => state.service.serviceName)
  // console.log("rest redux", service[0]?.payload?.service)
  // // const BuyService = "all"
  // const BuyService = service[0]?.payload?.service;
  const BuyService = 'movers'
  

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
    {BuyService === "all" ? navigationConfig.map((item) => (
      <React.Fragment key={item.id}>
        {item.type === "group" && <OftadehNavGroup item={item} />}

        {item.type === "collapse" && <OftadehNavCollapse className={classes.navcollapes} item={item} />}

        {item.type === "item" && <OftadehNavItem item={item} />}

        {item.type === "link" && <OftadehNavLink item={item} />}

        {item.type === "divider" && <Divider className="my-16" />}
      </React.Fragment>
    )) : (BuyService === "movers" ? moverNav.map((item) => (
      <React.Fragment key={item.id}>
        {item.type === "group" && <OftadehNavGroup item={item} />}

        {item.type === "collapse" && <OftadehNavCollapse className={classes.navcollapes} item={item} />}

        {item.type === "item" && <OftadehNavItem item={item} />}

        {item.type === "link" && <OftadehNavLink item={item} />}

        {item.type === "divider" && <Divider className="my-16" />}
      </React.Fragment>
    ))
    
    : (BuyService === "storage" ? storageNav.map((item) => (
      <React.Fragment key={item.id}>
        {item.type === "group" && <OftadehNavGroup item={item} />}

        {item.type === "collapse" && <OftadehNavCollapse className={classes.navcollapes} item={item} />}

        {item.type === "item" && <OftadehNavItem item={item} />}

        {item.type === "link" && <OftadehNavLink item={item} />}

        {item.type === "divider" && <Divider className="my-16" />}
      </React.Fragment>
    ))
    
    : (BuyService === "vehicle" ? vehicleNav.map((item) => (
      <React.Fragment key={item.id}>
        {item.type === "group" && <OftadehNavGroup item={item} />}

        {item.type === "collapse" && <OftadehNavCollapse className={classes.navcollapes} item={item} />}

        {item.type === "item" && <OftadehNavItem item={item} />}

        {item.type === "link" && <OftadehNavLink item={item} />}

        {item.type === "divider" && <Divider className="my-16" />}
      </React.Fragment>
    ))
    : (BuyService === "courier" ? courierNav.map((item) => (
      <React.Fragment key={item.id}>
        {item.type === "group" && <OftadehNavGroup item={item} />}

        {item.type === "collapse" && <OftadehNavCollapse className={classes.navcollapes} item={item} />}

        {item.type === "item" && <OftadehNavItem item={item} />}

        {item.type === "link" && <OftadehNavLink item={item} />}

        {item.type === "divider" && <Divider className="my-16" />}
      </React.Fragment>
    ))
    
    
    :<div>Variable value not match</div>))))}
</List> 
    </div>
  );
};

export default OftadehNavigation;
