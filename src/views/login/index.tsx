import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Header } from "./header";
import { Form } from "./form";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginTypes } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../components/toats";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginTypes>();
  const dispatch = useDispatch<any>();
  const [showMessage, setShowMessage] = useState("");
  const { error, loading, message, loginUserData } = useSelector(
    (state: any) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (error && message.length) return setShowMessage(message);
    if (Object.keys(loginUserData).length === 0) return;
    navigate("/home");
  }, [error, loading, loginUserData]);

  const onSubmit: SubmitHandler<loginTypes> = async (data) => {
    await dispatch(fetchLogin(data));
  };

  return (
    <Layout>
      <Toast open={showMessage.length ? true : false} messages={showMessage} />
      <Header />
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
      />
    </Layout>
  );
};
