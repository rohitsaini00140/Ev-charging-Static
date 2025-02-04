const role = JSON.parse(sessionStorage.getItem("role"))

export const headLabel = [
    { id: "slno.", label: "SN" },
    { id: 'name', label: 'Cluster name' },
    { id: 'project', label: 'Project name' },
    { id: 'name', label: 'Device name' },
    { id: 'serialNo', label: 'Device serial no.' },
    { id: 'type', label: 'Device type' },
    { id: 'type', label: 'Device manufacturer' },
    { id: 'deviceID', label: 'Device ID' },
    { id: 'interval', label: 'Heartbeat Interval (In-Seconds)' },
    { id: 'location', label: 'Location' },
    { id: "status", label: "Status" },
    { id: 'action', label: 'Action', align: "center" }
].filter(Boolean)