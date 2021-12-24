import { CardOutlineSecondary } from "../Card/Card";

export const Cart = (props) => (
  <CardOutlineSecondary
    className="d-flex align-items-center justify-content-center me-4 cursor-pointer position-relative"
    title="Checkout"
  >
    <i className="fas fa-shopping-cart text-dark py-1"></i>
    <div className="position-absolute bg-danger text-white fw-bold cart-indicator">
      {props.amount || 3}
    </div>
  </CardOutlineSecondary>
);
