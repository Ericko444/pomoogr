import React from 'react';
import Modal from '@/components/ui/Modal';

interface HelpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="POMOOGR HELP">
            <div className="text-sm mb-4">
                <p className="mb-2">
                    The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
                </p>
                <p className="mb-2">{`>`} WORK: Focus on your task for 25 minutes</p>
                <p className="mb-2">{`>`} SHORT BREAK: Take a 5 minute break</p>
                <p className="mb-2">{`>`} After 4 work sessions, take a LONG BREAK (15-30 min)</p>
            </div>
            <pre className="text-xs mb-4 bg-black p-2 rounded border border-green-700 whitespace-pre-wrap">
                {`KEY BINDINGS:
[S]........Start timer
[P]........Pause timer
[R]........Reset timer
[F1].......Help (this screen)
[F2].......Settings
[F3].......Toggle sound`}
            </pre>
            <div className="text-center">
                <button
                    onClick={onClose}
                    className="bg-green-800 hover:bg-green-700 text-black px-4 py-2 rounded border-green-500 border-2"
                >
                    CLOSE
                </button>
            </div>
        </Modal>
    );
};

export default HelpModal;