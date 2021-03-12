type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function PublicRoute({ children }: Props) {
  return <>{children}</>;
}
