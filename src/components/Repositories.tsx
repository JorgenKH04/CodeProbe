export function Repositories() {
  return (
    <div>
      <RepositoryCard />
    </div>
  );
}

function RepositoryCard() {
  return (
    <div>
      <h1>Repo-name</h1>
      <h3>Sub heading/description</h3>
      <div>
        <p>top language</p>
        <p>stars</p>
        <p>forks</p>
        <p>watchers? (mby)</p>
        <p>license? (mby)</p>
      </div>
    </div>
  );
}
