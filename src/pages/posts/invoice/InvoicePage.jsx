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
    name: "name",
    label: "Name",
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
    name: "price",
    label: "Price",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "status",
    label: "Status",
    options: {
      filter: true,
      sort: true,
    },
  },
];

const data = [
  {
    id: "123456",
    name: "David",
    date: "Tue 10/01/2033",
    price: "$8789",
    status: [<Button variant="light">view</Button>],
  },
  {
    id: "123456",
    name: "David",
    date: "Tue 10/01/2033",
    price: "$8789",
    status: [<Button variant="light">view</Button>],
  },
  {
    id: "123456",
    name: "David",
    date: "Tue 10/01/2033",
    price: "$8789",
    status: [<Button variant="light">view</Button>],
  },
  {
    id: "123456",
    name: "David",
    date: "Tue 10/01/2033",
    price: "$8789",
    status: [<Button variant="light">view</Button>],
  },
];

const options = {
  filterType: "checkbox",
};

const InvoicePage = (props) => {
  const { history } = props;
  const classNamees = useStyles();

  return (
    <OftadehLayout>
      <Grid container className={classNamees.my3} alignItems="center">
        <Grid item className={classNamees.mRight}>
          <Typography variant="h5" component="h1">
            Invoice
          </Typography>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={" Invoice "}
        data={data}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default InvoicePage;
