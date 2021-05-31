import React, { useEffect, useState } from 'react';
import { CardGrid, CommitPanel, RepoProps } from './components';
import { fetchTopStarredRepos } from './services/github-service';
import styles from './app.module.scss';


const App: React.FC = () => {
  const [repoData, setRepoData] = useState<RepoProps[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<RepoProps | undefined>();

  useEffect(() => {
    const fetchRepoData = async () => {
      const data = await fetchTopStarredRepos();
      setRepoData(data);
      setSelectedRepo(data[0]);
    }

    fetchRepoData();
  }, []);

  return (
    <div className={styles.app} data-testid='app'>
      <header className={styles.app__header} data-testid='header'>
        <h1>⭐️ Top Github Repositories</h1>
      </header>

      <main className={styles.app__main}>
        {repoData.length ?
          <>
            <CardGrid
              repoData={repoData}
              selectedRepo={selectedRepo}
              onSelect={(r) => setSelectedRepo(r)}
            />

            <CommitPanel repo={selectedRepo?.name} owner={selectedRepo?.owner} />
          </>
          :
          <div className={styles.app__loading}>Loading...</div>
        }

      </main>
    </div>
  );
};

export default App;
