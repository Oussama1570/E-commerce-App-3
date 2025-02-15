import { Button } from "@/components/ui/button"; 
import { Menu } from "lucide-react"; // Importing an icon for the menu button

function AdminHeader({ setOpen }) {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      {/* Sidebar Toggle Button */}
      <div className="flex items-center">
        <Button variant="ghost" className="lg:hidden" onClick={() => setOpen(prev => !prev)}>
          <Menu size={24} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <span className="text-xl font-bold ml-4">Admin Dashboard</span>
      </div>

      {/* Logout Button */}
      <div className="flex items-center gap-2">
        <Button className="inline-flex gap-2">
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;
