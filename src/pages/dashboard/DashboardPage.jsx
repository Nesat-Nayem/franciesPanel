import React from "react";
import OftadehLayout from "../../components/OftadehLayout/OftadehLayout";
import { Paper, Grid, makeStyles, Button } from "@material-ui/core";

import MUIDataTable from "mui-datatables";
import "../../components/css/dashboard.css";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { getStoreInfo } from "../../store/storeUserInfo";

import './ModalStyles.css';
import { loadservicess, spacificService } from "../../store/services";
import { useDispatch, useSelector } from "react-redux";


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
  // console.log("get francies data initial false", showModal)
  const [orderDetails, setOrderDetails] = useState({});
  // console.log("modal test from backend ", orderDetails)

  const socket = io('http://localhost:7070')

  const currentUserFranchiseId = getStoreInfo()?._id
  // console.log("current francies id", currentUserFranchiseId)

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

 
  const handleResponse = (accepted) => {
    socket.emit(`response-${orderDetails.franchiseId}`, { accepted });
    console.log(`response-${orderDetails.franchiseId}`, { accepted });
    setShowModal(false);
  };



  // const { history } = props;
  // const classes = useStyles();


  // dashboard staticts 

  const services = useSelector((state) => state.services.Sservice)
  const reload = useSelector((state)=> state.services.reload)
  console.log("check state ", reload)

console.log("data test from main", services)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(spacificService(`francies_id=${getStoreInfo()._id}`))
  },[reload,showModal])


  // dynamic counting 

  // const countTodayServices = services.map((data)=>data.createdAt)

  // console.log("ravinue count", countTodayServices)

  // count today
  const today = new Date();
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  
  const servicesToday = services.filter(service => {
    const createdAt = new Date(service.createdAt);
    return createdAt >= startOfDay && createdAt < endOfDay;
  });
  
  const totalTodayServices = servicesToday.length;
  // console.log("today today", totalTodayServices)

  console.log("first one", totalTodayServices)
  
  // count today

  const userStatusCount = services.map((data)=>data.status);

  const userRavinueCount = services.map((data)=>data.transaction);

const totalAmount = userRavinueCount.reduce((acc, curr) => {
  const transactionAmounts = curr.map((transaction) => transaction.amount);
  return acc + transactionAmounts.reduce((sum, amount) => sum + amount, 0);
}, 0);

console.log("total amount", totalAmount )


  const completedCount = userStatusCount.filter((status) => status === "completed").length;
  const pendingCount = userStatusCount.filter((status) => status !== "completed").length;

  console.log("completedwork", completedCount )
  console.log("pendingwork", pendingCount)



  // dashboard staticts 

  return (
    <OftadehLayout>
      <main class="main-content position-relative max-height-vh-100 mt-5 h-100 border-radius-lg">
 
      

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header >
          <Modal.Title>{orderDetails.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Order ID: {orderDetails.id}</p>
          <p>Service: {orderDetails.service}</p>
          <p>Created at: {orderDetails.createat}</p>
        </Modal.Body>
        <div className="d-flex justify-content-end">
          <Button className="me-3" variant="outlined" color="primary" onClick={() => handleResponse(true)}>Accept</Button>
          <Button variant="outlined" color="secondary" onClick={() => setShowModal(false)}>Decline</Button>
        </div>

<div class="modal fade"   >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Your cart</h4>
        <button type="button" class="close" >
          <span >×</span>
        </button>
      </div>
      <div class="modal-body">

        <table class="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Product 1</td>
              <td>100$</td>
              <td><a><i class="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Product 2</td>
              <td>100$</td>
              <td><a><i class="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Product 3</td>
              <td>100$</td>
              <td><a><i class="fas fa-times"></i></a></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Product 4</td>
              <td>100$</td>
              <td><a><i class="fas fa-times"></i></a></td>
            </tr>
            <tr class="total">
              <th scope="row">5</th>
              <td>Total</td>
              <td>400$</td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary" >Close</button>
        <button class="btn btn-primary">Checkout</button>
      </div>
    </div>
  </div>
</div>




      </Modal>




        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-header p-3 pt-2">
                  <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                    <i class="material-icons opacity-10">calendar_view_day</i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">Today Inquiry</p>
                    {/* <h4 class="mb-0">$53k</h4> */}
                    <h4 class="mb-0">{totalTodayServices}</h4>
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
                    <i class="material-icons opacity-10">done_all</i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">Complete Work</p>
                    {/* <h4 class="mb-0">2,300</h4> */}
                    <h4 class="mb-0">{completedCount}</h4>
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
                    <i class="material-icons opacity-10">restart_alt</i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">Pending Work</p>
                    {/* <h4 class="mb-0">3,462</h4> */}
                    <h4 class="mb-0">{pendingCount}</h4>
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
                    <i class="material-icons opacity-10">insights</i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">Revenue</p>
                    <h4 class="mb-0">{totalAmount}</h4>
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
