import SvgColor from '../../component/svgColor';
// ----------------------------------------------------------------------
const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);
// const role = JSON.parse(sessionStorage.getItem("role"))

export const navConfig = [
  {
    title: 'dashboard',
    path: '/admin',
    icon: icon('ic_dashboard'),
  },
  {
    title: 'Clusters',
    icon: icon('ic_cluster'),
    children: [
      {
        title: 'Add',
        path: '/admin/cluster/add',
        icon: icon('ic_circle'),
      },
      {
        title: 'View',
        path: '/admin/cluster/view',
        icon: icon('ic_circle'),
      },
    ],
  },
  // {
  //   title: 'Roles',
  //   icon: icon('ic_roleAndPermission'),
  //   children: [
  //     {
  //       title: 'Roles',
  //       icon: icon('ic_circle'),
  //       children: [
  //         {
  //           title: 'Add',
  //           path: '/admin/role/add',
  //           icon: icon('ic_circle'),
  //         },
  //         {
  //           title: 'View',
  //           path: '/admin/role/view',
  //           icon: icon('ic_circle'),
  //         },
  //       ],
  //     },
  //     // {
  //     //   title: 'Assign Permissions',
  //     //   path: '/admin/roles&Permissions/permissionsToRole',
  //     //   icon: icon('ic_circle'),
  //     // },
  //     // {
  //     //   title: 'Permissions',
  //     //   icon: icon('ic_circle'),
  //     //   children: [
  //     //     {
  //     //       title: 'Add',
  //     //       path: '/admin/permission/add',
  //     //       icon: icon('ic_circle'),
  //     //     },
  //     //     {
  //     //       title: 'View',
  //     //       path: '/admin/permission/view',
  //     //       icon: icon('ic_circle'),
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
  {
    title: 'Roles',
    icon: icon('ic_roleAndPermission'),
    children: [
      {
        title: 'Add',
        path: '/admin/role/add',
        icon: icon('ic_circle'),
      },
      {
        title: 'View',
        path: '/admin/role/view',
        icon: icon('ic_circle'),
      },
    ],
  },
  {
    title: 'Users',
    icon: icon('ic_user'),
    children: [
      {
        title: 'Add',
        path: '/admin/user/add',
        icon: icon('ic_circle'),
      },
      {
        title: 'View',
        path: '/admin/user/view',
        icon: icon('ic_circle'),
      },
    ],
  },

  {
    title: 'Projects',
    icon: icon('ic_project'),
    children: [
      {
        title: 'Add',
        path: '/admin/project/add',
        icon: icon('ic_circle'),
      },
      {
        title: 'View',
        path: '/admin/project/view',
        icon: icon('ic_circle'),
      },
    ],
  },
  {
    title: 'Devices',
    icon: icon('ic_device'),
    children: [
      {
        title: 'Add',
        path: '/admin/device/add',
        icon: icon('ic_circle'),
      },
      {
        title: 'View',
        path: '/admin/device/view',
        icon: icon('ic_circle'),
      },
    ],
  },
];









export const navConfig2 = [
  {
    title: 'dashboard',
    path: '/clusterAdmin',
    icon: icon('ic_dashboard'),
  },
  {
    title: 'Users',
    icon: icon('ic_user'),
    children: [
      {
        title: 'Add',
        path: '/clusterAdmin/user/add',
        icon: icon('ic_circle'),
      },
      {
        title: 'View',
        path: '/clusterAdmin/user/view',
        icon: icon('ic_circle'),
      },
    ],
  },

  {
    title: 'Projects',
    icon: icon('ic_project'),
    children: [
      {
        title: 'Add',
        path: '/clusterAdmin/project/add',
        icon: icon('ic_circle'),
      },
      {
        title: 'View',
        path: '/clusterAdmin/project/view',
        icon: icon('ic_circle'),
      },
    ],
  },
  {
    title: 'Devices',
    icon: icon('ic_device'),
    children: [
      {
        title: 'Add',
        path: '/clusterAdmin/device/add',
        icon: icon('ic_circle'),
      },
      {
        title: 'View',
        path: '/clusterAdmin/device/view',
        icon: icon('ic_circle'),
      },
    ],
  },
]