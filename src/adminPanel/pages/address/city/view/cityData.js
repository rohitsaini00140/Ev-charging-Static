export const headLabel = [
    { id: "slno", label: "SLNO." },
    { id: 'state', label: 'State' },
    { id: 'name', label: 'City name' },
    { id: 'postalcode', label: 'Postal Code' },
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

export const allCityData = [
    {
      slno: 1,
      state: "California",
      name: "Los Angeles",
      postalcode: "90001",
      status: "Active",
      created: "2024-01-12",
    },
    {
      slno: 2,
      state: "Texas",
      name: "Austin",
      postalcode: "73301",
      status: "Inactive",
      created: "2024-03-22",
    },
    {
      slno: 3,
      state: "New York",
      name: "New York",
      postalcode: "10001",
      status: "Active",
      created: "2024-05-18",
    },
    {
      slno: 4,
      state: "Florida",
      name: "Miami",
      postalcode: "33101",
      status: "Pending",
      created: "2024-07-05",
    },
    {
      slno: 5,
      state: "Washington",
      name: "Seattle",
      postalcode: "98001",
      status: "Active",
      created: "2024-08-30",
    }
  ];  