import { useState } from 'react';

export default (initialState) => {
  const [confirmPopUp, setConfirmPopUp] = useState(initialState);

  return [confirmPopUp, setConfirmPopUp];
};
