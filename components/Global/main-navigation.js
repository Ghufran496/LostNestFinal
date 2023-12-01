// import Link from "next/link";

// import { useSession, signOut } from "next-auth/react";

// import classes from "./main-navigation.module.css";
// import Button from "../UI/Button";
// function MainNavigation() {
//   const [session, loading] = useSession();

//   function logoutHandler(event) {
//     event.preventDefault();
//     signOut();
//   }

//   return (
//     <header className={classes.header}>
//       <div className={classes.navi}>
        
//         <Link href="/" className={classes.imgdiv} legacyBehavior>
          
//             <div className={classes.new}>
//               <img
//                 src="/images/logos.png"
//                 alt="logoimg"
//                 className={classes.imagest}
//               ></img>
//               <h5>LostNest</h5>
//             </div>
          
//         </Link>

//         <nav className={classes.mainnav}>
//           <ul className={classes.loginnav}>
//             {!session && (
//               <li style={{ padding: "5px" }} className={classes.anch}>
//                 <Link href="/stats">Stats</Link>
//               </li>
//             )}
//             {!session && !loading && (
//               <li>
//                 <Link href="/auth" legacyBehavior>
//                   <a>
//                     <Button content="Login"></Button>
//                   </a>
//                 </Link>

//               </li>
//             )}

//             {session && (
//               <li style={{ padding: "5px" }} className={classes.anch}>
//                 <Link href="/dashboard">Feed</Link>
//               </li>
//             )}
//             {session && (
//               <li style={{ padding: "5px" }} className={classes.anch}>
//                 <Link href="/postlostitem">Lost Item?</Link>
//               </li>
//             )}

//             {session && (
//               <li style={{ padding: "5px" }} className={classes.anch}>
//                 <Link href="/postfounditem">Found Item?</Link>
//               </li>
//             )}
//             {session && (
//               <li style={{ padding: "5px" }} className={classes.anch}>
//                 <Link href="/mylistings">My Listings</Link>
//               </li>
//             )}
//             {session && (
//               <li style={{ padding: "5px" }} className={classes.anch}>
//                 <Link href="/responses">Response</Link>
//               </li>
//             )}
//             {session && (
//               <li style={{ padding: "5px" }} className={classes.anch}>
//                 <Link href="/profile">Profile</Link>
//               </li>
//             )}

//             {session && (
//               <li>
//                 <button onClick={logoutHandler} className={classes.btn}>
//                   Logout
//                 </button>
//               </li>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default MainNavigation;
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import classes from "./main-navigation.module.css";
import Button from "../UI/Button";

function MainNavigation() {
  const { data: session, status } = useSession();

  function logoutHandler(event) {
    event.preventDefault();
    signOut();
  }

  return (
    <header className={classes.header}>
      <div className={classes.navi}>
        <Link href="/" className={classes.imgdiv} legacyBehavior>
          <div className={classes.new}>
            <img
              src="/images/logos.png"
              alt="logoimg"
              className={classes.imagest}
            />
            <h5>LostNest</h5>
          </div>
        </Link>

        <nav className={classes.mainnav}>
          <ul className={classes.loginnav}>
            {status === "authenticated" && (
              <>
                <li style={{ padding: "5px" }} className={classes.anch}>
                  <Link href="/dashboard">Feed</Link>
                </li>
                <li style={{ padding: "5px" }} className={classes.anch}>
                  <Link href="/postlostitem">Lost Item?</Link>
                </li>
                <li style={{ padding: "5px" }} className={classes.anch}>
                  <Link href="/postfounditem">Found Item?</Link>
                </li>
                <li style={{ padding: "5px" }} className={classes.anch}>
                  <Link href="/mylistings">My Listings</Link>
                </li>
                <li style={{ padding: "5px" }} className={classes.anch}>
                  <Link href="/responses">Response</Link>
                </li>
                <li style={{ padding: "5px" }} className={classes.anch}>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={logoutHandler} className={classes.btn}>
                    Logout
                  </button>
                </li>
              </>
            )}
            {status !== "authenticated"  && (
              <li style={{ padding: "5px" }} className={classes.anch}>
                              <Link href="/stats">Stats</Link>
                             </li>
            )}
            {status !== "authenticated"  && (
              <li>
                <Link href="/auth" legacyBehavior>
                  <a>
                    <Button content="Login" />
                  </a>
                </Link>
              </li>
            )}
            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;