import React, { type ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-gray-900 border-2 border-green-700 rounded p-6 max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="text-center mb-4 text-lg">{title}</div>
                {children}
            </div>
        </div>
    );
};

export default Modal;