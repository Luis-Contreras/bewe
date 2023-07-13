import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Header } from "./header";
import { UserPanel } from "./userPanel";
import { useSelector } from "react-redux";
import { Form } from "./form";
import { SubmitHandler, useForm } from "react-hook-form";
import { userDataTypes } from "../../types";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [userData, setUserData] = useState<any>();
  const navigate = useNavigate();

  const { loginUserData } = useSelector((state: any) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userDataTypes>();

  useEffect(() => {
    if (Object.keys(loginUserData).length === 0) {
      const localUser: any = localStorage.getItem("userData");
      setUserData(JSON.parse(localUser));
    } else {
      setUserData(loginUserData);
    }
  }, []);

  const onSubmit: SubmitHandler<userDataTypes> = async (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    navigate("/home");
  };

  return (
    <Layout>
      <Header />
      <UserPanel />
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        userData={userData}
      />
    </Layout>
  );
};
