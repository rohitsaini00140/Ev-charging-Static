const role = JSON.parse(sessionStorage.getItem("role"))

export const headLabel = [
    { id: "slno.", label: "S NO." },
    { id: 'cluster_name', label: 'Cluster Name' },
    // { id: 'user_name', label: 'UserName' },
    { id: 'project_name', label: 'Project Name' },
    { id: 'project_location', label: 'Project Location' },
    { id: "status", label: "Status" },
    { id: 'action', label: 'Action', align: "center" }
]