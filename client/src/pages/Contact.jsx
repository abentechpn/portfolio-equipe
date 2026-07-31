import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [erreurs, setErreurs] = useState({});
  const [statut, setStatut] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    } else if (formData.message.trim().length < 10) {
      nouvellesErreurs.message = "Le message doit contenir au moins 10 caractères.";
    }

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validerFormulaire()) {
      return;
    }

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
        setErreurs({});
      } else {
        setStatut(data.error || 'erreur');
      }
    } catch {
      setStatut('erreur');
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

        <div className="champ">
          <label htmlFor="email">Entrez votre email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ex : marie.dupont@email.com"
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
          <label htmlFor="message">Votre message</label>
          <p id="message-aide" className="texte-aide">
            Décrivez votre demande, projet ou question en quelques phrases.
          </p>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Ex : Je souhaite en savoir plus sur vos services de développement web..."
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!erreurs.message}
            aria-describedby={
              erreurs.message ? "message-erreur message-aide" : "message-aide"
            }
          ></textarea>
          {erreurs.message && (
            <p id="message-erreur" className="message-erreur" role="alert">
              {erreurs.message}
            </p>
          )}
        </div>

        <button type="submit" disabled={statut === 'envoi'}>
          {statut === 'envoi' ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>

      <div role="status" aria-live="polite" className="statut-formulaire">
        {statut === 'succes' && <p>Message envoyé avec succès !</p>}
        {statut && statut !== 'envoi' && statut !== 'succes' && (
          <p>Erreur : {statut}</p>
        )}
      </div>
    </section>
  );
}