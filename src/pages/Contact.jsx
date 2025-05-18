import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="contato">
      <div className="contato-container">
        <h2 className="preencher-forms">Entre em Contato</h2>
        <div className="preencher-forms--sublinhado"></div>

        <p className="form-description">
          Preencha o formulário abaixo para entrar em contato conosco. Teremos
          prazer em responder suas dúvidas.
        </p>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                className="form-input"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                className="form-input"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="tel"
                className="form-input"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                name="subject"
                placeholder="Assunto"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              className="form-input"
              name="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
