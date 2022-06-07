import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";
import clientPromise from "../lib/mongodb";

export async function getServerSideProps(context) {

    const client = await clientPromise;
    const db = client.db("projet_go");

    const data = await db.collection("projets").find({}).toArray();
    const projets = JSON.parse(JSON.stringify(data));

    return {
        props: {projets},
    }
}

export default function Homepage({projets}) {

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
                                    {projets.map(projets => (
                                        <div className={styles.ArrayContainer} onClick={() => {router.push('/post/projets/' + projets._id).then(r => r)}}>
                                            <h3 style={{color: "#0272fc;"}}>{projets._titre}</h3>
                                            {projets._somm}<br/>
                                            <span style={{
                                                bottom: 20,
                                                left: 20,
                                                position: "absolute"
                                            }}>{projets._fonds + " $ de " + projets._budget + " $"}</span>
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