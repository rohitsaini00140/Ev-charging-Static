import SvgColor from '../../component/svgColor';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/admin',
    icon: icon('ic_dashboard'),
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
    title: 'Roles & Permissions',
    icon: icon('ic_roleAndPermission'),
    children: [
      {
        title: 'Permissions to Role',
        path: '/admin/roles&Permissions/permissionsToRole',
        icon: icon('ic_circle'),
      },
      {
        title: 'Roles',
        icon: icon('ic_circle'),
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
        title: 'Permissions',
        icon: icon('ic_circle'),
        children: [
          {
            title: 'Add',
            path: '/admin/permission/add',
            icon: icon('ic_circle'),
          },
          {
            title: 'View',
            path: '/admin/permission/view',
            icon: icon('ic_circle'),
          },
        ],
      },
    ],
  },
  {
    title: 'Organizations',
    icon: icon('ic_organization'),
    children: [
      {
        title: 'Add',
        path: '/admin/organization/add',
        icon: icon('ic_circle'),
      },
      {
        title: 'View',
        path: '/admin/organization/view',
        icon: icon('ic_circle'),
      },
    ],
  },
  {
    title: 'Zone',
    icon: icon('ic_zone'),
    children: [
      {
        title: 'Add',
        path: '/admin/zone/add',
        icon: icon('ic_circle'),
      },
      {
        title: 'View',
        path: '/admin/zone/view',
        icon: icon('ic_circle'),
      },
    ],
  },
  {
    title: 'Cluster',
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
];

export default navConfig;