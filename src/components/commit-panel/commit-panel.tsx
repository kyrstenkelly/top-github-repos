import React, { useEffect, useState } from 'react';
import { fetchRecentCommits } from '../../services/github-service';
import Commit, { CommitProps } from './commit';
import styles from './commit-panel.module.scss';

interface RepoPanelProps {
  /**
   * Repo name - If no repo name is provided, panel will not be shown
   */
  repo?: string;

  /**
   * Repo owner
   */
  owner?: string;
}

const RepoPanel: React.FC<RepoPanelProps> = ({ repo, owner }) => {
  const [commits, setCommits] = useState<CommitProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCommits = async () => {
      if (repo && owner) {
        setLoading(true);
        const data = await fetchRecentCommits(owner, repo);
        setCommits(data);
        setLoading(false);
      } else {
        console.log(`Could not fetch commits, either repo or owner is missing`);
      }
    }

    fetchCommits();
  }, [owner, repo]);


  if (!owner || !repo) {
    return null;
  }

  return (
    <div className={styles.panel}>
      <b>{owner}/{repo}</b>

      {loading ?
        <p>Loading...</p>
        :
        commits.map((c, i) => <Commit key={i} {...c} />)
      }
    </div>
  )
};

export default RepoPanel;
