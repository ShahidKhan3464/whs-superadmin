import { useState } from 'react';
import { useRouter } from 'next/navigation';

function useSubscriptions() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState('');
  const subscriptionTabs = [{ title: 'monthly' }, { title: 'yearly' }];

  const plans = [
    {
      name: 'Basic Plan',
      price: '$199.50',
      activeStatus: true,
      features: [
        'Apsum dolor sit amet Ut id do',
        'Xorem ipsum dolor sit amet',
        'Dsum dolor sit amet Srt id',
        'Vsum dolor sit amet Saf id',
        'Upto 1 Floors'
      ]
    },
    {
      name: 'Standard Plan',
      price: '$199.50',
      activeStatus: true,
      features: [
        'Apsum dolor sit amet Ut id do',
        'Xorem ipsum dolor sit amet',
        'Dsum dolor sit amet Srt id',
        'Vsum dolor sit amet Saf id',
        'Upto 2 Floors',
        'Can add More Floors'
      ]
    }
  ];

  return {
    open,
    plans,
    setOpen,
    enabled,
    activeTab,
    setEnabled,
    setActiveTab,
    subscriptionTabs
  };
}

export default useSubscriptions;
