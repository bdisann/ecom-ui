export const CardOutlineSecondary = (props) => (
  <div
    {...props}
    className={`d-flex align-items-center bg-light py-2 px-4 rounded border border-1 border-secondary ${props.className}`}
  >
    {props.children}
  </div>
);
