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
                console.error("Error loading JSON:", error);
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
                            <div>
                                <h3>{kural.vari1}</h3>
                                <h3>{kural.vari2}</h3>
                            </div>
                        </div>
                        <p>{kural.vilakkam}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default KuralComponent;
