import { useState } from 'react'
import Button from './Button'
import './ContactForm.css'

function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(form)
    setSent(true)
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label htmlFor="name"><Nom></Nom></label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Jean François"
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="email"><E-mail></E-mail></label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ou@egzanp.com"
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Ecrire votre message..."
        />
      </div>

      <Button type="submit" variant="primary">
        Envoyer un message
      </Button>

      {sent && <p className="contact-form__success">✓ Envoyer un message (demo)</p>}
    </form>
  )
}

export default ContactForm