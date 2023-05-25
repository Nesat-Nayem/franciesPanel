import React, { useState } from 'react';
// import {  useNavigate } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './FLogin.css'
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { serviceAdd } from '../../../slice/serviceSlice';
import { postauth } from '../../../store/authentication';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

const FLogin = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate();
  const authData = useSelector((state) => state.authentication.apiResponse) // state.authentication.authData
  console.log("test auth data", authData )
  const [email, setEmail] = useState('');
  // const [redirect, setRedirect] = useState(false);
  const redirect = useSelector((state)=>state.authentication.redirect)
  const [password, setPassword] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const inactiveaccess = () => {

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

  const activeAccess = () => {
    // dispatch(serviceAdd(service))
    // console.log(service)

    history.push("/dashboard")

  };

  console.log("redirect data test ", redirect)
  if (redirect) {
    history.push("/dashboard");
  }


  // const authData.status === "InActive" ?   inactiveaccess() : activeAccess() 

  // { authData.status === "InActive" ? activeAccess() : inactiveaccess() }

  const onSubmit = data => dispatch(postauth(data))

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const data = { email, password };
  //   console.log(data);
  //   // formRef.current.submit();


  //   dispatch(postauth(data))

  //   // axios
  //   // .post("http://trans23server-env.eba-q3as37ty.ap-south-1.elasticbeanstalk.com/api/franciesSingIn", data)
  //   // .then((response) => {
  //   //   // dispatch(signin(response.data));
  //   //   // console.log(response.data.service)
  //   //   {
  //   //     response.data.status === "InActive"
  //   //       ? // console.log('he is not active')

  //   //         inactiveaccess()
  //   //       : activeAccess(response.data);
  //   //   }
  //   //   // navigate("/dashboard");
  //   //   // redirect("/dashboard")
  //   // })
  //   // .catch((error) => {
  //   //   const options = { position: "bottom-center" };
  //   //   // cogoToast.error("Authentication failed", options);
  //   // });
  // };





  return (
    <div className='mainbodyd'>

      <form onSubmit={handleSubmit(onSubmit)} className='mainrapercs'>
        <div class="login_form_containercs">
          <div class="login_formcs">
            <h2 className='csh2'>Login</h2>
            <div class="input_groupcs">
              <i class="fa fa-user"></i>
              <input
                type="text"
                placeholder="Useremail"
                // onChange={event => setEmail(event.target.value)}
                {...register("email")}
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
                // onChange={event => setPassword(event.target.value)}
                {...register("password")}
                autocomplete="off"
              />
            </div>
            <div class="button_group" id="login_buttoncs">
              <button 
              type="submit"
              
              >Submit</button>
            </div>
            <div class="fottercs">
              <a>Forgot Password ?</a>
              <a>SingUp</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FLogin;