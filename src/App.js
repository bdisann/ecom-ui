import { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { useTitle } from "./hooks/useTitle";

function App() {
  const [title, setTitle] = useTitle();

  useEffect(() => {
    setTitle("BS | Ecommerce");
  }, [setTitle]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
