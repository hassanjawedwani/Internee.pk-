import React, { useState } from 'react'
import './Registeration.css';
const Registeration = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState('');
    const [secondName, setSecondName] = useState('');
    const [secondNameError, setSecondNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [age, setAge] = useState('');
    const [ageError, setAgeError] = useState('');


    const checkNameValidity = (str) => {
        const regex = /^[a-z\s]*$/i;
        return regex.test(str);
    }

    const checkEmailValidity = (str) => {
        const regex = /^(?=.*[@])(?=.*[.]).*\.com$/
        return regex.test(str);
    }

    const checkPasswordValidity = (str) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{6,}$/;
        return regex.test(str);
    }
    
    const checkAgeValidity = (str) => {
        
        const age = parseInt(str);
        if (age > 0 && age <= 120) {
            return true;
        }
        else {
            return false;
        }
        
    }
    
    

    const handlerFirstName = e => {
        const str = e.target.value;
        setFirstName(str);
        checkNameValidity(str) ?  setFirstNameError('') : setFirstNameError(`Special characters (e.g. ?:\) and numbers (e.g. 123) are not allowed`);
    }

    const handlerSecondName = e => {
        const str = e.target.value;
        setSecondName(str);
        checkNameValidity(str) ?  setSecondNameError('') : setSecondNameError(`Special characters (e.g. ?:\) and numbers (e.g. 123) are not allowed`);
    }

    const handlerEmail = e => {
        const str = e.target.value;
        setEmail(str);
        checkEmailValidity(str) ?  setEmailError('') : setEmailError(`Invalid email format (e.g. missing @.)`);
    }

    const handlerPassword = e => {
        const str = e.target.value;
        setPassword(str);
        checkPasswordValidity(str) ?  setPasswordError('') : setPasswordError(`Password must contain lowercase letter(e.g z), uppercase letter(e.g Z), number(e.g 9), special symbol(e.g. ?) and length of 6 characters`);
    }

    const handlerAge = e => {
        const str = e.target.value;
        setAge(str);
        checkAgeValidity(str) ?  setAgeError('') : setAgeError(`Age must between 1 and 120`);
    }




  return (
    <div>
      <h1 style={{marginBottom: "-10px"}}>Internee.pk</h1>
      <h1>Registration Form</h1>
    <p>Please fill out this form with the required information</p>
    <form action="#" method="post">

        <fieldset>
            <label for="first-name">Enter First Name
                {firstNameError && <p class="error">{firstNameError}</p>}
                <input type="text" placeholder="First Name" id="first-name" name="first-name" value={firstName} onChange={handlerFirstName} required/>
            </label>
            <label for="last-name">Enter Last Name
                {secondNameError && <p class="error">{secondNameError}</p>}
                <input type="text" placeholder="Last Name" id="last-name" name="last-name"  value={secondName} onChange={handlerSecondName} required/>
            </label>
            <label for="email">Enter Email
                {emailError && <p class="error">{emailError}</p>}
                <input type="email" placeholder="Email" id="email" name="email"  value={email} onChange={handlerEmail} required/>
            </label>
            <label for="new-password">Enter New Password
                {passwordError && <p class="error">{passwordError}</p>}
                <input style={{display: "inline-block", width: "80%", margin: "0", }} type={showPassword ? "text" : "password"} placeholder="Password" id="new-password" name="new-password" value={password} onChange={handlerPassword} required/>
                <button  type="button" style={{display: "inline-block", width: "20%",  margin: "0 ", height: "2em", border: "none", padding: 0, fontSize: 16}} class="password-button" onClick={()=>{setShowPassword(!showPassword)}}>{showPassword ? "Hide" : "Show"}</button>
            </label>
        </fieldset>

        <fieldset>
            <legend>Internship type (required)</legend>
            <label for="personal-account" style={{marginRight: "15px"}}>
                <input type="radio" id="personal-account" name="account-type" class="inline" checked/>  Remote
            </label>
            <label for="business account">
                <input type="radio" id="business account" name="account-type" class="inline" /> Physical
            </label>
        </fieldset>

        <fieldset>
            <label for="upload-profile"> Upload your Profile Picture
                <input type="file" id="upload-profile" name="upload-profile"/>
            </label>
            <label for="age"> Enter Your Age
                {ageError && <p class="error">{ageError}</p>}
                <input type="number" id="age" name="age" min="0" max="120" placeholder="Enter age" value={age} onChange={handlerAge} />
            </label>
            <label for="referrer"> Where did you hear about us?
                <select id="referrer" name="referrer">
                    <option value="0">(Select one)</option>
                    <option value="1">Website</option>
                    <option value="2">LinkedIn</option>
                    <option value="3">Friend</option>
                    <option value="4">other</option>
                </select>
            </label>
            <label for="bio"> Enter Skills
                <textarea id="bio" name="bio" cols="30" rows="3" placeholder="HTML, CSS, JavaScript..."></textarea>
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