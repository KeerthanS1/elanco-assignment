import { noAuthGet } from "@/config/axios-client";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const useGetSingleResource = () => {
  const router = useRouter();
  const [resourceList, setResourceList] = useState<any | []>([]);

  const getSingleresourceList = async () => {
    await noAuthGet(`resources/${router.query.singleResource}`).then(
      (res: any) => {
        setResourceList(res.data);
      },
      (error: any) => {}
    );
  };

  useEffect(() => {
    if (router?.query.singleResource) {
      getSingleresourceList();
    }
  }, [router]);

  return { resourceList };
};

export default useGetSingleResource;
