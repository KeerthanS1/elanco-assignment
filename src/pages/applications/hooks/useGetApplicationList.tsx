import { noAuthGet } from "@/config/axios-client";
import React, { useEffect, useState } from "react";

const useGetApplicationList = () => {
  const [applicationListData, setApplicationListData] = useState<any | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getApplicationList = async () => {
    // Getting data from api
    setLoading(true);
    await noAuthGet("applications").then(
      (res: any) => {
        setApplicationListData(res?.data);
        setLoading(false);
      },
      (error: any) => {
        // error handling, can show toast message as well
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getApplicationList();

    return () => {
      setApplicationListData([]);
    };
  }, []);

  return { applicationListData, loading };
};

export default useGetApplicationList;
