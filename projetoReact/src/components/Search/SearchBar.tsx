import React, { useState } from 'react';
import { IconWrapper, Input, SearchContainer } from '../SarchProd/SearchProductsStyles';


interface SearchProductsProps {
  onFilter: (query: string) => void;
}

const SearchProducts: React.FC<SearchProductsProps> = ({ onFilter }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onFilter(value);
  };

  return (
    <SearchContainer>
      
      <Input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Pesquise uma palavra-chave"
      />
      <IconWrapper />
    </SearchContainer>
  );
};

export default SearchProducts;
