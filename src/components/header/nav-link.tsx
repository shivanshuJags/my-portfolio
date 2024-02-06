"use client";
import Link from "next/link";
export default function NavLink({children, href, cls}) {
  return (
    <>
      <Link href={href} className={cls}>{children}</Link>
    </>
  );
}
