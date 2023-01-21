import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

// import { EditorState, convertToRow } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, makeStyles, TextField } from "@material-ui/core";
import AddPostRightPanels from "../../../components/extra/AddPostRightPanels/AddPostRightPanels";
import OftadehPieChart from "../../../components/OftadehChart/OftadehPieChart";
import {
  Button,
  Form,
  Row,
  Col,
  Container,
  Card,
  Image,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderRevnue = (props) => {
  const { history } = props;

  return (
    <OftadehLayout>
      <Typography className="" variant="h5" component="h1">
        Order Revenue
      </Typography>
      <OftadehBreadcrumbs path={history} />
      <Row>
        <Col md={6}>
          <Row>
            <Col md={12}>
              <Card className="m-2">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title>Revenue Movers Packers</Card.Title>
                    <Image
                      src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                      alt="order-pic"
                      fluid
                      className=""
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                    />
                  </div>

                  <Card.Subtitle className="mb-2 text-muted">
                    $123456
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12}>
              {" "}
              <Card className="m-2">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title>Revenue Movers Packers</Card.Title>
                    <Image
                      src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                      alt="order-pic"
                      fluid
                      className=""
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                    />
                  </div>

                  <Card.Subtitle className="mb-2 text-muted">
                    $123456
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12}>
              {" "}
              <Card className="m-2">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title>Revenue Movers Packers</Card.Title>
                    <Image
                      src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                      alt="order-pic"
                      fluid
                      className=""
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                    />
                  </div>

                  <Card.Subtitle className="mb-2 text-muted">
                    $123456
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title> Overall Revenue</Card.Title>
              <OftadehPieChart />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Revenue</th>
                    <th>Price </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Movers Packers</td>
                    <td>$20123</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Storage</td>
                    <td>$256453</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Courier</td>
                    <td>$56458</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </OftadehLayout>
  );
};

export default OrderRevnue;
