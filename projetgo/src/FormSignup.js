import React from 'react'
import useForm from "./useForm";

const FormSignup = () => {
const {handleChange, values} = useForm();

    return (
        <div className={"form-content-right"}>
            <form className={"form"}>
                <h1>Get started with us today! Create your account by filling the information below</h1>
            <div className={"form-inputs"}>
                Username
                <label htmlFor={"username"}>
                </label>
                <input id='username' type = 'text' name ='username' className={"form-input"} placeholder={"Enter your username"} value={values.username} onChange={handleChange}/>
            </div>
            <div className={"form-inputs"}>
                Email
                <label htmlFor={"email"}>
                </label>
                <input id = 'email' type = 'email' name ='email' className={"form-input"} placeholder={"Enter your email"}value={values.email} onChange={handleChange}/>
            </div>
            <div className={"form-inputs"}>
                Password
                <label htmlFor={"password"}>
                </label>
                <input id = 'password' type = 'password' name ='password' className={"form-input"} placeholder={"Enter your password"}value={values.password} onChange={handleChange}/>
            </div>
            <div className={"form-inputs"}>
                Password2
                <label htmlFor={"password2"}>
                </label>
                <input id = 'password2' type = 'password' name ='password2' className={"form-input"} placeholder={"Confirm your password"}value={values.password2} onChange={handleChange}/>
            </div>
                <button className={"form-input-btn"}type='submit' Sign up></button>
                <span className={"form-input-login"}></span> Already have an account? Login here
            </form>
        </div>


    )



}