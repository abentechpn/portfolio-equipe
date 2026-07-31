import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [erreurServeur, setErreurServeur] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (values) => {
    let newErrors = {};
    if (!values.nom.trim()) newErrors.nom = 'Le nom est obligatoire.';
    if (!values.email.trim()) newErrors.email = "L'adresse email est obligatoire.";
    else if (!emailRegex.test(values.email)) newErrors.email = "Le format de l'adresse email est invalide.";
    if (!values.message.trim()) newErrors.message = 'Le message ne peut pas être vide.';
    else if (values.message.length < 10) newErrors.message = 'Le message doit contenir au moins 10 caractères.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);
    setErrors(validate(updatedForm));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setEnvoiEnCours(true);
      setErreurServeur(null);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (response.ok) {
          setSubmitted(true);
        } else {
          setErreurServeur(result.error || 'Une erreur est survenue.');
        }
      } catch {
        setErreurServeur('Erreur de connexion au serveur.');
      } finally {
        setEnvoiEnCours(false);
      }
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>Contactez-nous</h1>

      {submitted ? (
        <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '5px' }}>
          ✅ Message envoyé avec succès !
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label htmlFor="nom">Nom complet :</label>
            <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.2rem' }} />
            {errors.nom && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.nom}</span>}
          </div>

          <div>
            <label htmlFor="email">Adresse Email :</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.2rem' }} />
            {errors.email && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.email}</span>}
          </div>

          <div>
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.2rem' }} />
            {errors.message && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.message}</span>}
          </div>

          {erreurServeur && <span style={{ color: 'red', fontSize: '0.85rem' }}>{erreurServeur}</span>}

          <button type="submit" disabled={envoiEnCours}
            style={{ padding: '0.75rem', cursor: 'pointer', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
            {envoiEnCours ? 'Envoi...' : 'Envoyer le message'}
          </button>
        </form>
      )}
    </div>
  );
}