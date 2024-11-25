import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col relative max-w-screen overflow-auto">
        <Navbar />

        <div className="flex-1 pt-20 p-8 w-full max-w-screen-xl mx-auto">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
