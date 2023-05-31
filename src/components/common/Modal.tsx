"use client";
import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;

  children: React.ReactNode;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) {
    return null;
  }

  return createPortal(
    <div className="fixed w-full h-full top-0 z-50">
      <div
        className="w-full h-full bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute bottom-0 w-full rounded-t-2xl bg-white/80 mt-auto">
        {children}
      </div>
    </div>,
    document.body
  );
}
