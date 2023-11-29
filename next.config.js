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
        NEXTAUTH_SECRET: "F#|p[5=7Q;<8[6Q]b:Nz-|rkn^PD/@^q"
       
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
      JWT_KEY: "F#|p[5=7Q;<8[6Q]b:Nz-|rkn^PD/@^q"
      
    },
  };
};
