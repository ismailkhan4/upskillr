import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function AppHeader({
  hideSidebar = false,
}: {
  hideSidebar: boolean;
}) {
  return (
    <div className="p-2 flex justify-between items-center shadow-sm sticky top-0 bg-white">
      {!hideSidebar && <SidebarTrigger />}

      {hideSidebar && (
        <div className="flex flex-row items-center p-2 gap-2">
          <Image src={"/logo.svg"} alt="Logo" height={40} width={30} />
          <h2 className="font-bold text-xl">upSkillr</h2>
        </div>
      )}

      <UserButton />
    </div>
  );
}
