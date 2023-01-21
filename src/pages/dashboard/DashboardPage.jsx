import React from "react";
import OftadehLayout from "../../components/OftadehLayout/OftadehLayout";
import { Paper, Grid, makeStyles, Typography,Button } from "@material-ui/core";
import OftadehBreadcrumbs from "../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import OftadehChart from "../../components/OftadehChart/OftadehChart";
import OftadehBarChart from "../../components/OftadehChart/OftadehBarChart";

// import {  Button, makeStyles } from "@material-ui/core";
import OftadehPieChart from "../../components/OftadehChart/OftadehPieChart";
import MUIDataTable from "mui-datatables";
import SimpleTable from "./components/SimpleTable";
import clsx from "clsx";
import "../../components/css/dashboard.css";
import { Link } from "react-router-dom";
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
  const { history } = props;
  const classes = useStyles();

  return (
    <OftadehLayout>
      {/* <h1>Dashboard</h1> */}
      <main class="main-content position-relative max-height-vh-100 mt-5 h-100 border-radius-lg">
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
          {/* customers inquery */}

          {/* <div class="row mt-4">
            <div class="col-lg-4 col-md-6 mt-4 mb-4">
              <div class="card z-index-2">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <div class="chart">
                      <OftadehChart />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h6 class="mb-0">Website Views</h6>
                  <p class="text-sm">Last Campaign Performance</p>
                  <hr class="dark horizontal" />
                  <div class="d-flex">
                    <i class="material-icons text-sm my-auto me-1">schedule</i>
                    <p class="mb-0 text-sm">campaign sent 2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-4 mb-4">
              <div class="card z-index-2">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                    <div class="chart">
                      <OftadehChart />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h6 class="mb-0">Daily Sales</h6>
                  <p class="text-sm">
                    (<span class="font-weight-bolder">+15%</span>) increase in
                    today sales.
                  </p>
                  <hr class="dark horizontal" />
                  <div class="d-flex">
                    <i class="material-icons text-sm my-auto me-1">schedule</i>
                    <p class="mb-0 text-sm">updated 4 min ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mt-4 mb-3">
              <div class="card z-index-2">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div class="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                    <div class="chart">
                      <OftadehPieChart />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h6 class="mb-0">Completed Tasks</h6>
                  <p class="text-sm">Last Campaign Performance</p>
                  <hr class="dark horizontal" />
                  <div class="d-flex">
                    <i class="material-icons text-sm my-auto me-1">schedule</i>
                    <p class="mb-0 text-sm">just updated</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div class="row mb-4">
            <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="row">
                    <div class="col-lg-6 col-7">
                      <h6>Projects</h6>
                      <p class="text-sm mb-0">
                        <i class="fa fa-check text-info" aria-hidden="true"></i>
                        <span class="font-weight-bold ms-1">30 done</span> this
                        month
                      </p>
                    </div>
                    <div class="col-lg-6 col-5 my-auto text-end">
                      <div class="dropdown float-lg-end pe-4">
                        <Link
                          class="cursor-pointer"
                          id="dropdownTable"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-v text-secondary"></i>
                        </Link>
                        <ul
                          class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                          aria-labelledby="dropdownTable"
                        >
                          <li>
                            <Link
                              class="dropdown-item border-radius-md"
                              to="javascript:;"
                            >
                              Action
                            </Link>
                          </li>
                          <li>
                            <Link
                              class="dropdown-item border-radius-md"
                              to="javascript:;"
                            >
                              Another action
                            </Link>
                          </li>
                          <li>
                            <Link
                              class="dropdown-item border-radius-md"
                              to="javascript:;"
                            >
                              Something else here
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body px-0 pb-2">
                  <div class="table-responsive">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Companies
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Members
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Budget
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Completion
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="./img/small-logos/logo-xd.svg"
                                  class="avatar avatar-sm me-3"
                                  alt="xd"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">
                                  Material XD Version
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Ryan Tompson"
                              >
                                <img src="./img/team-1.jpg" alt="team1" />
                              </Link>
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Romina Hadid"
                              >
                                <img src="./img/team-2.jpg" alt="team2" />
                              </Link>
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Alexander Smith"
                              >
                                <img src="./img/team-3.jpg" alt="team3" />
                              </Link>
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img src="./img/team-4.jpg" alt="team4" />
                              </Link>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold">
                              $14,000
                            </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">
                                    60%
                                  </span>
                                </div>
                              </div>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-gradient-info w-60"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="./img/small-logos/logo-atlassian.svg"
                                  class="avatar avatar-sm me-3"
                                  alt="atlassian"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Add Progress Track</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Romina Hadid"
                              >
                                <img src="./img/team-2.jpg" alt="team5" />
                              </Link>
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img src="./img/team-4.jpg" alt="team6" />
                              </Link>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold">
                              {" "}
                              $3,000{" "}
                            </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">
                                    10%
                                  </span>
                                </div>
                              </div>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-gradient-info w-10"
                                  role="progressbar"
                                  aria-valuenow="10"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="./img/small-logos/logo-slack.svg"
                                  class="avatar avatar-sm me-3"
                                  alt="team7"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">
                                  Fix Platform Errors
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Romina Hadid"
                              >
                                <img src="./img/team-3.jpg" alt="team8" />
                              </Link>
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img src="./img/team-1.jpg" alt="team9" />
                              </Link>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold">
                              Not set
                            </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">
                                    100%
                                  </span>
                                </div>
                              </div>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-gradient-success w-100"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="./img/small-logos/logo-spotify.svg"
                                  class="avatar avatar-sm me-3"
                                  alt="spotify"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">
                                  Launch our Mobile App
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Ryan Tompson"
                              >
                                <img src="./img/team-4.jpg" alt="user1" />
                              </Link>
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Romina Hadid"
                              >
                                <img src="./img/team-3.jpg" alt="user2" />
                              </Link>
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Alexander Smith"
                              >
                                <img src="./img/team-4.jpg" alt="user3" />
                              </Link>
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img src="./img/team-1.jpg" alt="user4" />
                              </Link>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold">
                              $20,500
                            </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">
                                    100%
                                  </span>
                                </div>
                              </div>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-gradient-success w-100"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="./img/small-logos/logo-jira.svg"
                                  class="avatar avatar-sm me-3"
                                  alt="jira"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">
                                  Add the New Pricing Page
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Ryan Tompson"
                              >
                                <img src="./img/team-4.jpg" alt="user5" />
                              </Link>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold"> $500 </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">
                                    25%
                                  </span>
                                </div>
                              </div>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-gradient-info w-25"
                                  role="progressbar"
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="25"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="./img/small-logos/logo-invision.svg"
                                  class="avatar avatar-sm me-3"
                                  alt="invision"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">
                                  Redesign New Online Shop
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Ryan Tompson"
                              >
                                <img src="./img/team-1.jpg" alt="user6" />
                              </Link>
                              <Link
                                to="javascript:;"
                                class="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img src="./img/team-4.jpg" alt="user7" />
                              </Link>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold">
                              {" "}
                              $2,000{" "}
                            </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">
                                    40%
                                  </span>
                                </div>
                              </div>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-gradient-info w-40"
                                  role="progressbar"
                                  aria-valuenow="40"
                                  aria-valuemin="0"
                                  aria-valuemax="40"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="card h-100">
                <div class="card-header pb-0">
                  <h6>Orders overview</h6>
                  <p class="text-sm">
                    <i
                      class="fa fa-arrow-up text-success"
                      aria-hidden="true"
                    ></i>
                    <span class="font-weight-bold">24%</span> this month
                  </p>
                </div>
                <div class="card-body p-3">
                  <div class="timeline timeline-one-side">
                    <div class="timeline-block mb-3">
                      <span class="timeline-step">
                        <i class="material-icons text-success text-gradient">
                          notifications
                        </i>
                      </span>
                      <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0">
                          $2400, Design changes
                        </h6>
                        <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          22 DEC 7:20 PM
                        </p>
                      </div>
                    </div>
                    <div class="timeline-block mb-3">
                      <span class="timeline-step">
                        <i class="material-icons text-danger text-gradient">
                          code
                        </i>
                      </span>
                      <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0">
                          New order #1832412
                        </h6>
                        <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          21 DEC 11 PM
                        </p>
                      </div>
                    </div>
                    <div class="timeline-block mb-3">
                      <span class="timeline-step">
                        <i class="material-icons text-info text-gradient">
                          shopping_cart
                        </i>
                      </span>
                      <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0">
                          Server payments for April
                        </h6>
                        <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          21 DEC 9:34 PM
                        </p>
                      </div>
                    </div>
                    <div class="timeline-block mb-3">
                      <span class="timeline-step">
                        <i class="material-icons text-warning text-gradient">
                          credit_card
                        </i>
                      </span>
                      <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0">
                          New card added for order #4395133
                        </h6>
                        <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          20 DEC 2:20 AM
                        </p>
                      </div>
                    </div>
                    <div class="timeline-block mb-3">
                      <span class="timeline-step">
                        <i class="material-icons text-primary text-gradient">
                          key
                        </i>
                      </span>
                      <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0">
                          Unlock packages for development
                        </h6>
                        <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          18 DEC 4:54 AM
                        </p>
                      </div>
                    </div>
                    <div class="timeline-block">
                      <span class="timeline-step">
                        <i class="material-icons text-dark text-gradient">
                          payments
                        </i>
                      </span>
                      <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0">
                          New order #9583120
                        </h6>
                        <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          17 DEC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </OftadehLayout>
  );
};

export default DashboardPage;
