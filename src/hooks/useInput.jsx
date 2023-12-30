import React, { useState } from "react";

const useInput = (initialState) => {
  const [data, setData] = useState(initialState);

  const inputData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return [data, inputData];
};

export default useInput;
