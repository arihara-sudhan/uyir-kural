import style from "./LeftBar.module.css";

export default function Banner(){
    return (
        <>
            <div className={style.banner}>
            </div>
            <div className={style.bannerHead}>
                <h1>உயிர்க்குறள்</h1>
                <h3>வள்ளுவன் தன்னை உலகினுக்கே தந்து வான்புகழ் கொண்ட தமிழ்நாடு!</h3>
            </div>
        </>
    )
}