const module = (function() {
  const privateFunction = (...args) => {
    // private
  };

  return {
    publicFunction: (...args) => {
      privateFunction(...args);
    }
  };
})();

export default module;
