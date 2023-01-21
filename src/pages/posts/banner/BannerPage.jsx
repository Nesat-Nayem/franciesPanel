import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

// import { EditorState, convertToRow } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, makeStyles, TextField } from "@material-ui/core";
import AddPostRightPanels from "../../../components/extra/AddPostRightPanels/AddPostRightPanels";
import {
  Button,
  Form,
  Row,
  Col,
  Container,
  Card,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const BannerPage = (props) => {
  const { history } = props;

  return (
    <OftadehLayout>
      <Typography className="" variant="h5" component="h1">
        Banner
      </Typography>
      <OftadehBreadcrumbs path={history} />
      <div class="row mb-4">
        <div class="col-lg-12 col-md-6 mb-md-0 mb-4">
          <div class="card">
            <Row>
              <Col md={6}>
                <Image
                  src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                  alt="banner-image"
                  fluid
                  className="m-3 rounded
                              "
                />
              </Col>
              <Col md={6}>
                <Form>
                  <Form.Group className="m-3 " controlId="formBasicEmail">
                    <Form.Control type="file" placeholder=" " />
                  </Form.Group>
                  <Form.Group className="m-3 " controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Page URL " />
                  </Form.Group>
                  <Form.Group className="m-3 " controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Banner Number" />
                  </Form.Group>
                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      Update Banner
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </OftadehLayout>
  );
};

export default BannerPage;
