import React from 'react';

interface RepoPanelProps {
  /**
   * Repo name - If no repo name is provided, panel will not be shown
   */
  repo?: string;
}

const RepoPanel: React.FC<RepoPanelProps> = ({ repo }) => {
  // TODO: Fetch commit data for repo

  return (
    <div>
      {repo}
    </div>
  )
};

export default RepoPanel;
