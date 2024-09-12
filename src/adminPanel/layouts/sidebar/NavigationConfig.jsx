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
    title: 'User',
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
  // {
  //   title: 'Roles & Permissions',
  //   icon: icon('ic_roleAndPermission'),
  //   children: [
  //     {
  //       title: 'Role',
  //       path: '/admin/authorization/role',
  //       icon: icon('ic_circle'),
  //     },
  //     {
  //       title: 'Permission',
  //       path: '/admin/authorization/permission',
  //       icon: icon('ic_circle'),
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth Pages',
  //   icon: icon('ic_auth'),
  //   children: [
  //     {
  //       title: 'Login',
  //       path: '/admin/auth/login',
  //       icon: icon('ic_circle'),
  //     },
  //     {
  //       title: 'Register',
  //       path: '/admin/auth/register',
  //       icon: icon('ic_circle'),
  //     },
  //     {
  //       title: 'Verify Email',
  //       path: '/admin/auth/verifyEmail',
  //       icon: icon('ic_circle'),
  //     },
  //     {
  //       title: 'Forgot Password',
  //       path: '/admin/auth/forgotPassword',
  //       icon: icon('ic_circle'),
  //     },
  //     {
  //       title: 'Reset Password',
  //       path: '/admin/auth/resetPassword',
  //       icon: icon('ic_circle'),
  //     },
  //   ],
  // },
];

export default navConfig;