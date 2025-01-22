import Iconify from '../../component/Iconify';

export const dashboardCardData = {
    type: "Total Users",
    totalCount: "7000",
    Percentage: "25%",
    incOrDec: "inc",
    duration: "Since last week",
    arrowIcon: <Iconify icon="ph:arrow-up-thin" sx={{ fontSize: "1rem" }} />,
    typeIcon: <Iconify icon="fa-solid:users" sx={{ fontSize: "1.5rem", color: "#ff6600" }} />,
    bgColor: "#f9f3e7"
}
export const dashboardCardData2 = {
    type: "Total Projects",
    totalCount: "900",
    Percentage: "25%",
    incOrDec: "dec",
    duration: "Since last week",
    arrowIcon: <Iconify icon="ph:arrow-down-thin" sx={{ fontSize: "1rem" }} />,
    typeIcon: <Iconify icon="si:projects-line" sx={{ fontSize: "1.5rem", color: "#00ffff" }} />,
    bgColor: "#CCFFFF"
}

export const dashboardCardData3 = {
    type: "Total Clusters",
    totalCount: "250",
    Percentage: "25%",
    incOrDec: "inc",
    duration: "Since last week",
    arrowIcon: <Iconify icon="ph:arrow-up-thin" sx={{ fontSize: "1rem" }} />,
    typeIcon: <Iconify icon="clarity:cluster-solid" sx={{ fontSize: "1.5rem", color: "#99ff00" }} />,
    bgColor: "#557710"
}
export const dashboardCardData4 = {
    type: "Total Devices",
    totalCount: "500",
    Percentage: "25%",
    incOrDec: "inc",
    duration: "Since last week",
    arrowIcon: <Iconify icon="ph:arrow-up-thin" sx={{ fontSize: "1rem" }} />,
    typeIcon: (
        <Iconify
          icon="fa-solid:charging-station"
          sx={{ fontSize: "1.5rem", color: "white" }}
        />
      ),
    bgColor: "#20c997"
}

export const lineChartData = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
]