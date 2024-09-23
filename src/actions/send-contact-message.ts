"use server";

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";
//just demo
export const actionDemo = async (data: FieldValues) => {
  const response = await fetch("https://example.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  revalidateTag("contact-message");
  return await response.json();
};
