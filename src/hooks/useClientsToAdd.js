import { useState } from 'react';
import { toast } from 'react-toastify';

export default (initialState) => {
  const [clientsSelected, setClientsSelected] = useState(initialState);
  const [clientsFiltered, setClientsFiltered] = useState([]);
  //   const [confirmAddClient, setConfirmAddClient] = useState(false);

  function openDialogAddClient(item) {}

  function handleAddClient(item) {
    // setConfirmAddClient(false);
    // toast.success('cidadão adicionado com sucesso');
    // if (clientsSelected.find((e) => e.id === item.id)) {
    //   toast.warn('cidadão já adicionado');
    //   return;
    // }
    // const index = clientsFiltered.findIndex((e) => e.id === item.id);

    // if (item.residence_id) {
    //   toast.warn('cidadão já foi adicionado em outra residencia');
    //   return;
    // }
    setClientsFiltered([...clientsFiltered.filter((e) => e.id !== item.id)]);
    // setConfirmAddClient(true);
    setClientsSelected([...clientsSelected, item]);
  }

  function cancelAddClient(item) {
    // setConfirmAddClient(false);
    const arr = [...clientsSelected];
    arr.pop();
    setClientsSelected(arr);
    setClientsFiltered([...clientsFiltered, item]);
  }

  return {
    clientsSelected,
    setClientsSelected,
    // confirmAddClient,
    // setConfirmAddClient,
    // openDialogAddClient,
    handleAddClient,
    cancelAddClient,
    clientsFiltered,
    setClientsFiltered,
  };
};
