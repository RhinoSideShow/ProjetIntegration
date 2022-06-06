import Head from 'next/head'
import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";


const data = [{id: 1, ProjetName: 'projetGo', sommaire: 'blablabla1', budget: '1001'},
    {id: 2, ProjetName: 'projectGo2', sommaire: 'blablabla asdf asdf  adsfa2', budget: '1002'},
    {id: 3, ProjetName: 'projectGo3', sommaire: 'blablablawqwer qwe  qweefasdf  we3', budget: '1003'},
    {id: 4, ProjetName: 'projectGo4', sommaire: 'blablabla asd gshbsadf aSD  ASDF ASFG4', budget: '1004'},
    {id: 5, ProjetName: 'projectGo5', sommaire: 'blablabla aQWERWZSDD VASDds fgasdffa5', budget: '1005'},
    {id: 5, ProjetName: 'projectGo5', sommaire: 'blablabla aQWERWZSDD VASDds fgasdffa5', budget: '1005'},
    {id: 5, ProjetName: 'projectGo5', sommaire: 'blablabla aQWERWZSDD VASDds fgasdffa5', budget: '1005'},
    {id: 5, ProjetName: 'projectGo5', sommaire: 'blablabla aQWERWZSDD VASDds fgasdffa5', budget: '1005'},
    {id: 5, ProjetName: 'projectGo5', sommaire: 'blablabla aQWERWZSDD VASDds fgasdffa5', budget: '1005'},
    {id: 5, ProjetName: 'projectGo5', sommaire: 'blablabla aQWERWZSDD VASDds fgasdffa5', budget: '1005'},
    {id: 5, ProjetName: 'projectGo5', sommaire: 'blablabla aQWERWZSDD VASDds fgasdffa5', budget: '1005'},
    {id: 6, ProjetName: 'projectGo6', sommaire: 'blablabla as dffgsdfg fa sdf asdfa s6', budget: '1006'},]


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
                            <div className={styles.DivRelative}>
                                <div className={styles.DivRelative}>
                                    <h1>Partout dans le monde, des gens collectent des fonds pour ce qui les
                                        passionne.</h1>
                                    <button className={styles.ButtonCreer}>Créer un projet</button>
                                </div>
                                <br/><br/><br/><br/>
                                <div className={styles.DivAbsolute}>
                                    {data.map(List => (
                                        <div className={styles.ArrayContainer} onClick={handleOnClick}>
                                            <h3 style={{color: "#0272fc;"}}>{List.ProjetName}</h3>
                                            {List.sommaire}<br/>
                                            <span style={{bottom:20, left:20, position:"absolute"}}>{"Montant soulevé: " + List.budget + " $"}</span>
                                        </div>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}