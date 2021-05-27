import React from 'react';
import RepoCard, { RepoCardProps } from '../repo-card/repo-card';

interface CardGridProps {
  // An array of repo data to render as cards
  repoData: RepoCardProps[];
}

const CardGrid: React.FC<CardGridProps> = ({ repoData }) => {
  return (
    <div>
      {repoData.map(d => <RepoCard key={d.name} {...d} />)}
    </div>
  )
};

export default CardGrid;
