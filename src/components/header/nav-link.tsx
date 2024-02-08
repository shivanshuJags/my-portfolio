"use client";
import Link from "next/link";
import { NavLinkProps } from "@/utils/props.interface";

export default function NavLink({ children, href, cls }: NavLinkProps) {
  return (
    <>
      <Link href={href} className={cls}>
        {children}
      </Link>
    </>
  );
}
