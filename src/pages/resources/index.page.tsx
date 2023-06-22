import { Box, Grid } from "@mui/material";
import React from "react";
import useGetResourceList from "./hooks/useGetResourceList";
import DataCard from "@/components/common/data-card";
import Link from "next/link";
import Head from "next/head";
import GridSkeleton from "@/components/common/grid-skeleton";
import ParentHeader from "@/components/common/parent-header";

const ResourcePage = () => {
  const { resourceListData, loading } = useGetResourceList();
  return (
    <>
      <Head>
        <title>Resources</title>
      </Head>
      <ParentHeader title={"Resources"} />
      <Grid container spacing={3}>
        {loading ? (
          <GridSkeleton times={12} />
        ) : (
          <>
            {resourceListData?.map((resource: string, index: number) => (
              <Grid item xs={12} md={4} key={index}>
                <Link
                  href={`/resources/${resource}`}
                  style={{ textDecoration: "none" }}
                >
                  <DataCard title={resource} />
                </Link>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
};

export default ResourcePage;
