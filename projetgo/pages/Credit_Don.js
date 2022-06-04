import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useState} from "react";
import Animation_Credit_Don from "./Animation_Credit_Don";

export default function Credit_Don() {

    const [money, setMoney] = useState(0.0);
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div id="__next" className={styles.DivContainer}>
            <Head>
                <title>ProjetGo</title>
            </Head>
            <div className={styles.DivSousContainer}>
                <div className={styles.DivSousSousContainerSignIn}>
                    <div style={show === true ? {display: 'none'} : {display: 'inline'}}>
                        <div>
                            <div>
                                <img src="/Image_Login/logoMoon.png" className={styles.DivImageLogo}/>
                                <div className={styles.DivInputCreditDon}>
                                    <span className={styles.SpanCreditDon}>Montant</span>&emsp;
                                    <input className={styles.InputCreditDon}
                                           onChange={e => setMoney(parseFloat(e.target.value))}/><br/><br/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <span>&ensp;Nom du titulaire</span><br/>
                            <input className={styles.InputCredit}/><br/><br/>
                        </div>
                        <div>
                            <span>&ensp;Numéro de Carte de Crédit</span> &emsp;<span className={styles.SpanCredit}>CVC</span><br/>
                            <input className={styles.InputCreditNum}/>&ensp;
                            <input className={styles.InputCreditCodeSecurite}/><br/><br/>
                        </div>
                        <div>
                            <span>&ensp;Date d'expiration</span><br/>
                            <input className={styles.InputCreditDate} placeholder="MM"/>&ensp;

                            <span> / </span>&ensp;
                            <input className={styles.InputCreditDate} placeholder="YY"/><br/><br/>
                        </div>
                        <div>
                            <span>&ensp;Montant</span><span className={styles.SpanCreditTaxes}>&emsp;&ensp;ProjetGo Tips</span><span className={styles.SpanCreditTaxes}>Montant Total</span><br/>

                            <input className={styles.InputCreditTaxes} defaultValue={isNaN(money) ? setMoney(0) : money}
                                   disabled="disabled"/>&ensp;+&ensp;
                            <input className={styles.InputCreditTaxes} defaultValue={money === 0 ? 0 : 5.0}
                                   disabled="disabled"/>&ensp;=&ensp;
                            <input className={styles.InputCreditTaxes}
                                   defaultValue={money === 0 ? 0 : (money + 5.0).toFixed(2) + " CAD"} disabled="disabled"/>&ensp;
                        </div>
                    </div>
                    <div>
                        {show && <Animation_Credit_Don/>}
                        <div>
                            {!show &&
                                <button className={styles.ButtonSignIn} onClick={handleShow}>Faire un don</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}