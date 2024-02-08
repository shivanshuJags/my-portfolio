"use client";
import { useFormStatus } from "react-dom";
import { ClassProps } from "@/utils/props.interface";

export default function ContactFormSubmit({ cls }: ClassProps) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={cls}>
      {pending ? "Submitting....." : "Submit"}
    </button>
  );
}
