import React, { useState } from 'react'
import Input from "@/components/Input/index"
import { dayOptions, hourOptions, locationOptions, monthOptions } from './data/contents'
import Checkbox from '../../components/Checkbox'
import FileUpload from '@/components/FileUpload/index'


function CreateMentorium() {
    const [formData, setFormData] = useState({
        mentorName: '',
        mentorField: '',
        topic: '',
        description: '',
        maxParticipants: '',
        month: '',
        startTime: '',
        day: '',
        endTime: '',
        location: '',
        attendanceType: 'both',
        files: []
    });

    // Validation
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState({ show: false, message: '', type: '' });

    // Checkbox handler 
    const handleCheckboxChange = (value) => {
        setFormData({
            ...formData,
            attendanceType: value
        });
    };

    // input Handler
    const handleInputChange = (field) => (e) => {
        setFormData({
            ...formData,
            [field]: e.target.value
        });


        if (errors[field]) {
            setErrors({
                ...errors,
                [field]: ''
            });
        }
    };

    // updlade file handler
    const handleFilesChange = (files) => {
        setFormData({
            ...formData,
            files: files
        });


        if (errors.files) {
            setErrors({
                ...errors,
                files: ''
            });
        }
    };

    // notif
    const showNotification = (message, type = 'error') => {
        setNotification({
            show: true,
            message,
            type
        });


        setTimeout(() => {
            setNotification({ show: false, message: '', type: '' });
        }, 5000);
    };

    // Validate form
    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        // requireds
        if (!formData.mentorName.trim()) {
            newErrors.mentorName = 'Mentor adı tələb olunur';
            isValid = false;
        }

        if (!formData.mentorField.trim()) {
            newErrors.mentorField = 'Mentorun sahəsi tələb olunur';
            isValid = false;
        }

        if (!formData.topic.trim()) {
            newErrors.topic = 'Mövzu tələb olunur';
            isValid = false;
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Təsvir tələb olunur';
            isValid = false;
        }

        // Time validation
        if (!formData.month) {
            newErrors.month = 'Ay seçilməlidir';
            isValid = false;
        }

        if (!formData.day) {
            newErrors.day = 'Gün seçilməlidir';
            isValid = false;
        }

        if (!formData.startTime) {
            newErrors.startTime = 'Başlama saatı seçilməlidir';
            isValid = false;
        }

        if (!formData.endTime) {
            newErrors.endTime = 'Bitmə saatı seçilməlidir';
            isValid = false;
        }

        // bitme zamanının başlangıc zamanından sonra gelmesini yoxluyur
        if (formData.startTime && formData.endTime && formData.startTime >= formData.endTime) {
            newErrors.endTime = 'Bitmə vaxtı başlama vaxtından sonra olmalıdır';
            isValid = false;
        }


        if (!formData.location) {
            newErrors.location = 'Məkan seçilməlidir';
            isValid = false;
        }


        if (formData.attendanceType === 'inperson' && formData.location === 'online') {
            newErrors.attendanceType = 'Əyani tədbirlər üçün fiziki məkan seçilməlidir';
            isValid = false;
        }

        if (formData.files.length === 0) {
            newErrors.files = 'Ən azı bir fayl yükləyin';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleSubmit = () => {
        if (validateForm()) {


            showNotification('Mentorium uğurla yaradıldı!', 'success');
            window.location.href = '/';
        } else {
            showNotification('Zəhmət olmasa, formu düzgün doldurun', 'error');
        }
    };


    const handleExit = () => {
        // Show confirmation dialog if form has been modified
        const isFormModified = Object.values(formData).some(value =>
            (typeof value === 'string' && value.trim() !== '') ||
            (Array.isArray(value) && value.length > 0)
        );

        if (isFormModified) {
            const confirmed = window.confirm('Dəyişikliklər saxlanılmayacaq. Çıxmaq istədiyinizə əminsiniz?');
            if (confirmed) {
                window.location.href = '/';
            }
        } else {
            window.location.href = '/';

        }
    };

    return (
        <div className='min-w-full flex flex-col justify-between gap-6'>
            {/* Notification */}
            {notification.show && (
                <div className={`p-4 rounded-md ${notification.type === 'success' ? 'bg-green-100 text-green-03' : 'bg-red-100 text-red-20'}`}>
                    {notification.message}
                </div>
            )}

            <div className='w-full grid grid-cols-1 md:grid-cols-2 items-stretch gap-[clamp(20px,6vw,30px)]'>
                <div className='h-full'>
                    <FileUpload onChange={handleFilesChange} />
                    {errors.files && <p className="text-red-20 text-sm mt-1">{errors.files}</p>}
                </div>

                {/* Form inputs with validation */}
                <div className='h-full'>
                    <div className='w-full flex flex-col gap-[clamp(12px,3vh,16px)]'>
                        <div>
                            <Input
                                type="text"
                                label="Mentor Adı"
                                value={formData.mentorName}
                                onChange={handleInputChange('mentorName')}
                            />
                            {errors.mentorName && <p className="text-red-20 text-sm mt-1">{errors.mentorName}</p>}
                        </div>

                        <div>
                            <Input
                                type="text"
                                label="Mentorun sahəsi"
                                value={formData.mentorField}
                                onChange={handleInputChange('mentorField')}
                            />
                            {errors.mentorField && <p className="text-red-500 text-sm mt-1">{errors.mentorField}</p>}
                        </div>

                        <div>
                            <Input
                                type="textarea"
                                label="Mövzu"
                                value={formData.topic}
                                onChange={handleInputChange('topic')}
                            />
                            {errors.topic && <p className="text-red-500 text-sm mt-1">{errors.topic}</p>}
                        </div>

                        <div>
                            <Input
                                type="text"
                                label="Qısa təsvir"
                                value={formData.description}
                                onChange={handleInputChange('description')}
                            />
                            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                        </div>

                        <div>
                            <Input
                                type="text"
                                label="Maksimum iştirakçı sayı"
                                value={formData.maxParticipants}
                                onChange={handleInputChange('maxParticipants')}
                            />
                        </div>

                        <i className='text-gray-20 font-[400] text-[clamp(8px,1vw,11px)]'>*Boş buraxılarsa, limitsizdir.(online olsa)</i>

                        <div className='flex gap-4'>
                            <div className="w-1/2">
                                <Input
                                    type="select"
                                    options={monthOptions}
                                    label="Ay"
                                    value={formData.month}
                                    onChange={handleInputChange('month')}
                                />
                                {errors.month && <p className="text-red-500 text-sm mt-1">{errors.month}</p>}
                            </div>
                            <div className="w-1/2">
                                <Input
                                    type="select"
                                    options={hourOptions}
                                    label="Başlama saatı"
                                    value={formData.startTime}
                                    onChange={handleInputChange('startTime')}
                                />
                                {errors.startTime && <p className="text-red-500 text-sm mt-1">{errors.startTime}</p>}
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <div className="w-1/2">
                                <Input
                                    type="select"
                                    options={dayOptions}
                                    label="Gün"
                                    value={formData.day}
                                    onChange={handleInputChange('day')}
                                />
                                {errors.day && <p className="text-red-500 text-sm mt-1">{errors.day}</p>}
                            </div>
                            <div className="w-1/2">
                                <Input
                                    type="select"
                                    options={hourOptions}
                                    label="Bitmə saatı"
                                    value={formData.endTime}
                                    onChange={handleInputChange('endTime')}
                                />
                                {errors.endTime && <p className="text-red-500 text-sm mt-1">{errors.endTime}</p>}
                            </div>
                        </div>

                        <div>
                            <Input
                                type="select"
                                options={locationOptions}
                                label="Mentorium məkanı"
                                value={formData.location}
                                onChange={handleInputChange('location')}
                            />
                            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                        </div>

                        <div className='flex gap-[10px] mt-4'>
                            <Checkbox
                                label="Hər ikisi"
                                checked={formData.attendanceType === 'both'}
                                value="both"
                                onChange={handleCheckboxChange}
                            />
                            <Checkbox
                                label="Əyani"
                                checked={formData.attendanceType === 'inperson'}
                                value="inperson"
                                onChange={handleCheckboxChange}
                            />
                            <Checkbox
                                label="Online"
                                checked={formData.attendanceType === 'online'}
                                value="online"
                                onChange={handleCheckboxChange}
                            />
                            {errors.attendanceType && <p className="text-red-500 text-sm ml-4">{errors.attendanceType}</p>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[clamp(20px,6vw,30px)] mt-6'>
                <button
                    type='button'
                    onClick={handleExit}
                    className="text-[clamp(14px,2vw,18px)] rounded-[8px] w-full font-[500] text-blue-turing px-[clamp(18px,3vw,26px)] py-[clamp(9px,2vw,12px)] border border-blue-turing"
                >
                    Çıx
                </button>
                <button
                    type='button'
                    onClick={handleSubmit}
                    className="text-[clamp(14px,2vw,18px)] rounded-[8px] w-full font-[500] text-white px-[clamp(18px,3vw,26px)] py-[clamp(9px,2vw,12px)] bg-orange-turing"
                >
                    Təsdiq et
                </button>
            </div>
        </div>
    )
}

export default CreateMentorium