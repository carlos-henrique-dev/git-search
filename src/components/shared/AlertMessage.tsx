const defaultMessage = "Não conseguimos processar a sua pesquisa. Tente novamente";

type Props = {
  message?: string | null;
};

export default function AlertMessage({ message = defaultMessage }: Props) {
  return (
    <p className="not-found" data-testid="alert-message">
      <i className="fas fa-exclamation-triangle"></i>
      <span>{message}</span>
    </p>
  );
}
