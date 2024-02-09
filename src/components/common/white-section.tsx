import { ChildProps } from "@/utils/props.interface";
import classes from "@/styles/common/common.module.css";

export default function WhiteSection({ children }: ChildProps) {
  return (
    <>
      <div className={`${classes.whiteSection}`}>{children}</div>
    </>
  );
}
