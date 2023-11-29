
import NextAuth from "next-auth";
//import Providers from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";

import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
  // Configure the session object
  session: {
    // Use JSON Web Tokens (JWTs) for secure sessions
    strategy: "jwt",
    // Set the JWT secret key
    secret: process.env.JWT_KEY,
  },

  // Configure authentication providers
  providers: [
    Credentials({
      // Name of the provider
      name: "Credentials",
      // Function to verify credentials
      async authorize(credentials) {
        // Connect to the database
        const client = await connectToDatabase();
        const usersCollection = client.db().collection("users");

        // Find the user with the provided email
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        // Check if the user exists
        if (!user) {
          // Disconnect from the database
         // client.close();
          throw new Error("User does not exist");
        }

        // Verify the password
        const isValid = await verifyPassword(credentials.password, user.password);

        // Check if the password is valid
        if (!isValid) {
          // Disconnect from the database
          //client.close();
          throw new Error("Incorrect password");
        }

        // Return the user's email if the credentials are valid
        return { email: user.email };
      },
    }),
  ],
});


// import NextAuth from "next-auth";
// //import type { NextAuthOptions } from "next-auth";
// //import Providers from "next-auth/providers";
// import Credentials from "next-auth/providers/credentials";

// import { verifyPassword } from "../../../lib/auth";
// import { connectToDatabase } from "../../../lib/db";

// export const authOptions ={
//   // Configure the session object
//   session: {
//     // Use JSON Web Tokens (JWTs) for secure sessions
//     strategy: "jwt",
//     // Set the JWT secret key
//     secret: process.env.NEXTAUTH_SECRET,
//   },

//   // Configure authentication providers
//   providers: [
//     Credentials({
//       // Name of the provider
//       name: "Credentials",
//       // Function to verify credentials
//       async authorize(credentials) {
//         // Connect to the database
//         const client = await connectToDatabase();
//         const usersCollection = client.db().collection("users");

//         // Find the user with the provided email
//         const user = await usersCollection.findOne({
//           email: credentials.email,
//         });

//         // Check if the user exists
//         if (!user) {
//           // Disconnect from the database
//          // client.close();
//           throw new Error("User does not exist");
//         }

//         // Verify the password
//         const isValid = await verifyPassword(credentials.password, user.password);

//         // Check if the password is valid
//         if (!isValid) {
//           // Disconnect from the database
//           //client.close();
//           throw new Error("Incorrect password");
//         }

//         // Return the user's email if the credentials are valid
//         return { email: user.email };
//       },
//     }),
//   ],
// };

// export default NextAuth(authOptions);