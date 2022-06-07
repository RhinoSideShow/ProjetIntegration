import styles from '../../../styles/Home.module.css';
import Navbar from "../../../Components/Navbar";
import {useRouter} from "next/router";

export default function AffichageProjets({projet}) {
    const router = useRouter();
    return (
        <div id="__next" className={styles.DivContainerProjet}>
            {projet && (
                <>
                    <div className={styles.DivSousContainerProjet}>
                        <Navbar/>
                        <div className={styles.DivSousSousContainerProjet}>
                            <div className={styles.DivSousSousSousContainerProjet}>
                                <div>
                                    <div className={styles.DivSousSousContainerProjetText}>
                                        <div>
                                            <h1>{projet._titre}</h1>
                                        </div>

                                        <div><p>{projet._createur + " organise ce projet."}</p><br/>
                                            <hr/>
                                        </div>

                                        <br/>
                                        <div><h3>Sommaire</h3>
                                            <p>{projet._somm}</p><br/>
                                            <hr/>
                                        </div>

                                        <br/>
                                        <div><h3>Commencement</h3>
                                            <p>{projet._debut}</p>
                                            <h3>Fin</h3>
                                            <p>{projet._fin}</p><br/>
                                            <hr/>
                                        </div>

                                        <br/>
                                        <div><h3>Créateur du projet</h3>
                                            <p>{projet._createur}</p><br/>
                                            <hr/>
                                        </div>

                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                        <br/>
                                        <div><h3>{projet._membres}</h3></div>
                                    </div>

                                    <div className={styles.DivSousSousContainerProjetDiv}>
                                        <div>
                                            <p><span className={styles.FontBleu}>{projet._fonds}$</span> récoltés sur un objectif de {projet._budget}$</p>
                                        </div>
                                        <div>
                                            {projet._status}
                                        </div>
                                        <br/>
                                        <div>
                                            <button className={styles.ButtonProjetDonation} onClick={() =>{router.push('/Credit_Don')}}>Faire une donation
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export async function getServerSideProps({params}) {

    const data = await fetch(`http://localhost:3000/api/ProjetDetails?projets_id=${params.projets}`)
    const projet = await data.json();

    return {
        props: {projet}

    }
}