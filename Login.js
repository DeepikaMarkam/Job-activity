import React, { Component } from 'react';
// import Axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import ls from 'local-storage';
import backgroundImage from '../assets/img/icons/common/4.svg';
import { connect } from 'react-redux';
import { login } from '../redux/action/user';
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  Alert,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container
} from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: false
      // visible: this.props.user.visible
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false, isLogin: '' });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = async e => {
    e.preventDefault();

     var url =
       'https://e9b18385-28b5-414f-b976-a6ea8fdb783a.mock.pstmn.io/api/v1/users/login';
     var payload = {
       email: this.state.email,
       password: this.state.password
     };

     axios.put(url, payload)
       .then(res => {
         var dataResponse = res.data;
         let status_code = dataResponse.status_code;

         console.log(res);
         if (status_code === 200) {

           ls.set('token', dataResponse.token);
           // ls.set('email', dataResponse.email);

           this.setState({
             isLogin: true,
             buttonDisable: true,
             message: dataResponse.message,
             visible: true
           });

           this.props.history.push('/dashboard');


         } else {
           this.setState({
             isLogin: false,
             buttonDisable: false,
             visible: true
           });
         }
       })
       .catch(err => {
        ls.set('token', "abc");
        this.props.history.push('/dashboard');
         console.log(err);
         this.setState({
           isLogin: false,
           buttonDisable: false,
           message: err.response.data.message,
           visible: true

         });
       });


    //const data = { email: this.state.email, password: this.state.password };
    //await this.props.dispatch(login(data));

    //const token = this.props.user.token;
    // console.log(this.props.dispatch(login(data)));
    //console.log(token);
    //ls.set('token', token);
    //alert("token:"+token)
    //this.props.history.push('/dashboard');

  };


  loginInvalid = () => {
    if (this.props.user.isLogin === false) {
      return (
        <Alert
          style={{ textAlign: 'center' }}
          color="danger"
          isOpen={this.props.user.visible}
        >
          {this.props.user.message}
        </Alert>
      );
    } else if (this.props.user.isLogin === true) {
      return (
        <>
          <Alert color="success" isOpen={this.props.user.visible}>
            {this.props.user.message}
          </Alert>
          {this.props.history.push('/dashboard')}
        </>
      );
    }
  };

  render() {
    let logintoken;
    if (ls.get('token') && ls.get('token') !== undefined) {
      logintoken = <Redirect to="/" />;
    } else {
      logintoken = <Redirect to="/login" />;
    }
    return (
      <>
        {logintoken}
        <div>
          <Container
            className="pt-lg-md"
            // style={{ backgroundImage: `url(${backgroundImage})` }}
            style={bgImage}
          >
            <Row className="justify-content-center mt-7">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <h2>Login with email</h2>
                    </div>
                    <Form onSubmit={this.onSubmitHandler}>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                          ></Input>
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                          ></Input>
                        </InputGroup>
                      </FormGroup>

                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                      </div>

                      <div className="text-center">
                        <FormGroup>
                          <Button color="primary"> Login </Button>
                        </FormGroup>
                      </div>

                      <Col>
                        <div>{this.loginInvalid()}</div>
                      </Col>
                    </Form>
                  </CardBody>
                </Card>

                {/* <Col className="text-justify-center" xs="6">
                  <div>Don't have an account?</div>
                  <div>
                    <Link to="/register"> Register here</Link>{' '}
                  </div>
                </Col> */}
                <p className="mt-4">
                  Don't have an account?{' '}
                  <Link
                    className="btn btn-link pl-1 text-capitalize"
                    to="/register"
                    exact
                  >
                    Register here
                  </Link>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

const bgImage = {
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${backgroundImage})`
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Login);
