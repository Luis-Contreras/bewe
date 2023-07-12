import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Header } from "./header";
import { Footer } from "./footer";
import { Form } from "./form";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUpTypes } from "../../types";
import { Loading } from "../../components/loading";
import { Toast } from "../../components/toats";
import { useSelector, useDispatch } from "react-redux";
import { fetchSignUp } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpTypes>();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const [showMessage, setShowMessage] = useState('')

  const {loading, error, registerUserData} = useSelector((state: any) => state.auth);


  useEffect(() => {
    if(!loading && Object.keys(registerUserData).length === 0) return

    if(error) return setShowMessage('Error register user')

    if(registerUserData?.name && registerUserData?.email){
      navigate('/')
    }

  }, [registerUserData, loading, error])

  const onSubmit: SubmitHandler<signUpTypes> = async (data) => {
    await dispatch(fetchSignUp(data))
  };

  return (
    <>
     <Toast
        open={showMessage.length ? true : false}
        messages={showMessage}
      />
      {loading && <Loading />}
      <Layout>
        <Header isLoading={loading}/>
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} isLoading={loading} errors={errors}/>
        <Footer />
      </Layout>
    </>
  );
};
