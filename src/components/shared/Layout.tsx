type Props = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: Props) {
  return <div className="container">{children}</div>;
}

export default Layout;
