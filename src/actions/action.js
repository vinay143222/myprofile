import React from 'react';
import swal from 'sweetalert';
import * as api from '../api/api';
export const Signin = (user, navigate) => async(dispatch) => {
    try {
        const { data } = await api.Signin(user);
        swal({
            title: "Good job!",
            text: "Successfully registered",
            icon: "success",
        });
        dispatch({ type: 'AUTH', data });
        navigate("/home");
    } catch (error) {
        console.log(error);
        swal({
            title: "oops!",
            text: "user already exists",
            icon: "warning",
        });
    }
}
export const Login = (user, navigate) => async(dispatch) => {
    try {
        const { data } = await api.Login(user);
        const username = data.result.firstname;

        swal({
            title: "HO OOOO",
            text: `welcome${username}`,
            icon: "success",
        });
        dispatch({ type: 'AUTH', data });
        navigate('/home');
    } catch (error) {
        console.log(error);
        swal({
            title: "oops!",
            text: "invalied creditnals",
            icon: "warning",
        });
    }
}
export const Sendmail = (user, navigate) => async(dispatch) => {
    try {
        const { data } = await api.sendmail(user);
        dispatch({ type: 'MAIL', data })
        navigate("/restpassword");
    } catch (error) {
        console.log(error);
        swal({
            title: "oops!",
            text: "invalied creditnals",
            icon: "warning",
        });
    }
}
export const ChangePassword = (user, navigate) => async(dispatch) => {
    try {
        const { data } = await api.ChangePassword(user);
        swal({
            title: "hooooo",
            text: "welcome back",
            icon: "success",
        });
        dispatch({ type: 'CHANGEPASSWORD', data })
        navigate("/home");
    } catch (error) {
        console.log(error);
        swal({
            title: "oops!",
            text: "invalied otp",
            icon: "warning",
        });
    }
}