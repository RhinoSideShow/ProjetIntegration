import Head from 'next/head'
import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";


const data = [{id: 1, ProjetName: 'projetGo'},
    {id: 2, ProjetName: 'projectGo2'},
    {id: 3, ProjetName: 'projectGo3'},
    {id: 4, ProjetName: 'projectGo4'},
    {id: 5, ProjetName: 'projectGo5'},
    {id: 6, ProjetName: 'projectGo6'},]


const handleOnClick = () => {
    console.log("click")

}

export default function Homepage() {

    const router = useRouter();

    return (
        <>
            <div id="__next" className={styles.DivContainerHome}>
                <Navbar/>
                <div className={styles.DivContainer}>
                    <div className={styles.DivSousContainerHome}>
                        <div className={styles.DivSousSousContainerHome}>

                            {data.map(List => (
                                <div className={styles.ArrayContainer}
                                     onClick={handleOnClick}>{List.ProjetName}</div>))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}