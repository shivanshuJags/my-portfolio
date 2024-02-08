"use client";
import { useEffect, useState } from "react";
import { SlideInProps } from "@/utils/props.interface";
import classes from "@/styles/socialbox.module.css";

const SlideInDiv = ({ children, postion }: SlideInProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a delay (e.g., 1 second)
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`${classes.slideInDiv} ${
        postion === "left" ? classes.left : classes.right
      } ${isVisible ? classes.slideInActive : ""} p-4 lg:w-1/2`}
    >
      {children}
    </div>
  );
};

export default SlideInDiv;
