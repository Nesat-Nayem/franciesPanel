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
    name: "city_name",
    label: "City Name",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "total_vendor",
    label: "Total Vender",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "total_franchises",
    label: "Total Franchises",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "total_earn",
    label: "Total Earn ",
    options: {
      filter: true,
      sort: true,
    },
  },
];

const data = [
  {
    id: "32b53g65y879i48652y...",
    city_name: " Singapur",
    total_vendor: "3 service available",
    total_franchises: "Storage",
    total_earn: "343536",
  },
  {
    id: "32b53g65y879i48652y...",
    city_name: " Singapur",
    total_vendor: "3 service available",
    total_franchises: "Storage",
    total_earn: "343536",
  },
];

const options = {
  filterType: "checkbox",
};

const CityPage = (props) => {
  const { history } = props;
  const classNamees = useStyles();

  return (
    <OftadehLayout>
      <Grid container className={classNamees.my3} alignItems="center">
        <Grid item className={classNamees.mRight}>
          <Typography variant="h5" component="h1">
            City Information
          </Typography>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={"  City Information "}
        data={data}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default CityPage;
