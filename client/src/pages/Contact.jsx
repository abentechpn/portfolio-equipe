import { useState } from 'react';
import { useLang } from '../context/LangContext';

export default function Contact() {
  const { t } = useLang();
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [erreurs, setErreurs] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [erreurServeur, setErreurServeur] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validerFormulaire = (values) => {
    const nouvellesErreurs = {};
    if (!values.nom.trim()) nouvellesErreurs.nom = t.contact.errors.nameRequired;
    if (!values.email.trim()) nouvellesErreurs.email = t.contact.errors.emailRequired;
    else if (!emailRegex.test(values.email)) nouvellesErreurs.email = t.contact.errors.emailInvalid;
    if (!values.message.trim()) nouvellesErreurs.message = t.contact.errors.messageRequired;
    else if (values.message.length < 10) nouvellesErreurs.message = t.contact.errors.messageMinLength;
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
          setErreurServeur(result.error || t.contact.errors.genericServer);
        }
      } catch {
        setErreurServeur(t.contact.errors.connection);
      } finally {
        setEnvoiEnCours(false);
      }
    }
  };

  return (
    <section aria-labelledby="contact-titre">
      <h1 id="contact-titre">{t.contact.title}</h1>
      <p>{t.contact.subtitle}</p>

      {submitted ? (
        <div role="status" aria-live="polite">
          <p>{t.contact.successMessage}</p>
        </div>
      ) : (
        <form className="formulaire-contact" onSubmit={handleSubmit} noValidate>
          <div className="champ">
            <label htmlFor="nom">{t.contact.nameLabel}</label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder={t.contact.namePlaceholder}
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
            <label htmlFor="email">{t.contact.emailLabel}</label>
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
            <label htmlFor="message">{t.contact.messageLabel}</label>
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
            {envoiEnCours ? t.contact.submitting : t.contact.submit}
          </button>
        </form>
      )}
    </section>
  );
}