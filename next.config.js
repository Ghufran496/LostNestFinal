// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// module.exports = (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       env: {
//         mongodb_username: "gcch1122",
//         mongodb_password: "1ABSGfxlpesfCbyV",
//         mongodb_clustername: "LostNest",
//         mongodb_database: "LostNestFYP",
//         smtp_host: "mail.smtp2go.com",
//         smtp_user: "students.uettaxila.edu.pk",
//         smtp_pass: "xCEEWP6kNjOzYDp7",
//         NEXTAUTH_SECRET: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
//         NEXTAUTH_URL: "http://localhost:3000",
//       },
//     };
//   }

//   return {
//     env: {
//       mongodb_username: "gcch1122",
//         mongodb_password: "1ABSGfxlpesfCbyV",
//         mongodb_clustername: "LostNest",
//         mongodb_database: "DeployedLostNest",
//       smtp_host: "mail.smtp2go.com",
//         smtp_user: "students.uettaxila.edu.pk",
//         smtp_pass: "xCEEWP6kNjOzYDp7",
//       NEXTAUTH_SECRET: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
//     },
//   };
// };




//LostNest Main gcch
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "gcch1122",
        mongodb_password: "1ABSGfxlpesfCbyV",
        mongodb_clustername: "LostNest",
        mongodb_database: "LostNestFYP",
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
      mongodb_username: "gcch1122",
        mongodb_password: "1ABSGfxlpesfCbyV",
        mongodb_clustername: "LostNest",
        mongodb_database: "DeployedLostNest",
      smtp_host: "sandbox.smtp.mailtrap.io",
      smtp_user: "6bb4922c65d9b2",
      smtp_pass: "1e9e125d684fac",
      NEXTAUTH_SECRET: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",

    },
  };
};




//Main Acc
// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// module.exports = (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       env: {
//         mongodb_username: "ghufran",
//         mongodb_password: "Allahis1",
//         mongodb_clustername: "cluster0",
//         mongodb_database: "authSec14",
//         smtp_host: "sandbox.smtp.mailtrap.io",
//         smtp_user: "6bb4922c65d9b2",
//         smtp_pass: "1e9e125d684fac",
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
//       smtp_host: "sandbox.smtp.mailtrap.io",
//       smtp_user: "6bb4922c65d9b2",
//       smtp_pass: "1e9e125d684fac",
//       NEXTAUTH_SECRET: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",

//     },
//   };
// };
