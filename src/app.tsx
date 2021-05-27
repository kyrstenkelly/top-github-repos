import React, { useEffect, useState } from 'react';
import { CardGrid, /*RepoPanel,*/ RepoCardProps } from './components';
import { fetchTopStarredRepos } from './services/github-service';
import './app.scss';

const App: React.FC = () => {
  const [repoData, setRepoData] = useState<RepoCardProps[]>([]);
  // const [selectedRepo, setSelectedRepo] = useState<string | undefined>();

  useEffect(() => {
    fetchTopStarredRepos().then((data: RepoCardProps[]) => {
      console.log(data);
      setRepoData(data);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>⭐️ Top Github Repositories</h1>
      </header>

      <main>
        {/* TODO: Show loading state when repo data is being fetched */}
        <CardGrid repoData={repoData} />

        {/* <RepoPanel repo={selectedRepo} /> */}
      </main>
    </div>
  );
};

export default App;
