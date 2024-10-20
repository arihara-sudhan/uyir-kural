import React, { useEffect, useState } from 'react';
import style from "./Kural.module.css";

const KuralComponent = (props) => {
    const [kurals, setKurals] = useState(null);

    useEffect(() => {
        const loadMeta = async () => {
            try {
                const response = await import(`./meta/${props.kural}.json`);
                setKurals(response.default);
            } catch (error) {
                setKurals(null);
            }
        };

        loadMeta();
    }, [props.kural]);

    return (
        <div className={style.kuralContainer}>
            {kurals ? (
                kurals.map((kural, index) => (
                    <div key={index} className={style.kural}>
                        <div className={style.kuralDiv}>
                            <h1 className={style.numberCircle}>{kural.kural}</h1>
                            <div className={style.kural_here}>
                                <h3>{kural.vari1}</h3>
                                <h3>{kural.vari2}</h3>
                            </div>
                        </div>
                        <p className={style.kuralVilakkam}>{kural.vilakkam}</p>
                    </div>
                ))
            ) : (
                <p>நீங்கள் தேடும் அதிகாரத்திற்கு, உரை ஆசிரியர் இன்னும் உரை எழுதவில்லை... தினமும் ஒரு குறளுக்கு மட்டுமே உரை எழுதப்படுவதனால், பத்து குறள்கள் சேரும் பொழுது, முறையான அதிகாரம் இத்தளத்தில் ஏற்றப்படும்... தொடர்ந்து இணைந்திருக்கவும்... நன்றி... <br/>தமிழன்னைக்கே வெற்றி...</p>
            )}
        </div>
    );
};

export default KuralComponent;
