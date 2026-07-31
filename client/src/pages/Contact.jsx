import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [erreurs, setErreurs] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [erreurServeur, setErreurServeur] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validerFormulaire = (values) => {
    const nouvellesErreurs = {};
    if (!values.nom.trim()) nouvellesErreurs.nom = "Le nom est requis.";
    if (!values.email.trim()) nouvellesErreurs.email = "L'email est requis.";
    else if (!emailRegex.test(values.email)) nouvellesErreurs.email = "Le format de l'email est invalide.";
    if (!values.message.trim()) nouvellesErreurs.message = "Le message est requis.";
    else if (values.message.length < 10) nouvellesErreurs.message = "Le message doit contenir au moins 10 caracteres.";
    return nouvellesErreurs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);
    setErreurs(validerFormulaire(updatedForm));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nouvellesErreurs = validerFormulaire(formData);
    setErreurs(nouvellesErreurs);

    if (Object.keys(nouvellesErreurs).length === 0) {
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
      <p>Une question, une proposition ? Ecrivez-nous.</p>

      {submitted ? (
        <div role="status" aria-live="polite">
          <p>Message envoye avec succes !</p>
        </div>
      ) : (
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

          <div className="champ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!erreurs.email}
              aria-describedby={erreurs.email ? "email-erreur" : undefined}
            />
            {erreurs.email && (
              <p id="email-erreur" className="message-erreur" role="alert">
                {erreurs.email}
              </p>
            )}
          </div>

          <div className="champ">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!erreurs.message}
              aria-describedby={erreurs.message ? "message-erreur" : undefined}
            ></textarea>
            {erreurs.message && (
              <p id="message-erreur" className="message-erreur" role="alert">
                {erreurs.message}
              </p>
            )}
          </div>

          {erreurServeur && (
            <p className="message-erreur" role="alert">{erreurServeur}</p>
          )}

          <button type="submit" disabled={envoiEnCours}>
            {envoiEnCours ? 'Envoi...' : 'Envoyer'}
          </button>
        </form>
      )}
    </section>
  );
}