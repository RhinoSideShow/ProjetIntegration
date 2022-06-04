import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Animation_Credit_Don() {

    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState(6);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if(counter === 0)
            router.push('/').then(r => r);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div>
            <div style={show === true ? {display: 'none'} : {display: 'inline'}}>
                <Head>
                    <title>ProjetGo</title>
                </Head>
                <div className={styles.DivLoading}>
                    <div className={styles.Loading}/>
                </div>
            </div>
            <div style={show === false ? {display: 'none'} : {display: 'inline'}}>
                <div className={styles.DivMerci}>
                    <h1>Merci pour votre donation.</h1>
                    <div>
                        <img src="/Image_Credit/Merci.jpg"/>
                    </div><br/><br/>
                    <div>
                        <h3>Redirection dans {counter}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}