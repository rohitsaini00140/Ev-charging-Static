import { StyledTableCell, StyledTableRow } from "../../../component/tableStyle";
import { useState, useEffect } from "react";
import { List, ListItem, Skeleton } from "@mui/material";
import Label from "../../../component/lable/Lable";

function DeviceLogsTableRow({ postData }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderNestedData = (data) => {
    try {
      // Step 1: Check if data is null, undefined, or empty
      if (!data || (typeof data === "object" && Object.keys(data).length === 0)) {
        return (
          <ListItem
          sx={{ whiteSpace: "nowrap", fontStyle: "italic", color: "gray" }}
        >
          No Data Available
        </ListItem>
  
        );
      }
  
      // Step 2: Parse the JSON string if it's a string
      if (typeof data === "string") {
        const parsedData = JSON.parse(data);
        data = typeof parsedData === "string" ? JSON.parse(parsedData) : parsedData;
      }
  
      // Step 3: Handle arrays
      if (Array.isArray(data)) {
        if (data.length === 0) {
          return (
            <ListItem
            sx={{ whiteSpace: "nowrap", fontStyle: "italic", color: "gray" }}
          >
            No Data Available
          </ListItem>
    
          );
        }
        return (
          <List>
            {data.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  p: ".3rem",
                  gap: ".4rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {typeof item === "object" ? (
                  renderNestedData(item)
                ) : typeof item === "string" && !isNaN(Date.parse(fixDateString(item))) ? (
                  formatToIST(fixDateString(item))
                ) : (
                  item
                )}
              </ListItem>
            ))}
          </List>
        );
      }
  
      // Step 4: Handle objects
      if (typeof data === "object" && data !== null) {
        return (
          <List>
            {Object.entries(data).map(([key, value], index) => (
              <ListItem
                key={index}
                sx={{
                  p: ".3rem",
                  gap: ".4rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <strong>{key}:</strong>{" "}
                {typeof value === "object"
                  ? renderNestedData(value)
                  : typeof value === "string" && !isNaN(Date.parse(fixDateString(value)))
                  ? formatToIST(fixDateString(value))
                  : value}
              </ListItem>
            ))}
          </List>
        );
      }
  
      // Step 5: Render primitive data types
      return (
        <ListItem
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {data}
        </ListItem>
      );
    } catch (e) {
      console.error("Error rendering data:", e);
      return (
        <ListItem
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Invalid data
        </ListItem>
      );
    }
  };
  
  // Utility function to fix date string by removing leading "00" and ensuring "Z" at the end
  const fixDateString = (dateString) => {
    // Remove leading "00" if present
    // let fixedDate = dateString.replace(/^00/, "");
    let fixedDate = dateString.replace(/^0(0|1|2)/, "");

    // Ensure the string ends with "Z" for UTC
    if (!fixedDate.endsWith("Z")) {
      fixedDate += "Z";
    }
    return fixedDate;
  };
  
  // Utility function to format a date string to IST
  const formatToIST = (dateString) => {
    const date = new Date(dateString);
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Intl.DateTimeFormat("en-IN", options).format(date);
  };
  
  
  




  

  const renderNestedData1 = (data) => {
    // Parse if the data is a JSON string
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch (e) {
        // If parsing fails, return the raw string
        return (
          <ListItem
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data}
          </ListItem>
        );
      }
    }

    // Handle empty or invalid data
    if (!data || (typeof data === "object" && Object.keys(data).length === 0)) {
      return (
        <ListItem
          sx={{ whiteSpace: "nowrap", fontStyle: "italic", color: "gray" }}
        >
          No Data Available
        </ListItem>
      );
    }

    // Render object or array data
    if (typeof data === "object" && data !== null) {
      return (
        <List>
          {Object.entries(data).map(([key, value], index) => (
            <ListItem
              key={index}
              sx={{
                p: ".3rem",
                gap: ".4rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <strong>{key}:</strong>
              {typeof value === "object"
                ? renderNestedData(value)
                : typeof value === "string" && !isNaN(Date.parse(value))
                ? new Date(value).toLocaleString()
                : value}
            </ListItem>
          ))}
        </List>
      );
    }

    // Render primitive data types
    return (
      <ListItem
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {data}
      </ListItem>
    );
  };

  return (
    <>
      {postData?.data?.length > 0 &&
        postData?.data?.map((data) => (
          <StyledTableRow key={data.id}>
            <StyledTableCell color={"#222245"} sx={{ border: "1px solid" }}>
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                data?.action
              )}
            </StyledTableCell>

            <StyledTableCell color={"#222245"} sx={{ border: "1px solid" }}>
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                data?.charger_id
              )}
            </StyledTableCell>

            <StyledTableCell
              color={"#222245"}
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                border: "1px solid",
              }}
            >
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                renderNestedData1(data?.chargerrequest)
              )}
            </StyledTableCell>

            <StyledTableCell color={"#222245"} sx={{ border: "1px solid" }}>
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                new Date(data?.request_date).toLocaleString()
              )}
            </StyledTableCell>

            <StyledTableCell
              color={"#222245"}
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                border: "1px solid",
              }}
            >
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                renderNestedData(data?.chargerresponse)
              )}
            </StyledTableCell>

            <StyledTableCell color={"#222245"} sx={{ border: "1px solid" }}>
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                new Date(data?.reponse_date).toLocaleString()
              )}
            </StyledTableCell>
          </StyledTableRow>
        ))}
    </>
  );
}

export default DeviceLogsTableRow;
