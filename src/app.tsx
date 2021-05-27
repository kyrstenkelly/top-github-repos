import React, { useState } from 'react';
import { CardGrid, RepoPanel } from './components';
import './app.scss';

const App: React.FC = () => {
  // Fetch data
  const [selectedRepo, setSelectedRepo] = useState<string | undefined>();

  return (
    <div className="App">
      <header>
        <h1>⭐️ Top Github Repositories</h1>
      </header>

      <main>
        <CardGrid repoData={[]} />

        <RepoPanel repo={selectedRepo} />
      </main>
    </div>
  );
};

export default App;
