import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),

});

const Login =()=> {
    const {handleSubmit,register, errors} = useForm({
        resolver: yupResolver(schema),
    })

    const userSubmit = (data) => {
        console.log(data);
       }

    return (
        <div className="-space-y-px rounded md ">
        <form onSubmit={handleSubmit(userSubmit)}>
        <div>
            <label>UserName</label>
            <input type="text" name="userName" placeholder="Enter text" {...register("username")}/>
                       
        </div>
        <div>
        <label>Password</label>
            <input type="password" name="password" {...register("password")}/>
             
        </div>
        <input type = "submit"></input>
        </form>
        </div>
    )
}

export default Login