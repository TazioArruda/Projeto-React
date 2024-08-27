import  { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Container, PlansWrapper, Title } from "./PredicoesStyles";
import SearchBar from "../../components/Search/SearchBar";
import Card from "../../components/Card/Card";

const Predicoes = () => {
  const [query, setQuery] = useState('');

  // Dados dos cards vindos dinamicamente
  const cards = [
    { id: 1, title: 'Hotel ibis' },
    { id: 2, title: 'Hotel Tropical' },
    { id: 3, title: 'Pousada Azul' },
    { id: 4, title: 'Hotel ibis' },
    // Outros cards podem ser adicionados dinamicamente
  ];

  // Filtra os cards com base na query
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleFilter = (query: string) => {
    setQuery(query);
  };

  return (
    <Container>
      <Title>Predições</Title>
      <SearchBar onFilter={handleFilter} />

      <PlansWrapper>
        {filteredCards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </PlansWrapper>
      <div className="bg-whit p-6 rounded-b-2xl">
        <Outlet />
      </div>
    </Container>
  );
};

export default Predicoes;
