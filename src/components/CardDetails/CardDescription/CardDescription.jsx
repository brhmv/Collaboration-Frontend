import { FaRegFileLines } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { RiLinksFill } from "react-icons/ri";
import { Link } from 'react-router';
import TeamRolesComponent from '../teamRoles/index';
import CurrentMembersComponenet from '../currentMembers/index'



export default function CardDescription({ currentMembers, teamRoles, imgUrl, title, description, requirements, startingDate, endingDate }) {
    return (
        <div className="space-y-[10px]  min-h-max p-[30px] rounded-[8px] shadow-[0px_4px_23.5px_0px_#00000040] ">
            <div className='flex flex-col items-center md:items-stretch  md:flex-row justify-between gap-[clamp(36px,10vw,70px)]'>
                <img
                    src={imgUrl}
                    alt={title}
                    className='object-cover w-[clamp(200px,25vw,400px)] aspect-square rounded-[8px]'
                />

                <div className="flex flex-col justify-between gap-[clamp(18px,3vh,30px)] text-(--blue-turing) ">
                    <div>
                        <p className='text-[clamp(16px,2vw,24px)]'>Ümumi təsvir</p>
                        <p className='text-[clamp(10px,1vw,16px)] font-[400]'>{description}</p>
                    </div>
                    <div>
                        <p className='text-[clamp(16px,2vw,24px)]'>Tələblər</p>
                        <p className='text-[clamp(10px,1vw,16px)]'>{requirements}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-[20px] gap-[30px]'>
                <div className='min-w-1/3'>
                    <h4 className='text-[clamp(16px,2vw,24px)] text-blue-turing)'>Axtarılan komanda üzvləri</h4>
                    <TeamRolesComponent teamRoles={teamRoles} />
                </div>
                <div className='min-w-max flex flex-col'>
                    <p className='text-[clamp(16px,2vw,24px)] text-(--blue-turing) '>Layihə müddəti</p>
                    <div className='space-y-[5px]'>
                        <p className='bg-black text-white rounded-[8px] text-[12px] text-center p-[8px]'>Başlama tarixi: {startingDate} </p>
                        <p className='bg-black text-white rounded-[8px] text-[12px] text-center p-[8px]'>Bitmə tarixi: {endingDate} </p>
                    </div>
                </div>
                <div className='w-full'>
                    <p className='text-[24px] text-(--blue-turing)'>Əlavə fayllar və linklər</p>
                    <div className='grid xl:grid-cols-2 gap-y-[5px] gap-x-[clamp(18px,3vw,24px)]'>

                        <div className='flex min-w-full border border-(--blue-turing) rounded-[8px] justify-between p-[3px]'>
                            <div className='flex gap-[5px] items-center'>
                                <FaRegFileLines style={{ color: 'var(--orange-turing)' }} />
                                <p>Layihə təqdimatı</p>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <div className='rounded-full bg-gray-90 p-[3px]'>
                                    <IoEyeOutline style={{ color: 'var(--orange-turing)' }} />
                                </div>
                                <LuDownload style={{ color: 'var(--orange-turing)' }} />
                            </div>
                        </div>

                        <div className='flex min-w-full border border-(--blue-turing) rounded-[8px] justify-between p-[3px]'>
                            <div className='flex gap-[5px] items-center'>
                                <FaRegFileLines style={{ color: 'var(--orange-turing)' }} />
                                <p>Layihə təqdimatı</p>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <div className='rounded-full bg-gray-90 p-[3px]'>
                                    <IoEyeOutline style={{ color: 'var(--orange-turing)' }} />
                                </div>
                                <LuDownload style={{ color: 'var(--orange-turing)' }} />
                            </div>
                        </div>

                        <div className='flex min-w-full border border-(--blue-turing) rounded-[8px] justify-between p-[3px]'>
                            <div className='flex gap-[5px] items-center'>
                                <FaRegFileLines style={{ color: 'var(--orange-turing)' }} />
                                <p>Layihə təqdimatı</p>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <div className='rounded-full bg-gray-90 p-[3px]'>
                                    <IoEyeOutline style={{ color: 'var(--orange-turing)' }} />
                                </div>
                                <LuDownload style={{ color: 'var(--orange-turing)' }} />
                            </div>
                        </div>
                        <div className='flex min-w-full border border-(--blue-turing) gap-[5px] items-center p-[3px] rounded-[8px]'>
                            <RiLinksFill style={{ color: 'var(--orange-turing)' }} />
                            <Link to='https://turing.ac/r5p9k'>https://turing.ac/r5p9k</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full space-y-[10px]'>
                <p className='text-[24px] text-(--blue-turing)'>Cari komanda üzvləri</p>
                <CurrentMembersComponenet currentMembers={currentMembers} />

            </div>


        </div>

    )
}