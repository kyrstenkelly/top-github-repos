# Top Github Repos

App that shows the top 100 starred Github repositories, and recent commit data for each. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Design
Read more about my design process here in the [Design doc](./docs/DESIGN.md).

## Contributing
Interested in contributing? Read the [Contribution docs](./docs/CONTRIBUTING.md). 

### Quick Start

```bash
git clone https://github.com/kyrstenkelly/top-github-repos.git
cd top-github-repos
npm install
npm start
```

## TODO

**Unfinished tasks:**

- Filter commit messages by dates
  - Currently just returning the most recent 100 commits
- More thorough unit testing

**If I had more time:**

- UI
  - Nicer styling for commit panel
  - Commit panel slide in/out if there's a repo selected
  - Highlight selected repo card when showing commits on right
- Better error states - show user messages when data is missing/something went wrong
- Mobile testing and responsiveness adjustments
- Investigate the test warning `Can't perform a React state update on an unmounted component` 



