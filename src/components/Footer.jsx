import { Link } from 'react-router-dom'

function Footer() {
  const ebooks = [
    {
      id: "alimentacao",
      image: "/images/Alimentação_Saudavel.png",
      alt: "Alimentação Saudável",
    },
    { id: "ansiedade", image: "/images/Ansiedade.png", alt: "Ansiedade" },
    { id: "ate_o_fim", image: "/images/Ate_o_fim.png", alt: "Ate o Fim" },
    {
      id: "diario",
      image: "/images/Diario_Ideias.png",
      alt: "Diário de Ideias",
    },
    { id: "guideline", image: "/images/Guideline.png", alt: "Guideline" },
    {
      id: "investimentos",
      image: "/images/Investimentos.png",
      alt: "Investimentos",
    },
    {
      id: "marketing",
      image: "/images/Marketing_Digital.png",
      alt: "Marketing Digital",
    },
    { id: "Novel", image: "/images/Novel.png", alt: "Novel" },
    {
      id: "procrastinacao",
      image: "/images/Procastinação.png",
      alt: "Procrastinação",
    },
    { id: "psicanalise", image: "/images/Psicanálise.png", alt: "Psicanálise" },
  ];

  return (
    <footer>
      {ebooks.map((ebook) => (
        <div key={ebook.id}>
          <Link to={`/ebooks/${ebook.id}`}>
            <img src={ebook.image} alt={ebook.alt} />
          </Link>
        </div>
      ))}
    </footer>
  )
}

export default Footer

