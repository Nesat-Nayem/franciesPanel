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
    label: "Categories-ID",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Img",
    label: "IMG",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Category_name",
    label: "Category-Name",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "created_date",
    label: "Created-Date",
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
    Img: "",
    Category_name: "movers&packers",
    created_date: "10/01/2023",
    floor_no: "34",
    service_lift: "True",
    details: [<Button variant="light">view</Button>],
  },
  {
    id: "65a85f12h78y998y556c...",
    img: "",
    Category_name: "movers&packers",
    created_date: "10/01/2023",

    details: [<Button variant="light">Delete</Button>],
  },
  {
    id: "65a85f12h78y998y556c...",
    img: "",
    Category_name: "movers&packers",
    created_date: "10/01/2023",

    details: [<Button variant="light">Delete</Button>],
  },
  {
    id: "65a85f12h78y998y556c...",
    img: "",
    Category_name: "movers&packers",
    created_date: "10/01/2023",

    details: [<Button variant="light">Delete</Button>],
  },
];

const options = {
  filterType: "checkbox",
};

const AllCategoryPage = (props) => {
  const { history } = props;
  const classNamees = useStyles();

  return (
    <OftadehLayout>
      <Grid container className={classNamees.my3} alignItems="center">
        <Grid item className={classNamees.mRight}>
          <Typography variant="h5" component="h1">
            Main Category
          </Typography>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={"   Main Category "}
        data={data}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default AllCategoryPage;
