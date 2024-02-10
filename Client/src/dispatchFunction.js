export  const reuseDispatch = (type,data) => {
    return {
      type: type,
      payload: data,
    };
  };