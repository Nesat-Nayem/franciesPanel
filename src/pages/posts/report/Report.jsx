import React, { useEffect } from "react";
import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { spacificService } from "../../../store/services";
import { getStoreInfo } from "../../../store/storeUserInfo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import moment from "moment";

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
    name: "user.name",
    label: "Customer Name",
    options: {
      customBodyRender: (value) => value, 
      filter: true,
      sort: false,
    },
  },
  {
    name: "createdAt",
    label: "Date",
    options: {
    filter: true,
    sort: false,
    customBodyRender: (value) => moment(value).format("MMM Do YY")
    },
    },
   
   
  {
    name: "service",
    label: "Service",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "payment_details.total_amount",
    label: "Total Amount",
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

  
  const services = useSelector((state) => state.services.Sservice)
  const reload = useSelector((state)=> state.services.reload)
  // console.log("check state ", reload)

console.log("data test from report area", services)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(spacificService(`francies_id=${getStoreInfo()._id}`))
  },[reload])

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
        data={services}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  );
};

export default Report;
