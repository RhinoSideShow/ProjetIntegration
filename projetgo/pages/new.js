import Form from '../components/Form'

const NewMembre = () => {
  const membreForm = {

    name: '',
    lastname: '',
    email: '',
    telephone: '',
    adresse: '',
    benevole: false,
    payment: false,
    
  }

  return <Form formId="add-membre-form" membreForm={membreForm} />
}

export default NewMembre
