import { noAuthGet } from "@/config/axios-client";
import React, { useEffect, useState } from "react";

const useGetResourceList = () => {
  const [resourceListData, setResourceListData] = useState<any | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getApplicationList = async () => {
    setLoading(true);

    await noAuthGet("resources").then(
      // Getting data from api
      (res: any) => {
        setLoading(false);
        setResourceListData(res?.data);
      },
      (error: any) => {
        // error handling, can use toast to display the message
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getApplicationList();

    return () => {
      setResourceListData([]);
    };
  }, []);

  return { resourceListData, loading };
};

export default useGetResourceList;
