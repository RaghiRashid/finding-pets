import React from "react";
import CareDogs from "../CareDogs/CareDogs";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./CareContenct.module.css"
import cachorro from "../../assets/images/cachorro.png"

const CareContenct = () => {
    const texts = [
        "Texto 1: Lorem Ipsum is simply dummy text.",
        "Texto 2: Lorem Ipsum has been the industry's standard.",
        "Texto 3: It has survived not only five centuries.",
        "Texto 4: But also the leap into electronic typesetting.",
        "Texto 5: Remaining essentially unchanged."
      ];

    return(
        <div className={styles.careContenct}>
            <div>
                <h2 className={styles.careContenctTitle}>Cuidados para seu doguinho</h2>
            </div>
            <div>
                <CareDogs
                    icon={faCheckSquare} 
                    texts={texts}
                    imgSrc={cachorro}
                    altText="Dog"
                    side="left"
                />
                <CareDogs
                    icon={faCheckSquare} 
                    texts={texts}
                    imgSrc={cachorro}
                    altText="Dog"
                    side="right"
                />
            </div>
        </div>
    )
}

export default CareContenct;