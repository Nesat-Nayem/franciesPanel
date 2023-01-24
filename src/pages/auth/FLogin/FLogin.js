import React, { useState } from 'react';

// import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './FLogin.css'
import Swal from "sweetalert2";
import axios from "axios";

const FLogin = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const formRef = React.createRef();

  // const location = useLocation();
  const history = useHistory();
  const inactiveaccess = () => {
    // Swal.fire(
    //   "Oops...",
    //   "Your access is pending at this time. Please contract with admin",
    //   "error"
    // );
    Swal.fire({
      title: 'Account Pending!',
      text: "Please Contract Here: support@trans23.net",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Got It!'
    }).then((result) => {
      if (result.isConfirmed) {
console.log("done")
      }
    })
    // console.log('log out clicked')
    // dispatch(signOut());
  };

  const activeAccess = (service) => {
    console.log(service)
    // history.push("/dashboard")
    // return <Redirect to='/dashboard'/>
    // Swal.fire(
    //   "Done",
    //   "please enter dashbord",
    //   "success"
    // );
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = { email, password };
    console.log(data);
    // formRef.current.submit();

    axios
    .post("http://localhost:7070/api/franciesSingIn", data)
    .then((response) => {
      // dispatch(signin(response.data));
      // console.log(response.data.service)
      {
        response.data.status === "InActive"
          ? // console.log('he is not active')

            inactiveaccess()
          : activeAccess(response.data.service);
      }
      // navigate("/dashboard");
      // redirect("/dashboard")
    })
    .catch((error) => {
      const options = { position: "bottom-center" };
      // cogoToast.error("Authentication failed", options);
    });
  };




    return (
        <div className='mainbodyd'>
           
<div className='mainrapercs'>


           <div class="login_form_containercs">
      <div class="login_formcs">
        <h2 className='csh2'>Login</h2>
        <div class="input_groupcs">
          <i class="fa fa-user"></i>
          <input
            type="text"
            placeholder="Useremail"
            onChange={event => setEmail(event.target.value)}
            class="input_textcs"
            autocomplete="off"
          />
        </div>
        <div class="input_groupcs">
          <i class="fa fa-unlock-alt"></i>
          <input
            type="password"
            placeholder="Password"
            class="input_textcs"
            onChange={event => setPassword(event.target.value)}
            autocomplete="off"
          />
        </div>
        <div class="button_group" id="login_buttoncs">
          <a  onClick={handleSubmit} >Submit</a>
        </div>
        <div class="fottercs">
          <a>Forgot Password ?</a>
          <a>SingUp</a>
        </div>
      </div>
    </div>

    </div>
        </div>
    );
};

export default FLogin;