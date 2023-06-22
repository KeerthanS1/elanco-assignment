import { noAuthGet } from "@/config/axios-client";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const useGetSingleApplication = () => {
  const router = useRouter();
  const [applicationList, setApplicationList] = useState<any | []>([]);

  const getSingleApplicationList = async () => {
    // getting single application data list
    await noAuthGet(`applications/${router.query.singleApplication}`).then(
      (res: any) => {
        setApplicationList(res.data);
      },
      (error: any) => {
        // error handling, can show toast message
      }
    );
  };

  useEffect(() => {
    if (router?.query.singleApplication) {
      //waiting for the router to get the query data
      getSingleApplicationList();
    }
  }, [router]);

  return { applicationList };
};

export default useGetSingleApplication;
