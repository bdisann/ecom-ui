export const Container = (props) => (
  <div className={`${props.className} container`}>{props.children}</div>
);

export const ContainerFluid = (props) => (
  <div className={`${props.className} container-fluid`}>{props.children}</div>
);
