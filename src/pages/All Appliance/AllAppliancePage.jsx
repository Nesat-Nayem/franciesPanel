import React from "react";
import OftadehLayout from "../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";

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
    name: "title",
    label: "Title",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "price",
    label: "Price",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "application_details",
    label: "Application-Details",
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
    title: "1BHK Lite",
    price: "24234",
    application_details: "1sofa ,2tables,1dinning,1Tv,2Ac,1Washing",
    Action: [
      <div>
        {" "}
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            ...
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Delete </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>,
    ],
  },
  {
    title: "1BHK Lite",
    price: "24234",
    application_details: "1sofa ,2tables,1dinning,1Tv,2Ac,1Washing",
    Action: [
      <div>
        {" "}
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            ...
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Delete </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>,
    ],
  },
  {
    title: "1BHK Lite",
    price: "24234",
    application_details: "1sofa ,2tables,1dinning,1Tv,2Ac,1Washing",
    Action: [
      <div>
        {" "}
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            ...
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Delete </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>,
    ],
  },
  {
    title: "1BHK Lite",
    price: "24234",
    application_details: "1sofa ,2tables,1dinning,1Tv,2Ac,1Washing",
    Action: [
      <div>
        {" "}
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            ...
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Delete </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>,
    ],
  },
];

const options = {
  filterType: "checkbox",
};

const AllAppliancePage = (props) => {
  const { history } = props;
  const classNamees = useStyles();

  return (
    <OftadehLayout>
      <Grid container className={classNamees.my3} alignItems="center">
        <Grid item className={classNamees.mRight}>
          <Typography variant="h5" component="h1">
            Manage All Appliance
          </Typography>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={" Manage All Appliance "}
        data={data}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default AllAppliancePage;
