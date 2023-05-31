import React, { useState } from "react";

export default function useModal() {
  const [open, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    open,
    /** actions */
    onOpen,
    onToggle,
    onClose,
  };
}
