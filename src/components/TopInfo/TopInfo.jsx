import { ContainerFluid } from "../Container/Container";

export const TopInfo = () => (
  <div className="bg-light py-1">
    <ContainerFluid className="d-flex align-items-center justify-content-end">
      <div className="d-flex align-items-center">
        <small className="text-dark m-0 me-3 fs-6 fw-lighter cursor-pointer">
          About
        </small>
        <small className="text-dark m-0 fs-6 fw-lighter cursor-pointer">
          Term & Service
        </small>
      </div>
    </ContainerFluid>
  </div>
);
