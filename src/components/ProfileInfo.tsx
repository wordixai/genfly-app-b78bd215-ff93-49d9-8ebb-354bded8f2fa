import Image from "next/image";
import { Edit } from "lucide-react";

export function ProfileInfo() {
  return (
    <div className="flex items-center">
      <div className="relative h-20 w-20 rounded-full overflow-hidden bg-secondary">
        <Image
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
          alt="Profile picture"
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <h2 className="font-semibold text-lg">John Doe</h2>
        <p className="text-muted-foreground">john.doe@example.com</p>
        
        <button className="mt-1 text-primary flex items-center text-sm">
          <Edit size={14} className="mr-1" />
          Edit Profile
        </button>
      </div>
    </div>
  );
}