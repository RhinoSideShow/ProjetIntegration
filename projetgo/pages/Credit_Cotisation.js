import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useState} from "react";
import Animation_Credit_Don from "./Animation_Credit_Don";
import {useRouter} from "next/router";

export default function Credit_Cotisation() {

    const [argent, setArgent] = useState(120.0);
    const [show, setShow] = useState(false);
    const router = useRouter();

    //
    const handleOnClickPlustard = () =>{
        router.push('/Homepage').then(r => r)
    }

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
                                    <span className={styles.SpanCreditCotisation}>Cotisation Annuelle</span>&emsp;
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
                            <span>&ensp;Cotisation annuelle</span><span className={styles.SpanCreditTaxesCotisation}>Taxes&emsp;&ensp;</span>&emsp;&emsp;
                            <span className={styles.SpanCreditTaxesCotisation}>&emsp;&emsp;Montant Total</span><br/>

                            <input className={styles.InputCreditTaxes} defaultValue={argent}
                                   disabled="disabled"/>&ensp;+&ensp;
                            <input className={styles.InputCreditTaxes} defaultValue={argent * 0.15}
                                   disabled="disabled"/>&ensp;=&ensp;
                            <input className={styles.InputCreditTaxes}
                                   defaultValue={argent * 1.15.toFixed(2) + " $"} disabled="disabled"/>&ensp;
                        </div>
                    </div>
                    <div>
                        {show && <Animation_Credit_Don isDon={false} setIsDon={false}/>}
                        <div>
                            {!show &&
                                <button className={styles.ButtonDon} onClick={handleShow}>Payer {argent * 1.15.toFixed(2) + " $"}</button>}
                            {!show && <p><a className={styles.DivPlusTard} onClick={handleOnClickPlustard}>Payer plus tard</a></p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}