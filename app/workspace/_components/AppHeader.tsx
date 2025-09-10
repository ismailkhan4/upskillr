import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

export default function AppHeader() {
  return (
    <div className="p-4 flex justify-between items-center shadow-sm">
      <SidebarTrigger />
      <UserButton />
    </div>
  );
}
