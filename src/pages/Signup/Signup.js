import React, { Component } from "react";
import styles from "./Signup.scss";
//import React from "react";
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import Google from "../../assets/images/icons/Google.svg";
import { Link } from "react-router-dom";
import Sign from "../../assets/images/icons/Sign.svg";
const Signup =()=>(
    <Formik
        initialValues={{ username: "", password: "",confirmpassword:"",email:"",user:""}}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values);
        }}



        validationSchema={Yup.object().shape({
            user:Yup.string()
                .required("Required"),
            username: Yup.string()
                .required("Required"),
            email:Yup.string().email('Must be a valid email').max(255).required('Email is required'),

            password: Yup.string()
                .required("No password provided."),
            confirmpassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')

        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <div className="container">
                    <div className="Signup__heading">
                        MACEBOOK
                    </div>

                    <div className="Signup__container-white container">
                        <div className="Signup__container-white__sign ">Create Account</div>
                        <div className="Signup__container-white__google "><img  src={Google}/> <p>Create a account with Google</p></div>
                        <form onSubmit={handleSubmit}>
                            <div ><select name="user"

                                         value={values.user}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         className={errors.user && touched.user && "error"}
                            >
                                <option value="" >Select Your user type</option>
                                <option value="Student">Student</option>
                                <option value="Alumini">Aluminui</option>

                            </select></div>

                            {errors.user && touched.user && (
                                <div className="Signup__container-white__error-message">{errors.user}</div>
                            )}


                            <div className="Signup__container-white__email"><input
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.email && touched.email && "error"}
                            /></div>
                                {errors.email && touched.email && (
                                    <div className="Signup__container-white__error-message">{errors.email}</div>
                                )}


                            <div className="Signup__container-white__username"><input
                                name="username"
                                type="text"
                                placeholder="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.username && touched.username && "error"}
                            /></div>
                                {errors.username && touched.username && (
                                    <div className="Signup__container-white__error-message">{errors.username}</div>
                                )}


                            <div className="Signup__container-white__password"><input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.password && touched.password && "error"}
                            /></div>
                                {errors.password && touched.password && (
                                    <div className="Signup__container-white__error-message">{errors.password}</div>
                                )}
                            <div className="Signup__container-white__confirmpass"><input
                                name="confirmpassword"
                                type="password"
                                placeholder="Confirm Password"
                                value={values.confirmpassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.confirmpassword && touched.confirmpassword && "error"}
                            /></div>
                                {errors.confirmpassword && touched.confirmpassword && (
                                    <div className="Signup__container-white__error-message">{errors.confirmpassword}</div>
                                )}


                            <div><button type="submit" >
                                Complete Profile
                            </button></div>
                            <div className="Signup__container-white__create"><Link  to='/login'>Sign in instead</Link></div>


                        </form>
                    </div>
                </div>
            );
        }}
    </Formik>
);

export default Signup;

