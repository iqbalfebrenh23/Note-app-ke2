import React from "react";
import {Link, useNavigate}  from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";

function RegisterPage(){
    const navigate = useNavigate();

    async function onRegisterHandler(user){
      const{error} =  await register(user);
      if (!error){
        navigate('/');
      }
    }

    return(
        <section>
            <h2>Isi Dulu Kakak Kalau Mau Masuk....</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>Kembali ke <Link to="/">Assalamualaikum</Link></p>
        </section>
    )
}

export default RegisterPage;