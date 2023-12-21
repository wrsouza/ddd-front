enum REGION {
  co = "co",
  pt = "pt",
}

export const ENV_REGION = process.env.REACT_APP_REGION as REGION;
export const ENV_NEW_VERSION = process.env.REACT_APP_NEW_VERSION === "true";
