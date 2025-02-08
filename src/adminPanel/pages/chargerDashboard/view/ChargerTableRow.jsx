import { StyledTableCell, StyledTableRow } from "../../../component/tableStyle";
import { useState, useEffect } from "react";
import { List, ListItem, Skeleton } from "@mui/material";

function ChargerTableRow({ postData }) {
  const [loading, setLoading] = useState(true);


//   const actions = postData
//   ?.map(itr => itr?.charger_logs?.data) 
//   .flat() 
//   .map(log => log?.action) 
//   .filter(Boolean); 

// console.log(actions, "Extracted action values");



  




  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  const renderNestedData = (data) => {
    // Parse if the data is a JSON string
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch (e) {
        // If parsing fails, return the raw string with quotes removed
        return (
          <ListItem
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.replace(/"/g, "")}
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
                    : typeof value === "string"
                    ? value.replace(/"/g, "")
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
                    : typeof value === "string"
                    ? value.replace(/"/g, "")
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
        {typeof data === "string" ? data.replace(/"/g, "") : data}
      </ListItem>
    );
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
            {data.replace(/"/g, "")}
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
        {typeof data === "string" ? data.replace(/"/g, "") : data}
      </ListItem>
    );
  };

  return (
    <>
      {postData.length > 0 &&
        postData?.map(itr => itr?.charger_logs?.data) 
        .flat()?.map((data) => (
          <StyledTableRow key={data?.id || Math.random()}>
            <StyledTableCell color={"#222245"} sx={{ border: "1px solid" }}>
              {loading ? (
                <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" />
              ) : (
                data?.action
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
                new Date(data?.request_date).toLocaleString()
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

export default ChargerTableRow;


// import { StyledTableCell, StyledTableRow } from "../../../component/tableStyle";
// import { useState, useEffect } from "react";
// import { List, ListItem, Skeleton } from "@mui/material";

// function ChargerTableRow({ postData }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const renderNestedData = (data) => {
//     if (typeof data === "string") {
//       try {
//         data = JSON.parse(data);
//       } catch (e) {
//         return <ListItem sx={listItemStyle}>{data.replace(/"/g, "")}</ListItem>;
//       }
//     }

//     if (!data || (typeof data === "object" && Object.keys(data).length === 0)) {
//       return <ListItem sx={emptyListItemStyle}>No Data Available</ListItem>;
//     }

//     if (typeof data === "object") {
//       return (
//         <List>
//           {Array.isArray(data)
//             ? data.map((value, index) => (
//                 <ListItem key={index} sx={listItemStyle}>
//                   {typeof value === "object" ? renderNestedData(value) : formatValue(value)}
//                 </ListItem>
//               ))
//             : Object.entries(data).map(([key, value], index) => (
//                 <ListItem key={index} sx={listItemStyle}>
//                   <strong>{key}:</strong> {typeof value === "object" ? renderNestedData(value) : formatValue(value)}
//                 </ListItem>
//               ))}
//         </List>
//       );
//     }

//     return <ListItem sx={listItemStyle}>{formatValue(data)}</ListItem>;
//   };

//   const formatValue = (value) => {
//     if (typeof value === "string" && !isNaN(Date.parse(value))) {
//       return new Date(value).toLocaleString();
//     }
//     return typeof value === "string" ? value.replace(/"/g, "") : value;
//   };

//   const listItemStyle = {
//     p: ".3rem",
//     gap: ".4rem",
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//   };

//   const emptyListItemStyle = { whiteSpace: "nowrap", fontStyle: "italic", color: "gray" };

//   const rowData = Array.isArray(postData) ? postData : [];

//   return (
//     <>
//       {rowData.length > 0 &&
//         rowData.map((data) => (
//           <StyledTableRow key={data?.id || Math.random()}>
//             <StyledTableCell sx={{ border: "1px solid" }}>
//               {loading ? <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" /> : data?.action}
//             </StyledTableCell>

//             <StyledTableCell sx={{ border: "1px solid" }}>
//               {loading ? <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" /> : renderNestedData(data?.chargerrequest)}
//             </StyledTableCell>

//             <StyledTableCell sx={{ border: "1px solid" }}>
//               {loading ? <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" /> : renderNestedData(data?.chargerresponse)}
//             </StyledTableCell>

//             <StyledTableCell sx={{ border: "1px solid" }}>
//               {loading ? <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" /> : formatValue(data?.request_date)}
//             </StyledTableCell>

//             <StyledTableCell sx={{ border: "1px solid" }}>
//               {loading ? <Skeleton sx={{ bgcolor: "#57b33e3d" }} animation="pulse" /> : formatValue(data?.response_date)}
//             </StyledTableCell>
//           </StyledTableRow>
//         ))}
//     </>
//   );
// }

// export default ChargerTableRow;


