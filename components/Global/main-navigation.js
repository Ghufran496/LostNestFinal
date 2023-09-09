import Link from "next/link";
import { useSession, signOut } from "next-auth/client";

import classes from "./main-navigation.module.css";
import Button from "../UI/Button";
function MainNavigation() {
  const [session, loading] = useSession();

  function logoutHandler(event) {
    event.preventDefault();
    signOut();
  }

  return (
    <header className={classes.header}>
      <div className={classes.navi}>
        <Link href="/" className={classes.imgdiv}>
          <a>
            <div className={classes.new}>
              <img
                src="/images/logos.png"
                alt="logoimg"
                className={classes.imagest}
              ></img>
              <h5>LostNest</h5>
            </div>
          </a>
        </Link>

        <nav className={classes.mainnav}>
          <ul>
            {!session && !loading && (
              <li>
                <Link href="/auth">
                  <a>
                    <Button content="Login"></Button>
                  </a>
                </Link>
              </li>
            )}
          </ul>
          <ul className={classes.loginnav}>
            {session && (
              <li style={{ padding: "5px" }}>
                <Link href="/postitem">Post Item</Link>
              </li>
            )}
            {session && (
              <li style={{ padding: "5px" }}>
                <Link href="/dashboard">Feed</Link>
              </li>
            )}
            {session && (
              <li style={{ padding: "5px" }}>
                <Link href="/profile">Profile</Link>
              </li>
            )}

            {session && (
              <li>
                <button onClick={logoutHandler} className={classes.btn}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
