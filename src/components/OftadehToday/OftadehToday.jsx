import React from "react";
import moment from "moment";
import { Typography, Divider, makeStyles } from "@material-ui/core";

import EventsContainer from "../Events/Events-container";
import NotesContainer from "../Notes/Notes-container";

const useStyles = makeStyles((theme) => ({
  dividerMargin: {
    margin: "20px 0",
  },
}));

const OftadehToday = () => {
  const classNamees = useStyles();
  return (
    <div>
      <Typography variant="h5">{moment().format("dddd")}</Typography>
      <Typography variant="subtitle1">{moment().format("LL")}</Typography>
      <Divider
        classNamees={{
          root: classNamees.dividerMargin,
        }}
      />
      <Typography variant="h6">Events</Typography>
      <EventsContainer />
      <Divider
        classNamees={{
          root: classNamees.dividerMargin,
        }}
      />
      <Typography variant="h6">Notes</Typography>
      <NotesContainer />
    </div>
  );
};

export default OftadehToday;
