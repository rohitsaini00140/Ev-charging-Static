export const headLabel = [
    { id: 'slNo.', label: 'SLNo.' },
    { id: 'organization', label: 'Organization name' },
    { id: 'name', label: 'Zone name' },
    { id: 'location', label: 'Location' },
    { id: "status", label: "Status" },
    { id: "created", label: "CreatedAt" },
    { id: 'action', label: 'Action', align: "center" }
]

export const fieldsToDownload = ["organization_id", "name", "location", "created_at"]

export const fieldMapping = {
    organization_id: 'Organization Id',
    name: 'Zone name',
    location: 'Location',
    created_at: 'Created At',
};