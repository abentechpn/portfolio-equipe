import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [erreurs, setErreurs] = useState({});
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

  const validerFormulaire = () => {
    const nouvellesErreurs = {};

    if (!formData.nom.trim()) {
      nouvellesErreurs.nom = "Le nom est requis.";
    }

    if (!formData.email.trim()) {
      nouvellesErreurs.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nouvellesErreurs.email = "Le format de l'email est invalide.";
    }

    if (!formData.message.trim()) {
      nouvellesErreurs.message = "Le message est requis.";
    }

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  };

  const validerFormulaire = () => {
    const nouvellesErreurs = {};

    if (!formData.nom.trim()) {
      nouvellesErreurs.nom = "Le nom est requis.";
    }

    if (!formData.email.trim()) {
      nouvellesErreurs.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nouvellesErreurs.email = "Le format de l'email est invalide.";
    }

    if (!formData.message.trim()) {
      nouvellesErreurs.message = "Le message est requis.";
    }

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (!validerFormulaire()) {
      return;
    }

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
          setErreurs({});
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
    <section aria-labelledby="contact-titre">
      <h1 id="contact-titre">Contact</h1>
      <p>Une question, une proposition ? Écrivez-nous.</p>

      <form className="formulaire-contact" onSubmit={handleSubmit} noValidate>
        <div className="champ">
          <label htmlFor="nom">Entrez votre nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder="Ex : Marie Dupont"
            value={formData.nom}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!erreurs.nom}
            aria-describedby={erreurs.nom ? "nom-erreur" : undefined}
          />
          {erreurs.nom && (
            <p id="nom-erreur" className="message-erreur" role="alert">
              {erreurs.nom}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
          ></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>

      <div role="status" aria-live="polite">
        {statut === 'envoi' && <p>Envoi en cours...</p>}
        {statut === 'succes' && <p>Message envoyé avec succès !</p>}
        {statut && statut !== 'envoi' && statut !== 'succes' && <p>Erreur : {statut}</p>}
      </div>
    </div>
  );

}