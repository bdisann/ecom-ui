import { useEffect, useState } from "react";

export const useTitle = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    window.document.title = title;
  }, [title]);

  return [title, setTitle];
};
