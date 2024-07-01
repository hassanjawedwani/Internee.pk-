import React from 'react'
import './Registeration.css';
const Registeration = () => {
  return (
    <div>
      <h1>Registration Form</h1>
    <p>Please fill out this form with the required information</p>
    <form action="#" method="post">

        <fieldset>
            <label for="first-name">Enter First Name
                <input type="text" placeholder="First Name" id="first-name" name="first-name" onChange={(e)=>{console.log(e.target.value)}}required/>
            </label>
            <label for="last-name">Enter Last Name
                <input type="text" placeholder="Last Name" id="last-name" name="last-name" required/>
            </label>
            <label for="email">Enter Email
                <input type="email" placeholder="Email" id="email" name="email" required/>
            </label>
            <label for="new-password">Enter New Password
                <input type="password" placeholder="Password" id="new-password" name="new-password" pattern="[0-5a-z]{8,}" required/>
            </label>
        </fieldset>

        <fieldset>
            <legend>Account type (required)</legend>
            <label for="personal-account">
                <input type="radio" id="personal-account" name="account-type" class="inline" checked/>  Personal
            </label>
            <label for="business account">
                <input type="radio" id="business account" name="account-type" class="inline" /> Business
            </label>
        </fieldset>

        <fieldset>
            <label for="upload-profile"> Upload your Profile Picture
                <input type="file" id="upload-profile" name="upload-profile"/>
            </label>
            <label for="age"> Enter Your Age
                <input type="number" id="age" name="age" min="0" max="120" placeholder="Enter age"/>
            </label>
            <label for="referrer"> Where did you hear about us?
                <select id="referrer" name="referrer">
                    <option value="0">(Select one)</option>
                    <option value="1">website</option>
                    <option value="2">form</option>
                    <option value="3">YT channal</option>
                    <option value="4">other</option>
                </select>
            </label>
            <label for="bio"> Enter Bio
                <textarea id="bio" name="bio" cols="30" rows="3" placeholder="i like coding on beach...."></textarea>
            </label>
        </fieldset>

        <label for="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms-and-conditions" class="inline" required/> I accept <a href="#">term and tonditions</a>
        </label>

        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Registeration;