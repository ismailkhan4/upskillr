import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";

export default function WorkspaceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="bg-black h-screen text-white w-full">
        <AppHeader />
        {children}
      </div>
    </SidebarProvider>
  );
}
