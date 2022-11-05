import Navigation from "./Navigation";

const Layout = (props: { children: JSX.Element }) => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
};

export default Layout;
