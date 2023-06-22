import { Grid } from "@mui/material";
import React from "react";
import useGetApplicationList from "./hooks/useGetApplicationList";
import DataCard from "@/components/common/data-card";
import Link from "next/link";
import Head from "next/head";
import GridSkeleton from "@/components/common/grid-skeleton";
import ParentHeader from "@/components/common/parent-header";

const ApplicationListPage = () => {
  const { applicationListData, loading } = useGetApplicationList();
  return (
    <>
      {/* Meta tags */}
      <Head>
        <title>Applications</title>
      </Head>
      {/* Common header in parent pages */}
      <ParentHeader title={"Applications"} />
      {/* Grid structure to display the items */}
      <Grid container spacing={3}>
        {loading ? (
          // While loading skeletons will be displayed
          <GridSkeleton times={12} />
        ) : (
          <>
            {applicationListData?.map((application: string, index: number) => (
              <Grid item xs={12} md={4} key={index}>
                <Link
                  href={`/applications/${application}`}
                  style={{ textDecoration: "none" }}
                >
                  <DataCard title={application} />
                </Link>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
};

export default ApplicationListPage;
