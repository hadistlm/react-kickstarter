import React from 'react';
import { Link } from "react-router-dom";

import { Row, Col, Card, Form, Button } from 'react-bootstrap';

import GroupFormUpload from './GroupFormUpload';
import GroupFormManual from './GroupFormManual';
import GroupFormCopy from './GroupFormCopy';
import GroupFormReview from './GroupFormReview';
import GroupFormFinish from './GroupFormFinish';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'form',
      type: null
    };
  }

  render() {
    const { page, type } = this.state;

    return (
      <div className="main-content">
        <section className="section">
          <Row>
            <Col xs={1}>
              <div className="card card-statistic-1">
                <div className="card-icon bg-danger" style={{width: "65%"}}>
                  <i className="far fa-user"></i>
                </div>
              </div>
            </Col>
            <Col xs={11} className="section-header" style={{marginBottom : "35px"}}>
              <Row>
                <h1>Add Groups</h1>
                <small>Make Form Campaign to Broadcast your campaign!</small>
              </Row>
              <div className="section-header-breadcrumb">
              </div>
            </Col>
          </Row>
           
          <Form> 
            <Row>
              <Col xs={12}>
                <Card>
                  <Card.Body className="p-3">
                    <Row>
                      <Col md={4}>
                        <div className="d-grid" style={{height:'65px'}}>
                          <Button variant={page == 'form' ? 'danger' : 'secondary'} className="text-start fs-5" style={{borderRadius:'15px'}} onClick={(e) => {this.setState({page:'form'})}}>1. Add Contact</Button>
                        </div>
                      </Col>
                      <Col md={4} className="pt-3 pt-md-0">
                        <div className="d-grid" style={{height:'65px'}}>
                          <Button variant={page == 'review' ? 'danger' : 'secondary'} className="text-start fs-5" style={{borderRadius:'15px'}} onClick={(e) => {this.setState({page:'review'})}}>2. Review & Map </Button>
                        </div>
                      </Col>
                      <Col md={4} className="pt-3 pt-md-0">
                        <div className="d-grid" style={{height:'65px'}}>
                          <Button variant={page == 'complete' ? 'danger' : 'secondary'} className="text-start fs-5" style={{borderRadius:'15px'}} onClick={(e) => {this.setState({page:'complete'})}}>3. Complete</Button>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-5">
                      <div style={{display: page == 'form' ? 'block' : 'none'}}>
                        <Col md={12}>
                          <h5>Choose You way to add contacts</h5>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="type_add" id="radio-1" value="upload" onChange={(e) => {this.setState({type:'upload'})}}/>
                            <label className="form-check-label" htmlFor="radio-1">
                              Upload .CSV or .TXT
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="type_add" id="radio-2" value="manual" onChange={(e) => {this.setState({type:'manual'})}}/>
                            <label className="form-check-label" htmlFor="radio-2">
                              Add Contact Manually
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="type_add" id="radio-3" value="copy" onChange={(e) => {this.setState({type:'copy'})}}/>
                            <label className="form-check-label" htmlFor="radio-3">
                              Copy and Paste
                            </label>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="form-body mt-3 mb-3">
                            {type == 'upload' && (
                              <GroupFormUpload />
                            )}
                            {type == 'manual' && (
                              <GroupFormManual />
                            )}
                            {type == 'copy' && (
                              <GroupFormCopy />
                            )}
                          </div>
                        </Col>
                      </div>
                      <div style={{display: page == 'review' ? 'block' : 'none'}}>
                        <GroupFormReview />
                      </div>
                      <div style={{display: page == 'complete' ? 'block' : 'none'}}>
                        <GroupFormFinish />
                      </div>
                    </Row>
                    <Row style={{display: page == 'complete' ? 'none' : 'block'}}>
                      <Col md={{span:4, offset:8}} className="d-flex justify-content-end">
                        <Button variant="outline-danger">Kembali</Button>{' '}
                        <Button variant="secondary" style={{marginLeft:'5px'}}>Selanjutnya</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Form>
        </section>
      </div>
    );
  }
}

export default GroupForm;