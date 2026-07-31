import { useState } from 'react';

export default function Contact() {
  // 1. États pour les champs du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  // 2. États pour les erreurs et les messages de confirmation
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Expression régulière pour la validation dynamique du format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Fonction de validation dynamique globale
  const validate = (values) => {
    let newErrors = {};

    if (!values.nom.trim()) {
      newErrors.nom = 'Le nom est obligatoire.';
    }

    if (!values.email.trim()) {
      newErrors.email = "L'adresse email est obligatoire.";
    } else if (!emailRegex.test(values.email)) {
      newErrors.email = "Le format de l'adresse email est invalide.";
    }

    if (!values.message.trim()) {
      newErrors.message = 'Le message ne peut pas être vide.';
    } else if (values.message.length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères.';
    }

    return newErrors;
  };

  // Gestion des changements dans les champs de saisie
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    // Validation dynamique en temps réel lors de la frappe
    const validationErrors = validate(updatedForm);
    setErrors(validationErrors);
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    // S'il n'y a aucune erreur, la validation client est un succès !
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);

      // Remarque : La transmission au backend via POST /api/contact
      // sera liée avec la partie de ton coéquipier Benchinaud Alfred !
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>Contactez-nous</h1>

      {submitted ? (
        <div
          style={{
            padding: '1rem',
            background: '#d4edda',
            color: '#155724',
            borderRadius: '5px'
          }}
        >
          ✅ Validation réussie ! Votre message est prêt à être envoyé au serveur.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {/* Champ Nom */}
          <div>
            <label htmlFor="nom">Nom complet :</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: '0.2rem'
              }}
            />
            {errors.nom && (
              <span style={{ color: 'red', fontSize: '0.85rem' }}>
                {errors.nom}
              </span>
            )}
          </div>

          {/* Champ Email */}
          <div>
            <label htmlFor="email">Adresse Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: '0.2rem'
              }}
            />
            {errors.email && (
              <span style={{ color: 'red', fontSize: '0.85rem' }}>
                {errors.email}
              </span>
            )}
          </div>

          {/* Champ Message */}
          <div>
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: '0.2rem'
              }}
            />
            {errors.message && (
              <span style={{ color: 'red', fontSize: '0.85rem' }}>
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            style={{
              padding: '0.75rem',
              cursor: 'pointer',
              background: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Envoyer le message
          </button>
        </form>
      )}
    </div>
  );
}