import SvgColor from "../../component/svgColor";

// ----------------------------------------------------------------------
const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);
// const role = JSON.parse(sessionStorage.getItem("role"))

export const navConfig = [
  {
    title: "dashboard",
    path: "/admin",
    icon: icon("ic_dashboard"),
  },

  {
    title: "Access Controll",
    icon: icon("ic_roleAndPermission"),
    children: [
      {
        title: "Roles",
        icon: icon("ic_circle"),
        path: "/admin/role/view",
      },
      {
        title: "Internal Users",
        icon: icon("ic_circle"),
        path: "/admin/user/view",
      },
    ],
  },

  // {
  //   title: "Roles",
  //   icon: icon("ic_roleAndPermission"),
  //   path: "/admin/role/view",
  //   children: [
  //     {
  //       title: 'Add',
  //       path: '/admin/role/add',
  //       icon: icon('ic_circle'),
  //     },
  //     {
  //       title: 'View',
  //       path: '/admin/role/view',
  //       icon: icon('ic_circle'),
  //     },
  //   ],
  // },

  // {
  //   title: "Internal Users",
  //   icon: icon("ic_user"),
  //   path: "/admin/user/view",
  //   children: [
  //     {
  //       title: 'Add',
  //       path: '/admin/user/add',
  //       icon: icon('ic_circle'),
  //     },
  //     {
  //       title: 'View',
  //       path: '/admin/user/view',
  //       icon: icon('ic_circle'),
  //     },
  //   ],
  // },

  // {
  //   title: "CPOs",
  //   icon: icon("ic_user"),
  //   path: "/admin/cpos",
  // },

  {
    title: "Clusters",
    icon: icon("ic_cluster"),
    path: "/admin/cluster/view",
    // children: [
    //   {
    //     title: 'Add',
    //     path: '/admin/cluster/add',
    //     icon: icon('ic_circle'),
    //   },
    //   {
    //     title: 'View',
    //     path: '/admin/cluster/view',
    //     icon: icon('ic_circle'),
    //   },
    // ],
  },

  {
    title: "Projects",
    icon: icon("ic_project"),
    path: "/admin/project/view",
    // children: [
    //   {
    //     title: 'Add',
    //     path: '/admin/project/add',
    //     icon: icon('ic_circle'),
    //   },
    //   {
    //     title: 'View',
    //     path: '/admin/project/view',
    //     icon: icon('ic_circle'),
    //   },
    // ],
  },
  {
    title: "Devices",
    icon: icon("ic_device"),
    path: "/admin/device/view",
    // children: [
    //   {
    //     title: 'Add',
    //     path: '/admin/device/add',
    //     icon: icon('ic_circle'),
    //   },
    //   {
    //     title: 'View',
    //     path: '/admin/device/view',
    //     icon: icon('ic_circle'),
    //   },
    // ],
  },

  {
    title: "Charger Activity Logs",
    path: "/admin/deviceLog",
    icon: icon("ActivityLogs"),
  },

  {
    title: "OCPP Communication",
    path: "/admin/charger-dashboard",
    icon: icon("laptop"),
  },
];

export const navConfig2 = [
  {
    title: "dashboard",
    path: "/admin",
    icon: icon("ic_dashboard"),
  },

  {
    title: "Roles",
    icon: icon("ic_roleAndPermission"),
    path: "/admin/role/view",
    // children: [
    //   {
    //     title: 'Add',
    //     path: '/admin/role/add',
    //     icon: icon('ic_circle'),
    //   },
    //   {
    //     title: 'View',
    //     path: '/admin/role/view',
    //     icon: icon('ic_circle'),
    //   },
    // ],
  },

  {
    title: "Internal Users",
    icon: icon("ic_user"),
    path: "/admin/user/view",
    // children: [
    //   {
    //     title: 'Add',
    //     path: '/admin/user/add',
    //     icon: icon('ic_circle'),
    //   },
    //   {
    //     title: 'View',
    //     path: '/admin/user/view',
    //     icon: icon('ic_circle'),
    //   },
    // ],
  },

  {
    title: "CPOs",
    icon: icon("ic_user"),
    path: "/admin/user/view",
  },

  {
    title: "Clusters",
    icon: icon("ic_cluster"),
    path: "/admin/cluster/view",
    // children: [
    //   {
    //     title: 'Add',
    //     path: '/admin/cluster/add',
    //     icon: icon('ic_circle'),
    //   },
    //   {
    //     title: 'View',
    //     path: '/admin/cluster/view',
    //     icon: icon('ic_circle'),
    //   },
    // ],
  },

  {
    title: "Projects",
    icon: icon("ic_project"),
    path: "/admin/project/view",
    // children: [
    //   {
    //     title: 'Add',
    //     path: '/admin/project/add',
    //     icon: icon('ic_circle'),
    //   },
    //   {
    //     title: 'View',
    //     path: '/admin/project/view',
    //     icon: icon('ic_circle'),
    //   },
    // ],
  },
  {
    title: "Devices",
    icon: icon("ic_device"),
    path: "/admin/device/view",
    // children: [
    //   {
    //     title: 'Add',
    //     path: '/admin/device/add',
    //     icon: icon('ic_circle'),
    //   },
    //   {
    //     title: 'View',
    //     path: '/admin/device/view',
    //     icon: icon('ic_circle'),
    //   },
    // ],
  },

  {
    title: "Charger Activity Logs",
    path: "/admin/deviceLog",
    icon: icon("ActivityLogs"),
  },

  {
    title: "OCPP Communication",
    path: "/admin/charger-dashboard",
    icon: icon("laptop"),
  },
];
