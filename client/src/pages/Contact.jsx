import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [statut, setStatut] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatut('envoi');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setStatut('succes');
        setFormData({ nom: '', email: '', message: '' });
      } else {
        setStatut(data.error || 'erreur');
      }
    } catch {
      setStatut('erreur');
    }
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>

      {statut === 'envoi' && <p>Envoi en cours...</p>}
      {statut === 'succes' && <p>Message envoyé avec succès !</p>}
      {statut && statut !== 'envoi' && statut !== 'succes' && <p>Erreur : {statut}</p>}
    </div>
  );
}

export default Contact;