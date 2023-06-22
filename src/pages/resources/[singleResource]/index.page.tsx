import { Box } from "@mui/material";
import React from "react";
import useGetSingleResource from "./hooks/useGetSingleResouce";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
const SingleResourceTable = dynamic(
  () => import("./inc/single-resource-table"),
  {
    ssr: false,
  }
);

const SingleResourcePage = () => {
  const router = useRouter();
  const { resourceList } = useGetSingleResource();
  return (
    <>
      <Head>
        <title>{router?.query?.singleResource}</title>
      </Head>
      <SingleResourceTable data={resourceList} />
    </>
  );
};

export default SingleResourcePage;
