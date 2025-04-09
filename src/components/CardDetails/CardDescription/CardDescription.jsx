import './CardDescription.css'
import img from '../../../assets/images/card-image.png'
import { FaRegFileLines } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { RiLinksFill } from "react-icons/ri";
import { Link } from 'react-router';



export default function CardDescription () {
    return (
        <div className="card-description">
            <div className="container">
                <div className="img-description">
                    <img src={img} alt="Card Image"/>
                    <div className="description">
                        <div className="general">
                            <p className='heading'>Ümumi təsvir</p>
                            <p className='project-details'>Bu layihə restoranın gündəlik əməliyyatlarını avtomatlaşdırmaq məqsədi ilə hazırlanır. Sistem masa rezervasiyası, sifarişlərin idarə olunması və ödənişlərin izlənməsi funksiyalarını əhatə edir. İstifadəçilər menyudan seçim edərək sifarişi sistem üzərindən verə biləcəklər. Administratorlar məhsul əlavə edə, qiymət dəyişə və stok vəziyyətini izləyə biləcəklər. Həmçinin, sistem işçilərin növbələrini və iş qrafiklərini idarə etməyə imkan verir. Layihə Java ilə hazırlanacaq və masaüstü tətbiq formatında olacaq. İstifadəsi sadə, interfeysi intuitiv və istifadəçi dostu olacaq. Məqsəd müştəri xidmətini sürətləndirmək və restoran işinin effektivliyini artırmaqdır.</p>
                        </div>
                        <div className="general">
                            <p className='heading'>Tələblər</p>
                            <p className='project-details'>Java SE və OOP ilə backend sahəsində təcrübə qazanmaq istəyənlər axtarılır.Sakit, fokuslu və komanda ritminə uyğunlaşa bilən namizədlərə üstünlük verilir.Sadə və funksional interfeys dizaynı hazırlaya bilən dizaynerlərə ehtiyac var.Problemləri təmkinlə analiz edən və panikadan uzaq yanaşma bizim üçün vacibdir.CRUD və Java ilə verilənlər bazasına bağlantı qurma bacarığı olan biri komandaya lazımdır.</p>
                        </div>
                    </div>
                </div>

                <div className="add-info">
                    <div className="required-members">
                        <p className='searched-members'>Axtarılan komanda üzvləri</p>
                        <div className="memebrs">
                            <span>2 Data Analitik</span>
                            <span>1 PM</span>
                            <span>1 UI/UX Designer</span>
                            <span>1 Backend Developer</span>
                            <span>1 Backend Developer</span>
                        </div>
                    </div>

                    <div className="project-duration">
                        <p className='duration-text'>Layihə müddəti</p>
                        <div className="start-end">
                            <p className='start-date'>Başlama tarixi: 01.04.2025 </p>
                            <p className='end-date'>Bitmə tarixi: 01.04.2025 </p>
                        </div>
                    </div>

                    <div className="add-files">
                        <p className='files-text'>Əlavə fayllar və linklər</p>
                        <div className="files">
                            <div className="project-ppt">
                                <div className="file">
                                    <FaRegFileLines />
                                    <p className='file-name'></p>
                                </div>
                                <div className="status">
                                    <IoEyeOutline />
                                    <LuDownload />
                                </div>
                            </div>
                            <div className="project-ppt">
                            <div className="file">
                                    <FaRegFileLines />
                                    <p className='file-name'></p>
                                </div>
                                <div className="status">
                                    <IoEyeOutline />
                                    <LuDownload />
                                </div>
                            </div>
                            <div className="project-ppt">
                            <div className="file">
                                    <FaRegFileLines />
                                    <p className='file-name'></p>
                                </div>
                                <div className="status">
                                    <IoEyeOutline />
                                    <LuDownload />
                                </div>
                            </div>
                            <div className="link">
                                <RiLinksFill />
                                <Link to='https://turing.ac/r5p9k'>https://turing.ac/r5p9k</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="actual-members">
                    <p></p>
                    <div className="memeber-cards">
                        <div className="each-member"></div>
                        <div className="each-member"></div>
                        <div className="each-member"></div>
                        <div className="each-member"></div>
                        <div className="each-member"></div>
                        <div className="each-member"></div>
                        <div className="each-member"></div>
                    </div>
                </div>

            </div>
        </div>

    )
}