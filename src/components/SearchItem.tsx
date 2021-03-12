type Props = {
  todo: any;
};

function SearchItem({ todo }: Props) {
  const { id, title, completed } = todo;

  const h1 = <h1>{title}</h1>;
  const text = completed ? <span>{title}</span> : h1;

  return <div data-testid="searchItem">{text}</div>;
}

export default SearchItem;
