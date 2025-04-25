import React, { useState, useRef } from 'react';
import galleryExportIcon from "@/assets/icons/gallery-export.svg"
import docIcon from "@/assets/icons/doc.svg"
import trashIcon from "@/assets/icons/trash.svg"

const FileUpload = ({ onChange }) => {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isDragging) {
            setIsDragging(true);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFiles(droppedFiles);
    };

    const handleFileInputChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        handleFiles(selectedFiles);
    };

    const handleFiles = (newFiles) => {
        const validFiles = newFiles.filter(file => {
            // Check file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                return false;
            }


            const fileType = file.type.toLowerCase();
            return fileType === 'image/png' || fileType === 'image/jpeg' || fileType === 'image/jpg';
        });

        if (validFiles.length !== newFiles.length) {
            alert('Fayl ölçüsü 5 MB-dan az olmalıdır və PNG, JPG, JPEG formatında olmalıdır');
        }


        const updatedFiles = [...files, ...validFiles];
        setFiles(updatedFiles);


        if (onChange) {
            onChange(updatedFiles);
        }
    };

    const removeFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);


        if (onChange) {
            onChange(updatedFiles);
        }
    };

    const openFileSelector = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="w-full h-full flex flex-col">
            <div
                className={`border-2 border-dashed bg-gray-80 ${isDragging ? 'border-orange-turing bg-orange-50' : 'border-orange-turing'
                    } rounded-md p-4 flex-grow flex flex-col items-center justify-center transition-colors duration-200`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={openFileSelector}
            >
                <div className="text-center cursor-pointer flex items-center justify-center flex-col">
                    <img src={galleryExportIcon} alt="gallery export icon" className='w-max' />
                    <p className="text-[clamp(10px,2vw,16px)] font-[500] text-black space-x-[2px]">
                        <span className='text-orange-turing'>Şəkli</span>
                        <span>
                            buraya sürükləyin və ya
                        </span>

                        <span className='border-b'>
                            Kompyuterdən
                        </span>
                        <span>
                            seç düyməsini klikləyin
                        </span>
                    </p>
                    <div className="text-[clamp(13px,2vw,16px)] font-[400]">
                        Dəstəklənən formatlar: PNG, JPG, JPEG
                    </div>
                    <p className="text-[clamp(13px,2vw,16px)] font-[400]">
                        Fayl ölçüsü 5 MB-dan az olmalıdır
                    </p>
                </div>
                <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept=".png,.jpg,.jpeg"
                    onChange={handleFileInputChange}
                    multiple
                />
            </div>

            {files.length > 0 && (
                <div className="mt-4 overflow-y-auto max-h-60">
                    <ul className="space-y-2 font-[400]">
                        {files.map((file, index) => (
                            <li
                                key={index}
                                className="flex items-center rounded-[8px] justify-between border px-[clamp(6px,2vw,8px)] py-[clamp(2px,1vw,4px)] w-full"
                            >
                                <div className="flex items-center justify-center gap-[2px] text-black">
                                    <img src={docIcon} alt="document icon" />
                                    <span className="truncate max-w-[10ch] text-[clamp(12px,2vw,15px)]">{file.name}</span>
                                    <span className="text-gray-50">
                                        ({(file.size / 1024).toFixed(2)} KB)
                                    </span>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFile(index);
                                    }}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <img src={trashIcon} alt='trash icon' />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FileUpload;