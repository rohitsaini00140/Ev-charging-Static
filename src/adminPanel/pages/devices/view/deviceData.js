const role = JSON.parse(sessionStorage.getItem("role"))

export const headLabel = [
    { id: "slno.", label: "SLNO." },
    { id: 'name', label: 'Cluster Name' },
    { id: 'project', label: 'Project name' },
    { id: 'name', label: 'Device name' },
    { id: 'serialNo', label: 'Serial No' },
    { id: 'type', label: 'Device type' },
    { id: 'deviceID', label: 'Device ID' },
    { id: 'location', label: 'Location' },
    { id: "status", label: "Status" },
    { id: 'action', label: 'Action', align: "center" }
].filter(Boolean)