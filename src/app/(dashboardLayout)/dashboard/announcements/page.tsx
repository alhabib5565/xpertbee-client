import { Button } from "@/components/ui/button";
import React from "react";
import { BookOpen } from "lucide-react";
import PublishAnnouncementModal from "@/components/dashboard/announcement/PublishAnnouncementModal";

const AnnouncementsPage = () => {
  return (
    <div>
      <div className="p-4 rounded-md border bg-white flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="size-[60px] rounded-full bg-[#FFF9EC] text-primary grid place-items-center">
            <BookOpen />
          </span>
          <div>
            <p className="text-[16px] font-medium text-[#757C8E]">
              Create Announcement
            </p>
            <p className="text-lg font-medium ">
              Notify all students of your course
            </p>
          </div>
        </div>

        <PublishAnnouncementModal />
      </div>
    </div>
  );
};

export default AnnouncementsPage;
