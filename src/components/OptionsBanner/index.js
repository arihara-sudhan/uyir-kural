import { useState } from "react";
import Meta from "./meta.json";
import style from "./OptionsBanner.module.css";

export default function MetaSelector(props) {
    const [paal, setPaal] = useState("அறம்");
    const [iyal, setIyal] = useState("பாயிரவியல்");

    const paalOptions = Object.keys(Meta);
    const iyalOptions = paal in Meta ? Object.keys(Meta[paal]) : [];
    const itemOptions = paal in Meta && iyal in Meta[paal] ? Meta[paal][iyal] : [];

    return (
        <div className={style.optionBanner}>
            <select onChange={(e) => {
                setPaal(e.target.value);
                setIyal(Object.keys(Meta[e.target.value] || {})[0] || "");
            }} value={paal}>
                {paalOptions.map(key => (
                    <option key={key} value={key}>
                        {key}
                    </option>
                ))}
            </select>

            <select onChange={(e) => setIyal(e.target.value)} value={iyal} disabled={!iyalOptions.length}>
                {iyalOptions.map(key => (
                    <option key={key} value={key}>
                        {key}
                    </option>
                ))}
            </select>

            <select disabled={!itemOptions.length} onChange={(e) => props.changeKural(e.target.value)}>
                {itemOptions.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}
