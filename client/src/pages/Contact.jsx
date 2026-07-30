import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contactez-nous</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ContactForm onSubmit={(data) => console.log('form data:', data)} />
      </div>
    </div>
  )
}

export default Contact