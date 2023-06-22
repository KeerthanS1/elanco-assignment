import { Stack, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextInput from "../common/text-input";
import SelectInput from "../common/select-input";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
interface props {
  onFilterTextBoxChanged: Function;
  onFilterCategory: Function;
  rowData: any;
}

const CostDataFilters: React.FunctionComponent<props> = ({
  onFilterTextBoxChanged,
  onFilterCategory,
  rowData,
}) => {
  const router = useRouter();
  const [meterCategoryList, setMeterCategoryList] = useState<any | []>([]);
  const [meterCategoryValue, setMeterCategoryValue] = useState<string>("");

  const removeDuplicates = (arr: any) => {
    // removing duplicates if any from the array
    return arr.filter(
      (item: string, index: number) => arr.indexOf(item) === index
    );
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleExtractData = () => {
    let meterCatList: any | [] = [];
    // getting all meter category list for filter
    rowData?.forEach((data: any) => {
      meterCatList.push(data?.MeterCategory);
    });
    setMeterCategoryList(removeDuplicates(meterCatList));
  };

  const handleCatergoryChange = (event: any) => {
    setMeterCategoryValue(event.target.value);
    onFilterCategory(event.target.value);
  };

  const clearFilters = () => {
    onFilterCategory("");
    setMeterCategoryValue("");
  };

  useEffect(() => {
    if (rowData?.length) {
      handleExtractData();
    }
  }, [rowData]);

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Button
        startIcon={<ArrowBackIcon />}
        variant="text"
        color="secondary"
        onClick={handleGoBack}
      >
        back
      </Button>
      <Stack direction="row" alignItems="center" mb={2} spacing={2} mt={2}>
        <Box maxWidth="400px">
          {/* Custom Select input to have control over the theming of the app */}
          <SelectInput
            data={meterCategoryList}
            handleChange={handleCatergoryChange}
            id="filter-category"
            label="Category"
            placeholder="Select a category"
            value={meterCategoryValue}
          />
        </Box>
        <Box maxWidth="400px">
          {/* Custom Text input to have control over the theming of the app */}
          <TextInput
            label="Search"
            placeholder="Search here..."
            onInputChange={onFilterTextBoxChanged}
            id="filter-text-box"
          />
        </Box>
        <Button variant="outlined" color="error" onClick={clearFilters}>
          Clear
        </Button>
      </Stack>
    </Stack>
  );
};

export default CostDataFilters;
