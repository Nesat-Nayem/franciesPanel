import React from "react";
import OftadehLayout from "../../../components/OftadehLayout/OftadehLayout";
import { Link } from "react-router-dom";

const Profile = (props) => {
  return (
    <OftadehLayout>
      <div class="row mb-4">
        <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
          <div className="card bg-light">
            <div class="card-header pb-0">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6>Profile</h6>
                </div>
                <div class="col-lg-6 col-5 my-auto text-end"></div>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
              <div className="row">
                <div className="col-md-6 p-3">
                  <div class="">
                    <img
                      src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <p class="card-text">Todays Login time 5:30 Pm</p>
                      <p class="card-text">Todays Logout time 5:30 Pm</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-3">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Designation</h5>
                      <p class="card-text">Admin</p>
                    </div>
                    <hr />
                    <div class="card-body">
                      <h5 class="card-title">Joined Date</h5>
                      <p class="card-text">10/01/2023</p>
                    </div>
                    <hr />
                    <div class="card-body">
                      <h5 class="card-title">Email </h5>
                      <p class="card-text">example@gmail.com</p>
                    </div>
                    <hr />
                    <div class="card-body">
                      <h5 class="card-title">Phone </h5>
                      <p class="card-text">+91987654310</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="card h-100">
            <div class="card-header pb-0">
              <h6>Edit Profile </h6>
            </div>
            <div class="card-body p-3">
              <form>
                <div class="mb-3">
                  <label for="designation" class="form-label">
                    Designation
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="designation"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="joinedDate" class="form-label">
                    Joined Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="joinedDate"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </OftadehLayout>
  );
};

export default Profile;
