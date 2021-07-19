import { useRef, useState } from 'react';

export default (initialState) => {
  const [filterSearch, setfilterSearch] = useState(initialState);
  const inputRef = useRef(null);

  function handleSelectFilter(e) {
    const select = e.target;
    const obj = {};
    obj[select.options[select.selectedIndex].id] = select.value;
    setfilterSearch(obj);
    inputRef.current.focus();
  }

  return { filterSearch, setfilterSearch, handleSelectFilter, inputRef };
};
