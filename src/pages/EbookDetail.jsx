import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Links para sites de venda de e-books
const storeLinks = {
  alimentacao: "https://www.amazon.com.br/s?k=ebook+alimentacao+saudavel",
  ansiedade: "https://www.amazon.com.br/s?k=ebook+ansiedade",
  ate_o_fim: "https://www.kobo.com/br/pt/search?query=perseveranca",
  diario: "https://www.amazon.com.br/s?k=ebook+diario+ideias",
  guideline: "https://www.amazon.com.br/s?k=ebook+brand+guideline",
  investimentos: "https://www.amazon.com.br/s?k=ebook+investimentos",
  marketing: "https://www.amazon.com.br/s?k=ebook+marketing+digital",
  novel: "https://www.kobo.com/br/pt/search?query=novel",
  procrastinacao: "https://www.amazon.com.br/s?k=ebook+procrastinacao",
  psicanalise: "https://www.amazon.com.br/s?k=ebook+psicanalise",
};

// Dados dos e-books
const ebooksData = {
  alimentacao: {
    title: "Alimentação_Saudavel",
    image: "/images/Alimentação_Saudavel.png",
    description:
      "Neste ebook completo, você encontrará um guia prático e informativo sobre a relação entre os alimentos que consumimos e nossa saúde.",
  },
  ansiedade: {
    title: "Ansiedade",
    image: "/images/Ansiedade.png",
    description:
      'A ansiedade não precisa controlar sua vida. "Como Lidar com a Ansiedade" oferece uma abordagem holística para lidar com esse problema, combinando técnicas de mindfulness, exercícios físicos e mudanças no estilo de vida.',
  },
  ate_o_fim: {
    title: "Ate o Fim",
    image: "/images/Ate_o_fim.png",
    description:
      "Aprenda a importância da persistência e da determinação para conquistar seus objetivos. Com este ebook, você entenderá como lidar com desafios, superar obstáculos e perseverar até o final.",
  },
  diario: {
    title: "Diário de Ideias",
    image: "/images/Diario_Ideias.png",
    description:
      'Que tal transformar suas ideias em um ebook de sucesso? Com este guia completo, você aprenderá a transformar seu "livro de ideias" em um produto digital lucrativo e impactante.',
  },
  guideline: {
    title: "Guideline",
    image: "/images/Guideline.png",
    description:
      "Brand Guideline serve como um guia completo para indivíduos e empresas que buscam estabelecer e manter uma identidade de marca forte e coesa. Desde a definição dos valores da marca até a criação de ativos visuais, este livro fornece estratégias essenciais e dicas práticas para criar uma marca que ressoe com seu público e se destaca em um mercado lotado.",
  },
  investimentos: {
    title: "Investimentos",
    image: "/images/Investimentos.png",
    description:
      "Descubra como fazer seu dinheiro trabalhar para você! Nosso guia completo te ensinará tudo o que precisa saber sobre investimentos, desde os conceitos básicos até estratégias avançadas. Aprenda a diversificar sua carteira, minimizar riscos e alcançar seus objetivos financeiros.",
  },
  marketing: {
    title: "Marketing Digital",
    image: "/images/Marketing_Digital.png",
    description:
      "Descubra as estratégias mais eficazes de marketing digital para impulsionar seu negócio online. Este e-book abrange desde o básico até técnicas avançadas de SEO, mídias sociais e marketing de conteúdo.",
  },
  novel: {
    title: "Novel",
    image: "/images/Novel.png",
    description:
      "Aprenda a importância da persistência e da determinação para conquistar seus objetivos. Com este ebook, você entenderá como lidar com desafios, superar obstáculos e perseverar até o final.",
  },
  procrastinacao: {
    title: "Procrastinação",
    image: "/images/Procastinação.png",
    description:
      "Vença a procrastinação de uma vez por todas! Este guia prático oferece técnicas comprovadas para aumentar sua produtividade, estabelecer metas eficazes e criar hábitos que transformarão sua vida pessoal e profissional.",
  },
  psicanalise: {
    title: "Psicanálise",
    image: "/images/Psicanálise.png",
    description:
      "A psicanálise é a área de investigação da mente humana. Trata-se de uma abordagem que trabalha profundamente o inconsciente, responsável pelas nossas atitudes que temos de modo automático. Por meio da psicanálise, se busca a origem dos sintomas mentais e emocionais e dos comportamentos.",
  },
};

function EbookDetail() {
  const { id } = useParams();
  const [ebook, setEbook] = useState(null);

  useEffect(() => {
    // Buscar dados do e-book com base no ID
    if (ebooksData[id]) {
      setEbook(ebooksData[id]);
    }
  }, [id]);

  if (!ebook) {
    return <div>E-book não encontrado</div>;
  }

  return (
    <section>
      <div className="s-container">
        <div className="text-container">
          <h2>
            Eleve sua experiência de leitura e conhecimento com nossos e-books
          </h2>
          <p>{ebook.description}</p>
          <a
            href={storeLinks[id]}
            target="_blank"
            rel="noopener noreferrer"
            className="buy-now-button"
          >
            Comprar Agora!
          </a>
        </div>
        <div className="img-container">
          <img
            className="img-ebooks"
            src={ebook.image}
            id="img"
            alt={ebook.title}
          />
        </div>
      </div>
    </section>
  );
}

export default EbookDetail;
