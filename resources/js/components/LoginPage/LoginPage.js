/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import "../assets/css/bootstrap.min.css"
import "../assets/css/icofont.min.css"
import "../assets/css/animate.min.css"
import "../assets/css/style.css"
import "../assets/css/responsive.css"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Formik, Form } from "formik"
import { makeStyles } from "@material-ui/core/styles"
import { TextField } from "@material-ui/core"
import checkSchema from "./validation"
import API from "../API"
import "./dist/style.css"
import getLoginFormSchema from "./LoginSchema"

const styles = makeStyles({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
    },
    error: {
        color: "red",
        textAlign: "center",
    },
    button: {
        width: "60%",
        margin: " 0 20%",
    },
})

const Login = () => {
    const classes = styles()
    const schema = getLoginFormSchema()
    const [userExist, setUserExist] = useState("")

    const sendFormData = async (data) => {
        const result = await API.getUserMail(data)
        console.log(result)
        if (!result) {
            setUserExist("You are not registered user, please sing in")
        }
    }
    return (
        <section className="login-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="login-form">
                        <h3>Login Link:</h3>
                        <Formik
                            initialValues={{
                                companyName: "",
                                firstName: "",
                                lastName: "",
                                registeredEmailAddress: "",
                            }}
                            validationSchema={checkSchema}
                            onSubmit={(values, actions) => {
                                setTimeout(() => {
                                    sendFormData(
                                        JSON.stringify(values, null, 2)
                                    )
                                    actions.setSubmitting(false)
                                }, 1000)
                            }}
                        >
                            {({
                                handleSubmit,
                                handleBlur,
                                handleChange,
                                values,
                                errors,
                                touched,
                            }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        {Object.keys(schema).map((key) => (
                                            <TextField
                                                {...schema[key]}
                                                value={values[key]}
                                                error={
                                                    touched[key] &&
                                                    Boolean(errors[key])
                                                }
                                                helperText={
                                                    touched[key]
                                                        ? errors[key]
                                                        : ""
                                                }
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                className="form-control"
                                                key={key}
                                                fullWidth
                                            />
                                        ))}
                                    </div>
                                    {console.log(errors.name)}
                                    {errors.name && (
                                        <div
                                            id="feedback"
                                            className={classes.error}
                                        >
                                            {errors.name}
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Send Me Login Link
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <div className={classes.error}>{userExist}</div>
        </section>
    )
}

export default Login

if (document.getElementById("example")) {
    ReactDOM.render(<Login />, document.getElementById("example"))
}
