export const getAppUrl = () => {
  return process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://asmr.hynekfisera.com";
};
