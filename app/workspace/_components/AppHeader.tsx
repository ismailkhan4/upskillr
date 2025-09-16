import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

export default function AppHeader({
  hideSidebar = false,
}: {
  hideSidebar: boolean;
}) {
  return (
    <div className="p-4 flex justify-between items-center shadow-sm">
      {!hideSidebar && <SidebarTrigger />}

      <UserButton />
    </div>
  );
}
