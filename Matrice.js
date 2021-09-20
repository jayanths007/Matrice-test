const fiztes = (i) => {
    if (i % 15 == 0) {
      return "Boy Girl";
    } else if (i % 3 == 0) {
      return "Girl";
    } else if (i % 5 == 0) {
      return "Boy";
    } else return i;
  };