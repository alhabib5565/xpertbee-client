import { z } from "zod";

export const publishAnnouncementFormSchema = z.object({
  course: z.string({
    required_error: "Please Select a course",
  }),
  announcementTitle: z
    .string({ required_error: "Announcement title is required" })
    .min(3, "Announcement title must be at least 3 characters long")
    .max(100, "Announcement title must be less than 100 characters"),
  summary: z
    .string({ required_error: "Summary is required" })
    .min(5, "Summary must be at least 5 characters long")
    .max(500, "Summary must be less than 500 characters"),
});
