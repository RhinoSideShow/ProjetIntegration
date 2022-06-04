import React, {useState} from 'react';
import styles from '../styles/Home.module.css';
import {useRouter} from "next/router";


const data = [{id: 1, ProjetName: 'projetGo'},
    {id: 2, ProjetName: 'projectGo2'},
    {id: 3, ProjetName: 'projectGo3'},
    {id: 4, ProjetName: 'projectGo4'},
    {id: 5, ProjetName: 'projectGo5'}]


const handleOnClick = () => {
    console.log("click")

}






export default function Homepage() {

    const router = useRouter();

    return (
        <div id="__next" className={styles.DivParent}>
            <img src="/Image_Login/logoMoon.png" className={styles.Logo}/><br/>
            <h3 className={styles.TitleProject}>Selection de projets </h3>
            <div className={styles.DivChild1}>
                <div >
                    <h3>Project GO</h3>
                    <div className={styles.DivBoutonSignIn}>
                    <button className={styles.ButtonLogin} onClick={() => router.push('/Sign_In')}>
                        Login
                    </button></div>
                </div>
            </div>

            <div className={styles.DivChild2}>
                {data.map(List => (
                    <div className={styles.ArrayContainer} onClick={handleOnClick}>{List.ProjetName}</div>))}
                <div className={styles.DivChild3}>
                <button className={styles.ButtonLogin}>
                    Faire Donation
                </button>
                <button className={styles.ButtonLogin}>
                    Creer projet
                </button>
                </div>
            </div>
        </div>
    );
}

