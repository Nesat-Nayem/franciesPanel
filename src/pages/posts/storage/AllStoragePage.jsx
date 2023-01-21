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
    name: "warehouse",
    label: "Warehouse",
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
    name: "warehouse_space",
    label: "Warehouse-space",
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
    name: "subscription_type",
    label: " subscription-type",
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
    warehouse: "surat",
    Number: "9876543210",
    warehouse_space: "Ahmadabad",
    time: "10:00 AM",
    subscription_type: "xyz",
    details: [<Button variant="light">view</Button>],
  },
  {
    id: "65a85f12h78y998y556c...",
    warehouse: "surat",
    Number: "9876543210",
    warehouse_space: "Ahmadabad",
    time: "12:00 PM",
    subscription_type: "xyz",
    details: [<Button variant="light">view</Button>],
  },
  {
    id: "65a85f12h78y998y556c...",
    warehouse: "surat",
    Number: "9876543210",
    warehouse_space: "Ahmadabad",
    time: "12:00 PM",
    subscription_type: "xyz",
    details: [<Button variant="light">view</Button>],
  },
  {
    id: "65a85f12h78y998y556c...",
    warehouse: "surat",
    Number: "9876543210",
    warehouse_space: "Ahmadabad",
    time: "12:00 PM",
    subscription_type: "xyz",
    details: [<Button variant="light">view</Button>],
  },
];

const options = {
  filterType: "checkbox",
};

const AllStoragePage = (props) => {
  const { history } = props;
  const classNamees = useStyles();

  return (
    <OftadehLayout>
      <Grid container className={classNamees.my3} alignItems="center">
        <Grid item className={classNamees.mRight}>
          <Typography variant="h5" component="h1">
            Residential Storage
          </Typography>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={"Residential Storage "}
        data={data}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default AllStoragePage;
