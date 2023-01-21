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
    name: "id",
    label: "ID",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Moving_From",
    label: "Moving-From",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Number",
    label: "Contact",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Address",
    label: "Address",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "floor_no",
    label: "Floor No",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "service_lift",
    label: " service-lift",
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
    id: "65a85f12h78y998y556c...",
    Moving_From: "surat",
    Number: "9876543210",
    Address: "Ahmadabad",
    floor_no: "34",
    service_lift: "True",
    details: [<Button variant="light">view</Button>],
  },
  {
    id: "65a85f12h78y998y556c...",
    Moving_From: "surat",
    Number: "9876543210",
    Address: "Ahmadabad",
    floor_no: "34",
    service_lift: "True",
    details: [<Button variant="light">view</Button>],
  },
  {
    id: "65a85f12h78y998y556c...",
    Moving_From: "surat",
    Number: "9876543210",
    Address: "Ahmadabad",
    floor_no: "34",
    service_lift: "True",
    details: [<Button variant="light">view</Button>],
  },
  {
    id: "65a85f12h78y998y556c...",
    Moving_From: "surat",
    Number: "9876543210",
    Address: "Ahmadabad",
    floor_no: "34",
    service_lift: "True",
    details: [<Button variant="light">view</Button>],
  },
];

const options = {
  filterType: "checkbox",
};

const AllVehiclePage = (props) => {
  const { history } = props;
  const classNamees = useStyles();

  return (
    <OftadehLayout>
      <Grid container className={classNamees.my3} alignItems="center">
        <Grid item className={classNamees.mRight}>
          <Typography variant="h5" component="h1">
            Vehicle Relocation Service
          </Typography>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={" Vehicle Relocation Service "}
        data={data}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default AllVehiclePage;
