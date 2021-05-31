import React from 'react';
import styles from './repo-card.module.scss';

export interface RepoProps {
  name: string;
  owner: string;
  url: string;
  stars: number;
}

interface RepoCardProps extends RepoProps {
  selected: boolean;
  onClick(repo: RepoProps): void;
}

const RepoCard: React.FC<RepoCardProps> = ({
  name,
  owner,
  url,
  stars,
  selected,
  onClick
}) => {
  return (
    <div className={styles.card} data-testid={name}>
      <div className={styles.card__header}>
        <a
          className={styles.card__header_title}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {owner}/{name}
        </a>
      </div>

      <div>
        {/* TODO: Format number */}
        <div>
          ⭐️  {stars}
        </div>

        <button
          className={styles.card__button}
          onClick={() => onClick({ name, owner, url, stars})}
        >
          View recent commits
        </button>
      </div>
    </div>
  )
};

export default RepoCard;
