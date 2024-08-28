import { Icons } from '@/common/assets';
import { usePathname } from 'next/navigation';

function useSidebar() {
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
    }
  ];

  return {
    menuItems
  };
}

export default useSidebar;
