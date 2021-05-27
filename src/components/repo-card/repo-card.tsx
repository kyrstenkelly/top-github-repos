import React from 'react';

export interface RepoCardProps {
  // TODO: May need to add user/org as a prop
  name: string;
  url: string;
  stars: number;
}

const RepoCard: React.FC<RepoCardProps> = ({
  name,
  url,
  stars
}) => {
  return (
    <div>
      {name}
      {url}
      {stars}
    </div>
  )
};

export default RepoCard;
