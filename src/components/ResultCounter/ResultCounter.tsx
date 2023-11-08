import React from 'react';

interface ResultCounterProps {
  filteredCount: number;
  totalCount: number;
}

const ResultCounter: React.FC<ResultCounterProps> = ({ filteredCount, totalCount }) => {
  return (
    <div className="text-sm text-cozy-ochre mb-4">
      {filteredCount} out of {totalCount} apartments match your criteria
    </div>
  );
};

export default ResultCounter;
