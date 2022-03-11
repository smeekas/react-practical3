const getDate = (type) => {
  switch (type) {
    case "weekday":
      return new Date().toLocaleDateString("en-US", { weekday: "long" });
    case "month":
      return new Date().toLocaleDateString("en-US", { month: "short" });
    case "year":
      return new Date().toLocaleDateString("en-US", { year: "numeric" });
    case "day":
      return new Date().getDate();
    case "currentTime":
      return new Date();
  }
};

export { getDate };
