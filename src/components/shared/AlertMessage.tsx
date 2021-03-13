const defaultMessage = "Não conseguimos processar a sua pesquisa. Tente novamente";

export default function AlertMessage({ message = defaultMessage }) {
  return (
    <p className="not-found">
      <i className="fas fa-exclamation-triangle"></i>
      <span>{message}</span>
    </p>
  );
}
