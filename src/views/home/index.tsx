import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Box, Divider } from "@mui/material";
import { Header } from "./header";
import { UserPanel } from "./userPanel";
import { Form } from "./form";
import { useForm, SubmitHandler } from "react-hook-form";
import { urlsTypes } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { UrlsList } from "./urlsList";
import { addUrl, deleteUrls, fetchUrls } from "../../api/url";
import { Loading } from "../../components/loading";
import { Toast } from "../../components/toats";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<urlsTypes>();
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: String, email: String });
  const { loading, error, links } = useSelector((state: any) => state.urls);

  useEffect(() => {
    const userData: any = localStorage.getItem("userData");
    if (!userData) return navigate("/");
    setUserData(JSON.parse(userData));
    const loadUrls = async () => {
      await dispatch(fetchUrls());
    };

    loadUrls();
  }, []);

  const onSubmit: SubmitHandler<urlsTypes> = async (data) => {
    dispatch(addUrl(data));
  };

  const deleteUrl = (url: string) => {
    dispatch(deleteUrls(url));
  };

  return (
    <Box width="100%">
      {loading && <Loading />}
      <Toast open={error.length ? true : false} messages={error} />
      <Layout>
        <Header />
        <UserPanel name={userData.name} email={userData.email} />
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      </Layout>
      <UrlsList urls={links} deleteUrl={deleteUrl} />
    </Box>
  );
};
