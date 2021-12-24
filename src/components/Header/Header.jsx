import { ContainerFluid } from "../Container/Container";

import Logo from "../../assets/images/logo.png";
import { CardOutlineSecondary } from "../Card/Card";
import { Cart } from "../Cart/Cart";
import { Wishlist } from "../Wishlist/Wishlist";
import { TopInfo } from "../TopInfo/TopInfo";

export const Header = () => {
  return (
    <>
      <TopInfo />
      <div className="bg-white">
        <ContainerFluid className="d-flex align-items-center justify-content-between py-3 header-shadow">
          <div className="d-flex align-items-center cursor-pointer">
            <img src={Logo} className="logo-icon me-4" />

            <p className="d-none d-md-block text-dark m-0 fw-bold fs-4">
              BS Ecommerce
            </p>
          </div>
          <div className="d-block d-md-none mb-3"></div>
          <CardOutlineSecondary className="search-header-card">
            <label htmlFor="search">
              <i className="fas fa-search text-dark me-4"></i>
            </label>

            <input
              type="text"
              id="search"
              className="bg-transparent outline-none border-0"
              placeholder="Search product name..."
            />
          </CardOutlineSecondary>
          <div className="d-block d-lg-none me-4"></div>
          <div className="d-flex align-items-center">
            <Wishlist />
            <Cart />
            <CardOutlineSecondary className="cursor-pointer" title="User">
              <i className="fas fa-user text-dark py-1"></i>
            </CardOutlineSecondary>
          </div>
        </ContainerFluid>
      </div>
    </>
  );
};
