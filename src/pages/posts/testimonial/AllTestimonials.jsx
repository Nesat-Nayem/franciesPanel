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
    name: "SL",
    label: "SL",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "customer_name",
    label: "Customer Name",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Rating",
    label: "Rating",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Service_Name",
    label: "Service-Name",
    options: {
      filter: true,
      sort: true,
    },
  },
];

const data = [
  {
    SL: "12345678994563210",
    customer_name: "David joi",
    Rating: "5 star",
    Service_Name: "vehicle transport",
  },
  {
    SL: "12345678994563210",
    customer_name: "David joi",
    Rating: "5 star",
    Service_Name: "vehicle transport",
  },
  {
    SL: "12345678994563210",
    customer_name: "David joi",
    Rating: "5 star",
    Service_Name: "vehicle transport",
  },
  {
    SL: "12345678994563210",
    customer_name: "David joi",
    Rating: "5 star",
    Service_Name: "vehicle transport",
  },
];

const options = {
  filterType: "checkbox",
};

const AllTestimonials = (props) => {
  const { history } = props;
  const classNamees = useStyles();

  return (
    <OftadehLayout>
      <Grid container className={classNamees.my3} alignItems="center">
        <Grid item className={classNamees.mRight}>
          <Typography variant="h5" component="h1">
            Manage Testimonials
          </Typography>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={"  Manage Testimonials "}
        data={data}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default AllTestimonials;
