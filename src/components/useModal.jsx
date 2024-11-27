import { useState, useCallback } from "react";

const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = useCallback(() => {
    setIsOpen(true);
    console.log("Modal true");
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    console.log("Modal false");
  }, []);

  return [isOpen, openModal, closeModal];
};

export default useModal;
