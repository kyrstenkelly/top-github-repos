import React from 'react';

export interface RepoCardProps {
  // TODO: May need to add user/org as a prop
  repoName: string;
  repoUrl: string;
  stars: number;
}

const RepoCard: React.FC<RepoCardProps> = ({
  repoName,
  repoUrl,
  stars
}) => {
  return (
    <div>
      {repoName}
      {repoUrl}
      {stars}
    </div>
  )
};

export default RepoCard;
