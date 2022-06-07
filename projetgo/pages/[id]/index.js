import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from '../../lib/dbConnect'
import Membre from '../../models/Membre'

/* Allows you to view membre card info and delete membre card*/
const MembrePage = ({ membre }) => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const handleDelete = async () => {
    const membreID = router.query.id

    try {
      await fetch(`/api/membres/${membreID}`, {
        method: 'Delete',
      })
      router.push('/')
    } catch (error) {
      setMessage('Failed to delete the membre.')
    }
  }

  let { isBenevole } = membre.benevole;
  

  return (
    <div key={membre._id}>
      <div className="card">
       
        <div className="main-content">
          <h1>Bienvenue !</h1>
          <p className="membre-name">{membre.name} {membre.lastname}</p>
          <p className="description">{membre.email}</p>
          <p className="description">Adresse: {membre.adresse}</p>
          
          {isBenevole ? <button>Pas Benevole</button> : <button>Benevole</button>}
         

          <div className="btn-container">
            <Link href="/[id]/edit" as={`/${membre._id}/edit`}>
              <button className="btn edit">Edit</button>
            </Link>
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const membre = await Membre.findById(params.id).lean()
  membre._id = membre._id.toString()

  return { props: { membre } }
}

export default MembrePage
