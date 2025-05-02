
import img from '../../../assets/images/card-image.png'
import { FaRegFileLines } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { RiLinksFill } from "react-icons/ri";
import { Link } from 'react-router';
import TeamRolesComponent from '../teamRoles/index';
import CurrentMembersComponenet from '../currentMembers/index'



export default function cardDescription ({start, end}) {
    return (
        <div className=" h-[853px] p-[30px] rounded-[8px] shadow-[0px_4px_23.5px_0px_#00000040] ">
            <div className='flex flex-wrap'>
                <div className='flex'>
                    <img src={img} alt="Card Image" className='w-[400px] h-[400px] rounded-[8px] mr-[50px]'/>
                    <div className="w-[640px] text-(--blue-turing)">
                        <div>
                            <p className='text-[24px]'>Ümumi təsvir</p>
                            <p className='text-[16px] my-[10px]'>Bu layihə restoranın gündəlik əməliyyatlarını avtomatlaşdırmaq məqsədi ilə hazırlanır. Sistem masa rezervasiyası, sifarişlərin idarə olunması və ödənişlərin izlənməsi funksiyalarını əhatə edir. İstifadəçilər menyudan seçim edərək sifarişi sistem üzərindən verə biləcəklər. Administratorlar məhsul əlavə edə, qiymət dəyişə və stok vəziyyətini izləyə biləcəklər. Həmçinin, sistem işçilərin növbələrini və iş qrafiklərini idarə etməyə imkan verir. Layihə Java ilə hazırlanacaq və masaüstü tətbiq formatında olacaq. İstifadəsi sadə, interfeysi intuitiv və istifadəçi dostu olacaq. Məqsəd müştəri xidmətini sürətləndirmək və restoran işinin effektivliyini artırmaqdır.</p>
                        </div>
                        <div>
                            <p className='text-[24px]'>Tələblər</p>
                            <p className='text-[16px] my-[10px]'>Java SE və OOP ilə backend sahəsində təcrübə qazanmaq istəyənlər axtarılır.Sakit, fokuslu və komanda ritminə uyğunlaşa bilən namizədlərə üstünlük verilir.Sadə və funksional interfeys dizaynı hazırlaya bilən dizaynerlərə ehtiyac var.Problemləri təmkinlə analiz edən və panikadan uzaq yanaşma bizim üçün vacibdir.CRUD və Java ilə verilənlər bazasına bağlantı qurma bacarığı olan biri komandaya lazımdır.</p>
                        </div>
                    </div>
                </div>

                <div className='flex mt-[20px] gap-[30px]'>
                    <div className='w-[377px]'>
                        <p className='text-[24px] text-(--blue-turing)'>Axtarılan komanda üzvləri</p>
                        <div className='flex'>
                            <TeamRolesComponent/>
                        </div>
                    </div>

                    <div className='w-[161px]'>
                        <p className='text-[24px] text-(--blue-turing)'>Layihə müddəti</p>
                        <div>
                            <p className='bg-black text-white rounded-[8px] text-[12px] text-center p-[8px] my-[10px]'>Başlama tarixi: {start} </p>
                            <p className='bg-black text-white rounded-[8px] text-[12px] text-center p-[8px] my-[10px]'>Bitmə tarixi: {end} </p>
                        </div>
                    </div>

                    <div className='w-[560px]'>
                        <p className='text-[24px] text-(--blue-turing)'>Əlavə fayllar və linklər</p>
                        <div className='flex flex-wrap gap-[24px]'>

                            <div className='flex w-[268px] border border-(--blue-turing) rounded-[8px] justify-between p-[3px]'>
                                <div className='flex gap-[5px] items-center'>
                                    <FaRegFileLines style={{ color: 'var(--orange-turing)' }} />
                                    <p>Layihə təqdimatı</p>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <IoEyeOutline style={{ color: 'var(--orange-turing)' }}/>
                                    <LuDownload style={{ color: 'var(--orange-turing)' }}/>
                                </div>
                            </div>

                            <div className='flex w-[268px] border border-(--blue-turing) rounded-[8px] justify-between p-[3px]'>
                                <div className='flex gap-[5px] items-center'>
                                    <FaRegFileLines style={{ color: 'var(--orange-turing)' }} />
                                    <p>Layihə təqdimatı</p>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <IoEyeOutline style={{ color: 'var(--orange-turing)' }}/>
                                    <LuDownload style={{ color: 'var(--orange-turing)' }}/>
                                </div>
                            </div>

                            <div className='flex w-[268px] border border-(--blue-turing) rounded-[8px] justify-between p-[3px]'>
                                <div className='flex gap-[5px] items-center'>
                                    <FaRegFileLines style={{ color: 'var(--orange-turing)' }} />
                                    <p>Layihə təqdimatı</p>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <IoEyeOutline style={{ color: 'var(--orange-turing)' }}/>
                                    <LuDownload style={{ color: 'var(--orange-turing)' }}/>
                                </div>
                            </div>

                            <div className='flex w-[268px] border border-(--blue-turing) gap-[20px] items-center p-[3px] rounded-[8px]'>
                                <RiLinksFill style={{ color: 'var(--orange-turing)' }}/>
                                <Link to='https://turing.ac/r5p9k'>https://turing.ac/r5p9k</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[100%]'>
                    <p className='text-[24px] text-(--blue-turing)'>Cari komanda üzvləri</p>
                    <div className='mt-[20px]'>
                        <CurrentMembersComponenet/>
                    </div>
                </div>

            </div>
        </div>

    )
}