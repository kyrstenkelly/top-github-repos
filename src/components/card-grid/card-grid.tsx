import React from 'react';
import RepoCard, { RepoProps } from '../repo-card/repo-card';
import styles from './card-grid.module.scss';

interface CardGridProps {
  // An array of repo data to render as cards
  repoData: RepoProps[];

  // The selected repository
  selectedRepo?: RepoProps;

  // Method for handling repo selection
  onSelect(repo: RepoProps): void;
}

const CardGrid: React.FC<CardGridProps> = ({
  repoData,
  onSelect,
  selectedRepo
}) => {
  return (
    <div className={styles.grid_container}>
      <div className={styles.grid}>
        {repoData.map(d =>
          <RepoCard
            key={d.name}
            onClick={() => onSelect(d)}
            selected={!!selectedRepo && d.url === selectedRepo.url}
            {...d}
          />
        )}
      </div>
    </div>
  )
};

export default CardGrid;
