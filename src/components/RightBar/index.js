import style from "./RightBar.module.css";
import OptionsBanner from "../OptionsBanner";
import Kural from "../Kural";
import { useState } from "react";

export default function Banner(){
    const [ kural, setKural ] = useState("கடவுள் வாழ்த்து");
    return (
        <div className={style.banner}>
            <h1 className={style.bannerHeading}>உயிர்க்குறள்</h1>
            <OptionsBanner changeKural={setKural}/>
            <Kural kural={kural}/>
        </div>
    )
}