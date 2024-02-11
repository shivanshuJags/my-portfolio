import Link from "next/link";
import classes from "@/styles/programinglang.module.css";
export default function ProgrammingLanguage() {
  return (
    <>
      <ul className={`${classes.iconWrapper} pt-6`}>
        <li className="inline-block">
          <Link
            href="http://www.twitter.com/"
            className={`${classes.nodeJs} h-full w-full cursor-pointer inline-block hover:scale-105 transition-transform cursor-pointer inline-block hover:scale-105 transition-transform`}
          ></Link>
        </li>
        <li className="inline-block">
          <Link
            href="http://www.facebook.com/"
            className={`${classes.angular} h-full w-full cursor-pointer inline-block hover:scale-105 transition-transform`}
          ></Link>
        </li>
        <li className="inline-block">
          <Link
            href="http://www.linkedin.com/"
            className={`${classes.reactJs} h-full w-full cursor-pointer inline-block hover:scale-105 transition-transform`}
          ></Link>
        </li>
        <li className="inline-block">
          <Link
            href="http://www.linkedin.com/"
            className={`${classes.nextJs} h-full w-full cursor-pointer inline-block hover:scale-105 transition-transform`}
          ></Link>
        </li>
        <li className="inline-block">
          <Link
            href="https://www.instagram.com/"
            className={`${classes.javaScript} h-full w-full cursor-pointer inline-block hover:scale-105 transition-transform`}
          ></Link>
        </li>
        <li className="inline-block">
          <Link
            href="https://www.instagram.com/"
            className={`${classes.html} h-full w-full cursor-pointer inline-block hover:scale-105 transition-transform`}
          ></Link>
        </li>
        <li className="inline-block">
          <Link
            href="https://www.instagram.com/"
            className={`${classes.css} h-full w-full cursor-pointer inline-block hover:scale-105 transition-transform`}
          ></Link>
        </li>
      </ul>
    </>
  );
}
