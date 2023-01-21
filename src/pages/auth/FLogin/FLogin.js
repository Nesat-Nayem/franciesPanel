import React, { useState } from 'react';

// import { redirect } from "react-router-dom";
import './FLogin.css'
import Swal from "sweetalert2";
import axios from "axios";

const FLogin = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const formRef = React.createRef();

  // const location = useLocation();

  const inactiveaccess = () => {
    Swal.fire(
      "Oops...",
      "Your access is pending at this time. Please contract with admin",
      "error"
    );
    // console.log('log out clicked')
    // dispatch(signOut());
  };

  const activeAccess = () => {
    // const options = { position: "bottom-center" };
    // cogoToast.success("Signin successfull", options);
    Swal.fire(
      "Done",
      "please enter dashbord",
      "success"
    );
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
      console.log(response.data.status);
      {
        response.data.status === "InActive"
          ? // console.log('he is not active')

            inactiveaccess()
          : activeAccess();
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