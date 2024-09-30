export const deviceData = [
    {
        id: 1,
        name: "Device A",
        project: "Project X",
        type: "Sensor",
        location: "Building 1",
        serialNo: "SN12345",
        status: "Active",
        action: "Edit"
    },
    {
        id: 2,
        name: "Device B",
        project: "Project Y",
        type: "Controller",
        location: "Building 2",
        serialNo: "SN12346",
        status: "Inactive",
        action: "Edit"
    },
    {
        id: 3,
        name: "Device C",
        project: "Project Z",
        type: "Camera",
        location: "Building 3",
        serialNo: "SN12347",
        status: "Active",
        action: "Edit"
    },
    {
        id: 4,
        name: "Device D",
        project: "Project W",
        type: "Router",
        location: "Building 4",
        serialNo: "SN12348",
        status: "Inactive",
        action: "Edit"
    },
    {
        id: 5,
        name: "Device E",
        project: "Project V",
        type: "Switch",
        location: "Building 5",
        serialNo: "SN12349",
        status: "Active",
        action: "Edit"
    }
];


export const headLabel = [
    { id: "slno.", label: "SLNO." },
    { id: 'name', label: 'Device name' },
    { id: 'serialNo', label: 'Serial No' },
    { id: 'project', label: 'Project name' },
    { id: 'type', label: 'Device type' },
    { id: 'location', label: 'Location' },
    { id: "status", label: "Status" },
    { id: 'action', label: 'Action', align: "center" }
]