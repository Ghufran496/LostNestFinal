// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// module.exports = (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       env: {
//         mongodb_username: "ghufran",
//         mongodb_password: "Allahis1",
//         mongodb_clustername: "cluster0",
//         mongodb_database: "authSec14",
//         smtp_host: "live.smtp.mailtrap.io",
//         smtp_user: "api",
//         smtp_pass: "f75617ed14fc8d9d7e8034cb59d1b878",
//         NEXTAUTH_SECRET: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
//         NEXTAUTH_URL: "http://localhost:3000",
//       },
//     };
//   }

//   return {
//     env: {
//       mongodb_username: "ghufran",
//       mongodb_password: "Allahis1",
//       mongodb_clustername: "cluster0",
//       mongodb_database: "Production",
//       smtp_host: "live.smtp.mailtrap.io",
//       smtp_user: "api",
//       smtp_pass: "f75617ed14fc8d9d7e8034cb59d1b878",
//       NEXTAUTH_SECRET: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
//     },
//   };
// };

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "ghufran",
        mongodb_password: "Allahis1",
        mongodb_clustername: "cluster0",
        mongodb_database: "authSec14",
        smtp_host: "sandbox.smtp.mailtrap.io",
        smtp_user: "6bb4922c65d9b2",
        smtp_pass: "1e9e125d684fac",
        NEXTAUTH_SECRET: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
        NEXTAUTH_URL: "http://localhost:3000",

      },
    };
  }

  return {
    env: {
      mongodb_username: "ghufran",
      mongodb_password: "Allahis1",
      mongodb_clustername: "cluster0",
      mongodb_database: "Production",
      smtp_host: "sandbox.smtp.mailtrap.io",
      smtp_user: "6bb4922c65d9b2",
      smtp_pass: "1e9e125d684fac",
      NEXTAUTH_SECRET: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",

    },
  };
};
