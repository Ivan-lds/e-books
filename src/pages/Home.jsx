import { useState } from "react";

// Links para sites de venda de e-books
const storeLinks = {
  psicanalise: "https://www.amazon.com.br/s?k=ebook+psicanalise",
  marketing: "https://www.amazon.com.br/s?k=ebook+marketing+digital",
  procrastinacao: "https://www.amazon.com.br/s?k=ebook+procrastinacao",
  ansiedade: "https://www.amazon.com.br/s?k=ebook+ansiedade",
  investimentos: "https://www.amazon.com.br/s?k=ebook+investimentos",
  guideline: "https://www.amazon.com.br/s?k=ebook+brand+guideline",
};

function Home() {
  const [currentEbook, setCurrentEbook] = useState({
    title: "Psicanálise",
    image: "/images/Psicanálise.png",
    description:
      "Já ouviu falar de psicanálise?\n\nA psicanálise é a área de investigação da mente humana. Trata-se de uma abordagem que trabalha profundamente o inconsciente, responsável pelas nossas atitudes que temos de modo automático.\nPor meio da psicanálise, se busca a origem dos sintomas mentais e emocionais e dos comportamentos.",
  });

  const formatDescription = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <section>
      <div className="s-container">
        <div className="text-container">
          <h2>
            Eleve sua experiência de leitura e conhecimento com nossos e-books
          </h2>
          <p>{formatDescription(currentEbook.description)}</p>
          <a
            href={storeLinks.psicanalise}
            target="_blank"
            rel="noopener noreferrer"
            className="buy-now-button"
          >
            Comprar Agora!
          </a>
        </div>
        <div className="img-container">
          <img src={currentEbook.image} id="img" alt={currentEbook.title} />
        </div>
      </div>
    </section>
  );
}

export default Home;
