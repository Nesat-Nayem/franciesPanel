import React from "react";
import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles((theme) => ({
  my3: {
    margin: "1.3rem 0",
  },
  mb0: {
    marginBottom: 0,
  },
  mRight: {
    marginRight: ".85rem",
  },
  p1: {
    padding: ".85rem",
  },
}));

const columns = [
  {
    name: "Move_From",
    label: "Move-From",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Moving_to",
    label: "Moving To",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Number",
    label: "Number",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "date",
    label: "Date",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "time",
    label: "Pickup Time",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "parking_area",
    label: " parking-Area",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "details",
    label: "Details",
    options: {
      filter: true,
      sort: false,
    },
  },
];

const data = [
  {
    Move_From: "Pune",
    Moving_to: " Hyderabad",
    Number: "9876543210",
    date: "12-12-2020",
    time: "10:00 AM",
    parking_area: "Area Parking",
    details: [<Button variant="light">view</Button>],
  },
  {
    Move_From: "Pune",
    Moving_to: "Hyderabad",
    Number: "9876543210",
    date: "12-12-2020",
    time: "12:00 PM",
    parking_area: "area-parking",
    details: [<Button variant="light">view</Button>],
  },
];

const options = {
  filterType: "checkbox",
};

const AllMoversPage = (props) => {
  const { history } = props;
  const classNamees = useStyles();

  return (
    <OftadehLayout>
      <Grid container className={classNamees.my3} alignItems="center">
        <Grid item className={classNamees.mRight}>
          <Typography variant="h5" component="h1">
            Home-Relocation
          </Typography>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={"Home Relocation"}
        data={data}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default AllMoversPage;
