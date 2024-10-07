import style from "./RightBar.module.css";
import OptionsBanner from "../OptionsBanner";
import Kural from "../Kural";
import { useEffect, useState } from "react";

export default function Banner(){
    const [ kural, setKural ] = useState("கடவுள் வாழ்த்து");
    const [ kuralMatches, setKuralMatches ] = useState([]);

    useEffect(()=>{
        console.log(kuralMatches);
    }, [kuralMatches]);

    return (
        <div className={style.banner}>
            <h1 className={style.bannerHeading}>உயிர்க்குறள்</h1>
            <OptionsBanner changeKural={setKural} setKuralMatches={setKuralMatches} />
            {kuralMatches.length > 0 ? (
                kuralMatches.map((record) => (
                    <div key={record["kural_no"]} className={style.kuralMatch}>
                        <p>{record.match}</p>
                    </div>
                ))
            ) : (
                <Kural kural={kural} />
            )}
        </div>
    );
}
