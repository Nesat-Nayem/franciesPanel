import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

// import { EditorState, convertToRow } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, makeStyles, TextField } from "@material-ui/core";
import AddPostRightPanels from "../../../components/extra/AddPostRightPanels/AddPostRightPanels";
import { Button, Form, Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppliancePage = (props) => {
  const { history } = props;

  return (
    <OftadehLayout>
      <Typography className="" variant="h5" component="h1">
        Appliance
      </Typography>
      <OftadehBreadcrumbs path={history} />
      <div class="row mb-4">
        <div class="col-lg-12 col-md-6 mb-md-0 mb-4">
          <div class="">
            <div class="card-body px-5 pb-2">
              <Form>
                <Row>
                  <Col md={6}>
                    <Card className="px-3 mb-3">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-primary fw-bold pt-2">
                          {" "}
                          Title
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="title "
                          className="bg-light"
                        />
                      </Form.Group>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="px-3 mb-3">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-primary fw-bold pt-2">
                          {" "}
                          Price
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Price "
                          className="bg-light"
                        />
                      </Form.Group>
                    </Card>
                  </Col>
                  <Col md={12}>
                    <Card className="px-3 mb-3">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-primary fw-bold pt-2">
                          {" "}
                          Appliance Details
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Appliance Details "
                          className="bg-light"
                        />
                      </Form.Group>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="px-3 mb-3">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-primary fw-bold pt-2">
                          Second Title
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Second title "
                          className="bg-light"
                        />
                      </Form.Group>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="px-3 mb-3">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-primary fw-bold pt-2">
                          Second Package Price
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=" "
                          className="bg-light"
                        />
                      </Form.Group>
                    </Card>
                  </Col>
                  <Col md={12}>
                    <Card className="px-3 mb-3">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-primary fw-bold pt-2">
                          {" "}
                          Appliance Details
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Appliance Details "
                          className="bg-light"
                        />
                      </Form.Group>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="px-3 mb-3">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-primary fw-bold pt-2">
                          Size
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Size  "
                          className="bg-light"
                        />
                      </Form.Group>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="px-3 mb-3">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-primary fw-bold pt-2">
                          Category
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Category "
                          className="bg-light"
                        />
                      </Form.Group>
                    </Card>
                  </Col>
                </Row>

                <Button variant="primary" type="submit">
                  ADD
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </OftadehLayout>
  );
};

export default AppliancePage;
