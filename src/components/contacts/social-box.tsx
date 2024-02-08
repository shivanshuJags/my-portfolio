import NavLink from "../header/nav-link";
import classes from "@/styles/socialbox.module.css";

export default function SocialBox() {
  return (
    <div className="socialBox">
      <h1 className={classes.title}>Contact</h1>
      <p className={classes.intro}>
        Get in touch with me via social media or email.
      </p>

      <ul className={classes.socialList}>
        <li>
          <NavLink href="http://www.twitter.com/" cls={classes.twitter}>
            Twitter
          </NavLink>
        </li>
        <li>
          <NavLink href="http://www.facebook.com/" cls={classes.facebook}>
            Facebook
          </NavLink>
        </li>
        <li>
          <NavLink href="http://www.linkedin.com/" cls={classes.linkedin}>
            LinkedIn
          </NavLink>
        </li>
        <li>
          <NavLink href="https://www.instagram.com/" cls={classes.instagram}>
            Instagram
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
