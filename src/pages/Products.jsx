import { Link } from "react-router-dom";
import { useState } from "react";

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

function Products() {
  const ebooksData = {
    alimentacao: {
      id: "alimentacao",
      title: "Alimentação Saudável",
      image: "/images/Alimentação_Saudavel.png",
      description:
        "Neste ebook completo, você encontrará um guia prático e informativo sobre a relação entre os alimentos que consumimos e nossa saúde.",
      price: "R$ 29,90",
    },
    ansiedade: {
      id: "ansiedade",
      title: "Ansiedade",
      image: "/images/Ansiedade.png",
      description:
        'A ansiedade não precisa controlar sua vida. "Como Lidar com a Ansiedade" oferece uma abordagem holística para lidar com esse problema, combinando técnicas de mindfulness, exercícios físicos e mudanças no estilo de vida.',
      price: "R$ 34,90",
    },
    ate_o_fim: {
      id: "ate_o_fim",
      title: "Até o Fim",
      image: "/images/Ate_o_fim.png",
      description:
        "Aprenda a importância da persistência e da determinação para conquistar seus objetivos. Com este ebook, você entenderá como lidar com desafios, superar obstáculos e perseverar até o final.",
      price: "R$ 27,90",
    },
    diario: {
      id: "diario",
      title: "Diário de Ideias",
      image: "/images/Diario_Ideias.png",
      description:
        'Que tal transformar suas ideias em um ebook de sucesso? Com este guia completo, você aprenderá a transformar seu "livro de ideias" em um produto digital lucrativo e impactante.',
      price: "R$ 32,90",
    },
    guideline: {
      id: "guideline",
      title: "Guideline",
      image: "/images/Guideline.png",
      description:
        "Brand Guideline serve como um guia completo para indivíduos e empresas que buscam estabelecer e manter uma identidade de marca forte e coesa.",
      price: "R$ 39,90",
    },
    investimentos: {
      id: "investimentos",
      title: "Investimentos",
      image: "/images/Investimentos.png",
      description:
        "Descubra como fazer seu dinheiro trabalhar para você! Nosso guia completo te ensinará tudo o que precisa saber sobre investimentos, desde os conceitos básicos até estratégias avançadas.",
      price: "R$ 42,90",
    },
    marketing: {
      id: "marketing",
      title: "Marketing Digital",
      image: "/images/Marketing_Digital.png",
      description:
        "Descubra as estratégias mais eficazes de marketing digital para impulsionar seu negócio online. Este e-book abrange desde o básico até técnicas avançadas de SEO, mídias sociais e marketing de conteúdo.",
      price: "R$ 37,90",
    },
    novel: {
      id: "novel",
      title: "Novel",
      image: "/images/Novel.png",
      description:
        "Aprenda a importância da persistência e da determinação para conquistar seus objetivos. Com este ebook, você entenderá como lidar com desafios, superar obstáculos e perseverar até o final.",
      price: "R$ 29,90",
    },
    procrastinacao: {
      id: "procrastinacao",
      title: "Procrastinação",
      image: "/images/Procastinação.png",
      description:
        "Vença a procrastinação de uma vez por todas! Este guia prático oferece técnicas comprovadas para aumentar sua produtividade, estabelecer metas eficazes e criar hábitos que transformarão sua vida pessoal e profissional.",
      price: "R$ 31,90",
    },
    psicanalise: {
      id: "psicanalise",
      title: "Psicanálise",
      image: "/images/Psicanálise.png",
      description:
        "A psicanálise é a área de investigação da mente humana. Trata-se de uma abordagem que trabalha profundamente o inconsciente, responsável pelas nossas atitudes que temos de modo automático.",
      price: "R$ 36,90",
    },
  };

  const ebooksArray = Object.values(ebooksData);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEbooks, setFilteredEbooks] = useState(ebooksArray);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredEbooks(ebooksArray);
    } else {
      const filtered = ebooksArray.filter(
        (ebook) =>
          ebook.title.toLowerCase().includes(term) ||
          ebook.description.toLowerCase().includes(term)
      );
      setFilteredEbooks(filtered);
    }
  };

  return (
    <div className="products-page products-with-margin">
      <div className="products-header">
        <h2>Nossos E-books</h2>
        <div className="products-header-line"></div>
        <p>
          Explore nossa coleção de e-books sobre diversos temas. Encontre o
          conhecimento que você precisa para transformar sua vida.
        </p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar e-books..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </div>

      <div className="products-grid">
        {filteredEbooks.length > 0 ? (
          filteredEbooks.map((ebook) => (
            <div className="product-card" key={ebook.id}>
              <div className="product-image">
                <img src={ebook.image} alt={ebook.title} />
              </div>
              <div className="product-info">
                <h3>{ebook.title}</h3>
                <p className="product-description">
                  {ebook.description.length > 100
                    ? `${ebook.description.substring(0, 100)}...`
                    : ebook.description}
                </p>
                <p className="product-price">{ebook.price}</p>
                <div className="product-actions">
                  <Link to={`/ebooks/${ebook.id}`} className="view-details">
                    Ver Detalhes
                  </Link>
                  <a
                    href={storeLinks[ebook.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="buy-button"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>Nenhum e-book encontrado para "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
