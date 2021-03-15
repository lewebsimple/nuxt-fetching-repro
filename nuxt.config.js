import buildModules from "./config/build-modules";
import graphql from "./config/graphql";
import tailwindcss from "./config/tailwindcss";
import publicRuntimeConfig from "./config/public-runtime-config";

export default {
  buildModules,
  components: true,
  css: ["~/assets/styles/main.scss"],
  graphql,
  publicRuntimeConfig,
  server: { host: "0.0.0.0" },
  srcDir: "./src",
  target: "static",
  tailwindcss,
};
