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
  // Parse if the data is a JSON string
  if (typeof data === "string") {
    try {
      const data1 = JSON.parse(data);
      data = JSON.parse(data1);
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
        {Array.isArray(data)
          ? data.map((value, index) => (
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
                {typeof value === "object"
                  ? renderNestedData(value)
                  : typeof value === "string" && !isNaN(Date.parse(value))
                  ? new Date(value).toLocaleString()
                  : value}
              </ListItem>
            ))
          : Object.entries(data).map(([key, value], index) => (
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
  


  const renderNestedData1 = (data) => {
    // Parse if the data is a JSON string
    if (typeof data === "string") {
      try {
       
        data = JSON.parse(data)
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
      {postData?.data.length > 0 &&
        postData?.data.map((data) => (
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
