import React from "react";
import OftadehLayout from "../../components/OftadehLayout/OftadehLayout";
import { Paper, Grid, makeStyles, Button } from "@material-ui/core";

import MUIDataTable from "mui-datatables";
import "../../components/css/dashboard.css";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { getStoreInfo } from "../../store/storeUserInfo";

import './ModalStyles.css';


const useStyles = makeStyles((them) => ({
  paddingPaper: {
    padding: "10px 5px 5px 10px",
  },
  mt: {
    marginTop: 13,
  },
  titlePaper: {
    marginBottom: "16px",
  },
  visitorChart: {
    // height: "150px"
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

// recent inquery 



const columns1 = [
  {
    name: "Move_From",
    label: "Move-From",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Moving_to",
    label: "Moving To",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Number",
    label: "Number",
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
    name: "parking_area",
    label: " parking-Area",
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

const data1 = [
  {
    Move_From: "Pune",
    Moving_to: " Hyderabad",
    Number: "9876543210",
    date: "12-12-2020",
    time: "10:00 AM",
    parking_area: "Area Parking",
    details: [<Button variant="light">view</Button>],
  },
  {
    Move_From: "Pune",
    Moving_to: "Hyderabad",
    Number: "9876543210",
    date: "12-12-2020",
    time: "12:00 PM",
    parking_area: "area-parking",
    details: [<Button variant="light">view</Button>],
  },
];

const options1 = {
  filterType: "checkbox",
};


// recent inquery 



const DashboardPage = (props) => {

  const [showModal, setShowModal] = useState(false);
  console.log("get francies data initial false", showModal)
  const [orderDetails, setOrderDetails] = useState({});
  console.log("modal test from backend ", orderDetails)

  const socket = io('http://localhost:7070')

  const currentUserFranchiseId = getStoreInfo()?._id
  console.log("current francies id", currentUserFranchiseId)

  useEffect(() => {
    socket.on('hello', (data) => {
      // Check if the notification is for the current user
      if (data.franchiseId === currentUserFranchiseId) {
        setOrderDetails(data);
        setShowModal(true);
      }
    });

    // Clean up the listener when the component is unmounted
    return () => {
      socket.off('hello');
    };
  }, []);

  // const handleResponse = (accepted) => {
  //   socket.emit(`response-${orderDetails.franchiseId}`, { accepted });
  //   console.log('Accepted:', accepted);
  //   setShowModal(false);
  // };

  // console.log("client order id", orderDetails.franchiseId)
  const handleResponse = (accepted) => {
    socket.emit(`response-${orderDetails.franchiseId}`, { accepted });
    console.log(`response-${orderDetails.franchiseId}`, { accepted });
    setShowModal(false);
  };

  // const handleResponse = (accepted) => {
  //   console.log(`Emitting response`, { accepted, franchiseId: orderDetails.franchiseId });
  //   socket.emit('response', { accepted, franchiseId: orderDetails.franchiseId });
  //   setShowModal(false);
  // };


  const { history } = props;
  const classes = useStyles();

  return (
    <OftadehLayout>
      {/* <h1>Dashboard</h1> */}
      <main class="main-content position-relative max-height-vh-100 mt-5 h-100 border-radius-lg">
        {/* {showModal && (
      <div className="modal">
        <h2>New Order</h2>
        <p>{orderDetails.message}</p>
        <button onClick={() => handleResponse(true)}>Accept</button>
        <button onClick={() => handleResponse(false)}>Decline</button>
      </div>
    )} */}

        <Popup
          open={showModal}
          onClose={() => setShowModal(false)}
          modal
          closeOnDocumentClick
        >

          <div className="modal-content">
            <div className="modal-header">
              <h2>{orderDetails.heading}</h2>
            </div>
            <div className="modal-body">
              <p>Order ID: {orderDetails.id}</p>
              <p>Service: {orderDetails.service}</p>
              {/* <p>Franchise ID: {orderDetails.franchiseId}</p> */}
              <p>Created at: {orderDetails.createat}</p>
              {/* <p>Message: {orderDetails.message}</p> */}
              {/* <p>Accept Duration: you need to accept under 10 secund </p> */}
            </div>
            <div className="modal-footer">
              <button onClick={() => handleResponse(true)}>Accept</button>
              <button onClick={() => handleResponse(false)}>Decline</button>
            </div>
          </div>

        </Popup>

        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-header p-3 pt-2">
                  <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                    <i class="material-icons opacity-10">weekend</i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">Today's Money</p>
                    <h4 class="mb-0">$53k</h4>
                  </div>
                </div>
                <hr class="dark horizontal my-0" />
                <div class="card-footer p-3">
                  <p class="mb-0">
                    <span class="text-success text-sm font-weight-bolder">
                      +55%{" "}
                    </span>
                    than lask week
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-header p-3 pt-2">
                  <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                    <i class="material-icons opacity-10">person</i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">Today's Users</p>
                    <h4 class="mb-0">2,300</h4>
                  </div>
                </div>
                <hr class="dark horizontal my-0" />
                <div class="card-footer p-3">
                  <p class="mb-0">
                    <span class="text-success text-sm font-weight-bolder">
                      +3%{" "}
                    </span>
                    than lask month
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-header p-3 pt-2">
                  <div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                    <i class="material-icons opacity-10">person</i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">New Clients</p>
                    <h4 class="mb-0">3,462</h4>
                  </div>
                </div>
                <hr class="dark horizontal my-0" />
                <div class="card-footer p-3">
                  <p class="mb-0">
                    <span class="text-danger text-sm font-weight-bolder">
                      -2%
                    </span>
                    than yesterday
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card">
                <div class="card-header p-3 pt-2">
                  <div class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                    <i class="material-icons opacity-10">weekend</i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">Sales</p>
                    <h4 class="mb-0">$103,430</h4>
                  </div>
                </div>
                <hr class="dark horizontal my-0" />
                <div class="card-footer p-3">
                  <p class="mb-0">
                    <span class="text-success text-sm font-weight-bolder">
                      +5%{" "}
                    </span>
                    than yesterday
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* customers inquery */}

          <div className="mt-5">
            <MUIDataTable
              title={"Customer Inquiry"}
              data={data}
              columns={columns}
              options={options}
            />
          </div>


          <div className="mt-5">
            <MUIDataTable
              title={"Recent Inquiry"}
              data={data1}
              columns={columns1}
              options={options1}
            />
          </div>

        </div>
      </main>
    </OftadehLayout>
  );
};

export default DashboardPage;
