import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [ourMenu, setOurMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("menu.json")
      .then((res) => {
        setOurMenu(res.data);
        setLoading(false);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return [ourMenu, loading];
};

export default useMenu;
