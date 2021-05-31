import React from 'react';
import styles from './commit-panel.module.scss'

export interface CommitProps {
  author?: string;
  date?: string;
  message?: string;
  sha?: string;
  url?: string;
}

const Commit: React.FC<CommitProps> = ({
  author,
  date,
  message,
  sha,
  url
}) => {
  // TODO: Consider a better way to format dates, and include timestamps.
  let formattedDate;
  if (date) {
    const dateObject = new Date(date);
    formattedDate = `${dateObject.getMonth()}-${dateObject.getDay()}-${dateObject.getFullYear()}`;
  }

  return (
    <div className={styles.commit}>
      <p>
        {author} | <i>{formattedDate}</i>
        <br/><br/>
        {sha && url ? <a href={url} target="_blank" rel="noreferrer">{sha.slice(0, 6)}</a> : null}
        <br/><br/>
        {message ? message : null}
      </p>
    </div>
  );
};

export default Commit;
