import { Button } from "@/components/ui/button"; // Or your button component


function AdminHeader() {
  return (
    <header className="flex items-center justify-between p-4 border-b"> {/* Added some basic styling */}
      <div className="flex items-center"> {/* Grouped icon and title */}
        <Button variant="ghost" className="lg:hidden"> {/* Only show on smaller screens */}
          
          <span className="sr-only">Toggle Menu</span> {/* For accessibility */}
        </Button>
        <span className="text-xl font-bold ml-4">Admin Dashboard</span> {/* Added a title */}
      </div>
      <div className="flex items-center gap-2"> {/* Added gap for spacing */}
        <Button className="inline-flex gap-2"> {/* Added gap for icon and text */}
         
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;