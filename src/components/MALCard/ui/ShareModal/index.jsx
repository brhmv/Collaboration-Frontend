import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoCloseOutline, IoLogoWhatsapp, IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import {
    closeShareModal,
    setCopied,
    selectShareModalState,
    selectShareModalUrl,
    selectShareModalCopied
} from '@/redux/slices/shareModalSlice';
import { useInsideOutsClick } from '@/utils/hooks/useInsideOutsClick';

const ShareModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(selectShareModalState);
    const url = useSelector(selectShareModalUrl);
    const copied = useSelector(selectShareModalCopied);

    const handleClose = () => {
        dispatch(closeShareModal());
    };


    const modalRef = useInsideOutsClick(

        () => { },

        () => {
            if (isOpen) {
                handleClose();
            }
        }
    );

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(url).then(() => {
            dispatch(setCopied(true));
            setTimeout(() => dispatch(setCopied(false)), 2000);
        });
    };

    const handleShareOnWhatsApp = () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank');
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50"
        >
            <div
                ref={modalRef}
                className="bg-white rounded-lg p-5 w-full max-w-md mx-4"
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Share</h3>
                    <button
                        onClick={handleClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <IoCloseOutline className="text-2xl" />
                    </button>
                </div>

                <div className="mb-4">
                    <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 mb-4">
                        <div className="truncate mr-2 text-sm">
                            {url}
                        </div>
                        <button
                            onClick={handleCopyToClipboard}
                            className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full p-2"
                        >
                            {copied ?
                                <IoCheckmarkOutline className="text-green-500 text-xl" /> :
                                <IoCopyOutline className="text-gray-600 text-xl" />
                            }
                        </button>
                    </div>

                    <button
                        onClick={handleShareOnWhatsApp}
                        className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
                    >
                        <IoLogoWhatsapp className="text-xl" />
                        <span>Share on WhatsApp</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;