import React from "react";
import styles from "./ContactForm.module.css"
import { faArrowRight, faEnvelope, faPhone, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import ButtonCallToAction from "../../ButtonCallToAction/ButtonCallToAction";
import InputInformation from "../InputInformation/InputInformation";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const ContactForm = () => {
    return(
        <div className={styles.contactFormContainer}>
            <div className={styles.contactFormTitle}>
                <h2 className={styles.contactTitle}>Fale conosco</h2>
                <p className={styles.contactDescription}>Estamos aqui para tirar suas dúvidas sobre adoção ou qualquer outra questão!</p>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.formForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" placeholder="Nome do remetente"/>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" placeholder="E-mail do remetente" style={{width: '355px'}}/>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="tel" id="telefone" placeholder="Número do remetente"/>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="assunto">Assunto:</label>
                        <input type="text" id="assunto" placeholder="Assunto do e-mail"/>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" rows="10" placeholder="Mensagem do e-mail"></textarea>
                    </div>

                    <div className={styles.formButton}>
                        <ButtonCallToAction icon={faArrowRight} text="Enviar Mensagem" />
                    </div>
                </form>
            </div>

            <div className={styles.formInfos}>
                <h3 className={styles.formTitle}>Informações Adicionais</h3>
                <div className={styles.formInformationContainer}>
                    <InputInformation
                        label={"Telefone para contato"}
                        icon={faPhone}
                        text={"(11)XXXX-XXXX"}
                    />
                    <InputInformation
                        label={"Telefone para contato"}
                        icon={faInstagram}
                        text={"findingpet.sp"}
                    />
                    <InputInformation
                        label={"Telefone para contato"}
                        icon={faPhoneVolume}
                        text={"(11)XXXX-XXXX"}
                        
                    />
                    <InputInformation
                        label={"Telefone para contato"}
                        icon={faTwitter}
                        text={"findingpet.sp"}
                    />
                    <InputInformation
                        label={"Telefone para contato"}
                        icon={faEnvelope}
                        text={"findingpet@adote.com.br"}
                    />
                    <InputInformation
                        label={"Telefone para contato"}
                        icon={faFacebookF}
                        text={"Finding Pet - São Paulo"}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactForm;