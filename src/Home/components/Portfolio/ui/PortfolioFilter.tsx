import React from 'react';
import FilterButton from './button';

interface PortfolioFilterProps {
  categories?: string[];
  selected: string | null;
  onChange: (category: string | null) => void;
}

const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  categories = [],
  selected,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <FilterButton active={selected === null} onClick={() => onChange(null)}>
        ทั้งหมด
      </FilterButton>
      {categories.map(category => (
        <FilterButton
          key={category}
          active={selected === category}
          onClick={() => onChange(category)}
        >
          {category}
        </FilterButton>
      ))}
    </div>
  );
};

export default PortfolioFilter;
