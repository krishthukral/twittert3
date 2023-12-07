import { type AppType } from "next/app";

import { api } from "a/utils/api";

import "a/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
