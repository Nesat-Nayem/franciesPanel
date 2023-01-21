import React from "react";
import OftadehLayout from "../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Dropdown from "react-bootstrap/Dropdown";

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
    name: "Customer",
    label: "Customer",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Info",
    label: "Info",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Status",
    label: "Status",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Join",
    label: "Join",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Action",
    label: "Action",
    options: {
      filter: true,
      sort: true,
    },
  },
];

const data = [
  {
    Customer: "Learn Javascript",
    Info: "Suraj",
    Status: "In Active",
    Join: "09/01/2023",
    Action: [<Button variant="light">Delete</Button>],
  },
  {
    Customer: "React.js with Material UI",
    Info: "Suraj",
    Status: "Active",
    Join: "09/01/2023",
    Action: [<Button variant="light">Delete</Button>],
  },
];

const options = {
  filterType: "checkbox",
};

const AllPostsPage = (props) => {
  const { history } = props;
  const classes = useStyles();

  return (
    <OftadehLayout>
      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            Customers
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push("/pages/posts/add-customers")}
            variant="outlined"
            color="primary"
            size="small"
          >
            Add Customers
          </Button>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={"Customer List"}
        data={data}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default AllPostsPage;
