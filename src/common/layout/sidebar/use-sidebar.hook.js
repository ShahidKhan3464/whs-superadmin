import Cookies from 'js-cookie';
import { Icons } from '@/common/assets';
import { usePathname, useRouter } from 'next/navigation';

function useSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      icon: Icons.home,
      text: 'Dashboard',
      path: '/dashboard',
      activeIcon: Icons.homeWhite,
      isActive: pathname === '/dashboard'
    },
    {
      text: 'Transactions',
      path: '/transactions',
      icon: Icons.transaction,
      activeIcon: Icons.transactionWhite,
      isActive: pathname === '/transactions'
    },
    {
      text: 'Subscriptions',
      path: '/subscriptions',
      icon: Icons.subscription,
      activeIcon: Icons.subscriptionWhite,
      isActive: pathname === '/subscriptions'
    },
    {
      path: '/users',
      icon: Icons.users,
      text: 'Company Admins',
      activeIcon: Icons.usersWhite,
      isActive: pathname === '/users'
    },
    {
      text: 'Setting',
      path: '/setting',
      icon: Icons.setting,
      activeIcon: Icons.settingWhite,
      isActive: pathname === '/setting'
    },
    {
      text: 'Logout',
      icon: Icons.logout
    }
  ];

  const handleLogout = () => {
    Cookies.remove('user');
    Cookies.remove('auth-token');
    router.push('/login');
  };

  return {
    menuItems,
    handleLogout
  };
}

export default useSidebar;
