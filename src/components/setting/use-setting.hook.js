import { useRef, useState } from 'react';
import makeRequest from '@/common/api/axios.config';
import { API_ENDPOINTS } from '@/common/api/endpoints';
import { HTTP } from '@/common/constants/http-methods.constant';
import { useGlobalContext } from '@/common/context/global-context';

function useSetting() {
  const profileRef = useRef(null);
  const { profile } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const [typeModal, setTypeModal] = useState('');

  const changPasswordValues = {
    current_password: '',
    new_password: '',
    confirm_password: ''
  };

  const updateProfileValues = {
    first_name: '',
    last_name: ''
  };

  const handleSubmit = async (data) => {
    try {
      await makeRequest(HTTP.POST, API_ENDPOINTS.CHANGE_PASSWORD, data);
    } finally {
      setOpen(false);
      setTypeModal('');
    }
  };

  return {
    open,
    setOpen,
    profile,
    typeModal,
    profileRef,
    setTypeModal,
    handleSubmit,
    updateProfileValues,
    changPasswordValues
  };
}

export default useSetting;
