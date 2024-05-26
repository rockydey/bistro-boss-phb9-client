import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useEffect, useState } from "react";
import useAxoisPublic from "./useAxoisPublic";

const useMenu = () => {
  // const [ourMenu, setOurMenu] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/menu")
  //     .then((res) => {
  //       setOurMenu(res.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.error(error.message));
  // }, []);

  const axiosPublic = useAxoisPublic();

  const {
    data: ourMenu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["ourMenu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

  return [ourMenu, loading, refetch];
};

export default useMenu;
