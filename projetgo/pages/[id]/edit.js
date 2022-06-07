import { useRouter } from 'next/router'
import useSWR from 'swr'
import Form from '../../components/Form'

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

const EditMembre = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: membre, error } = useSWR(id ? `/api/membres/${id}` : null, fetcher)

  if (error) return <p>Failed to load</p>
  if (!membre) return <p>Loading...</p>

  const membreForm = {
    name: membre.name,
    lastname: membre.lastname,
    email: membre.email,
    telephone: membre.telephone,
    adresse: membre.adresse,
    benevole: membre.benevole,
    payment: membre.payment,
    
  }

  return <Form formId="edit-membre-form" membreForm={membreForm} forNewMembre={false} />
}

export default EditMembre
