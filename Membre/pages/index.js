import Link from 'next/link'
import dbConnect from '../lib/dbConnect'
import Membre from '../models/Membre'

const Index = ({ membres }) => (
  <>
    {/* Create a card for each membre */}
    {membres.map((membre) => (
      <div key={membre._id}>
        <div className="card">
          
          <div className="main-content">
            <p className="membre-name">{membre.name} {membre.lastname}</p>
            <p className="description">{membre.email}</p>
            

            <div className="btn-container">
              <Link href="/[id]/edit" as={`/${membre._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${membre._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)

/* Retrieves membre(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Membre.find({})
  const membres = result.map((doc) => {
    const membre = doc.toObject()
    membre._id = membre._id.toString()
    return membre
  })

  return { props: { membres: membres } }
}

export default Index
