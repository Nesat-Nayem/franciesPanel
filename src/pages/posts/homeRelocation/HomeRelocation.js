import React, { useEffect } from "react";
import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";
import { spacificService } from "../../../store/services";
import { getStoreInfo } from "../../../store/storeUserInfo";

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
  // {
  //   name: "Moving_From",
  //   label: "Moving-From",
  //   options: {
  //     filter: true,
  //     sort: false,
  //   },
  // },
  {
    name: "movers_packers.from.city",
    label: "Moving From",
    options: {
      customBodyRender: (value) => value, // value is the city name
      filter: true,
      sort: false,
    }
  },
  {
    name: "movers_packers.from.contact_no",
    label: "Contact",
    options: {
      customBodyRender:(value) =>value,
      filter: true,
      sort: false,
    },
  },
  {
    name: "movers_packers.from.address",
    label: "Address",
    options: {
      customBodyRender:(value) =>value,
      filter: true,
      sort: true,
    },
  },
  {
    name: "movers_packers.from.floor_no",
    label: "Floor No",
    options: {
      customBodyRender:(value) =>value,
      filter: true,
      sort: true,
    },
  },
  {
    name: "movers_packers.from.has_service_lift",
    label: " service-lift",
    options: {
      customBodyRender:(value) =>value.toString(),
      filter: true,
      sort: true,
    },
  },
  {
    name: "details",
    label: "Details",
    options: {
      customBodyRender: (value) => (
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => {
            // open details page here
          }}
        >
          View
        </Button>
      ),
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

const HomeRelocation = (props) => {
  const { history } = props;
  const classNamees = useStyles();

  const home = useSelector((state) => state.services.Sservice)
  const reload = useSelector((state)=> state.services.reload)



  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(spacificService(`office_relocate&francies_id=${getStoreInfo()._id}`))
  },[reload])

  return (
    <OftadehLayout>
      <Grid container className={classNamees.my3} alignItems="center">
        <Grid item className={classNamees.mRight}>
          <Typography variant="h5" component="h1">
            Home Relocation
          </Typography>
        </Grid>
      </Grid>
      <OftadehBreadcrumbs path={history} />
      <MUIDataTable
        title={" Home Relocation "}
        // data={data}
        data={home}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default HomeRelocation;
