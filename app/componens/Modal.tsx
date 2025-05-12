import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  customWidth?: string; // Clase Tailwind opcional
}

export default function Modal({ children, customWidth = "w-full" }: ModalProps) {
  return (
    <div className="fixed inset-0 w-full h-full bg-red-300 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`bg-white max-w-screen-xl rounded-lg max-h-full overflow-y-auto flex items-center justify-center p-4 ${customWidth}`}
      >
        {children}
      </div>
    </div>
  );
}
