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
    name: "customer_name",
    label: "Customer Name",
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
      sort: false,
    },
  },
  {
    name: "Category",
    label: "Category",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "token_amount",
    label: "Token Amount",
    options: {
      filter: true,
      sort: true,
    },
  },
];

const data = [
  {
    customer_name: "david",
    date: "10/01/2023",
    Category: "Commercial Movers Packers",
    token_amount: "4343",
  },
  {
    customer_name: "david",
    date: "10/01/2023",
    Category: "Commercial Movers Packers",
    token_amount: "4343",
  },
  {
    customer_name: "david",
    date: "10/01/2023",
    Category: "Commercial Movers Packers",
    token_amount: "4343",
  },
  {
    customer_name: "david",
    date: "10/01/2023",
    Category: "Commercial Movers Packers",
    token_amount: "4343",
  },
];

const options = {
  filterType: "checkbox",
};

const Report = (props) => {
  const { history } = props;
  const classNamees = useStyles();

  return (
    <OftadehLayout>
      <Grid container className={classNamees.my3} alignItems="center">
        <Grid item className={classNamees.mRight}>
          <Typography variant="h5" component="h1">
            Report
          </Typography>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={" Report "}
        data={data}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default Report;
