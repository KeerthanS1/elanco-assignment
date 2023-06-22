import React from "react";
import useGetSingleApplication from "./hooks/useGetSingleApplication";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
const SingleApplicationTable = dynamic(
  () => import("./inc/single-application-table"),
  {
    ssr: false,
  }
); // Using dynamic method to import a component. We can use React.lazy as well

//Single Application Page

const SingleAplicationPage = () => {
  const router = useRouter();
  const { applicationList } = useGetSingleApplication(); // hook to get the application list
  return (
    <>
      <Head>
        <title>{router?.query?.singleApplication}</title>
      </Head>
      <SingleApplicationTable data={applicationList} />
    </>
  );
};

export default SingleAplicationPage;
