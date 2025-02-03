const role = JSON.parse(sessionStorage.getItem("role"))

export const headLabel = [
    { id: "slno.", label: "SN" },
    { id: 'cluster_name', label: 'Cluster Name' },
    { id: 'project_name', label: 'Project Name' },
    { id: 'network_type', label: 'Network Type' },
    { id: 'project_location', label: 'Project Location' },
    { id: "status", label: "Status" },
    { id: 'action', label: 'Action', align: "center" }
]