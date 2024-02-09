"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/utils/props.interface";

import classes from "@/styles/header/header.module.css";

export default function NavLink({ children, href, cls }: NavLinkProps) {
  const path = usePathname();
  return (
    <>
      <Link
        href={href}
        className={
          path.startsWith(href)
            ? `${classes.link} ${classes.active}`
            : `${classes.link} ${cls}`
        }
      >
        {children}
      </Link>
    </>
  );
}
