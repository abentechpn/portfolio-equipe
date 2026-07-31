import ContactForm from '../components/ContactForm'

function Contact() {
  const handleSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Message envoyé avec succès !');
      } else {
        alert(result.error || 'Une erreur est survenue.');
      }
    } catch {
      alert('Erreur de connexion au serveur.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contactez-nous</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default Contact