/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [estado, setEstado] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  // a
  useEffect(() => {
    solicitarAPI();
  }, [url]);

  const solicitarAPI = async () => {
    const resp = await fetch(url);

    setEstado({ data: null, isLoading: true, hasError: false, error: null });

    await new Promise((resolve) => setTimeout(resolve, 750));

    if (!resp.ok) {
      setEstado({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          status: resp.status,
          statusText: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();

    setEstado({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
  };

  return {
    myEstado: estado.data,
    isLoading: estado.isLoading,
  };
};
