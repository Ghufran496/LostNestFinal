// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
// };

// module.exports = {
//   images: {
//     loader: "default",
//   },
// };
// next.config.js
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "ghufran",
        mongodb_password: "Allahis1",
        mongodb_clustername: "cluster0",
        mongodb_database: "authSec14",
      },
    };
  }

  return {
    env: {
      mongodb_username: "ghufran",
      mongodb_password: "Allahis1",
      mongodb_clustername: "cluster0",
      mongodb_database: "authSec15",
    },
  };
};
