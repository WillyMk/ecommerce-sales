import {
  SettingFilled,
  UserOutlined,
  KeyOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { AiOutlineLineChart } from 'react-icons/ai';
import { FcUnlock } from 'react-icons/fc';
import { MdProductionQuantityLimits } from 'react-icons/md';

export const NavigationItems = [
  {
    label: 'Dashboard',
    icon: <PieChartOutlined />,
    key: '/dashboard',
  },
  {
    label: 'Products',
    icon: <MdProductionQuantityLimits />,
    color: 'white',
    key: '/products',
    // children: [
    //   {
    //     label: "Employees",
    //     icon: <UserOutlined />,
    //     key: "/organisation/employees",
    //   },
    //   {
    //     label: "Department",
    //     icon: <SettingFilled />,
    //     key: "/organisation/departments",
    //   },
    // ],
  },
  {
    label: 'Order',
    icon: <AiOutlineLineChart />,
    color: 'white',
    key: '/order',
    // children: [
    //   {
    //     label: "Employees",
    //     icon: <UserOutlined />,
    //     key: "/organisation/employees",
    //   },
    //   {
    //     label: "Department",
    //     icon: <SettingFilled />,
    //     key: "/organisation/departments",
    //   },
    // ],
  },
  {
    label: 'Organisation',
    icon: <KeyOutlined />,
    color: 'white',
    key: '/organisation',
    children: [
      {
        label: 'Employees',
        icon: <UserOutlined />,
        key: '/organisation/employees',
      },
      {
        label: 'Department',
        icon: <SettingFilled />,
        key: '/organisation/departments',
      },
      {
        label: 'UI',
        icon: <SettingFilled />,
        key: '/organisation/login-ui',
      },
    ],
  },
];
