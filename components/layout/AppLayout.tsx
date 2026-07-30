import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f7f8f7]">
      <Navbar />

      <div className="mx-auto flex max-w-[1536px]">
        <Sidebar />

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}