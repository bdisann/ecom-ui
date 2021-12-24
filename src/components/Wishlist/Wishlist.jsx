import { CardOutlineSecondary } from "../Card/Card";

export const Wishlist = (props) => (
  <CardOutlineSecondary
    className="d-flex align-items-center justify-content-center me-4 cursor-pointer position-relative"
    title="Checkout"
  >
    <i className="fas fa-heart text-dark py-1"></i>
    <div className="position-absolute bg-danger text-white fw-bold cart-indicator">
      {props.amount || 8}
    </div>
  </CardOutlineSecondary>
);
