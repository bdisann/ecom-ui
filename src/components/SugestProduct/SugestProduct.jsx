import { ContainerFluid } from "../Container/Container";

const staticSugests = ["Oppo", "Samsung", "Inflix", "Iphone", "Vivo", "Xiaomi"];

export const SugestProductHeader = () => (
  <div className="bg-white pb-2 pt-1 header-shadow ">
    <ContainerFluid>
      <div className="d-flex align-items-center justify-content-evenly">
        {staticSugests.map((product, index) => (
          <a
            className="text-dark text-decoration-none cursor-pointer"
            key={index.toString()}
          >
            {product}
          </a>
        ))}
      </div>
    </ContainerFluid>
  </div>
);
