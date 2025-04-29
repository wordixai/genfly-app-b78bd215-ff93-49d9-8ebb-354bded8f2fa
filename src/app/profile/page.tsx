import { ProfileInfo } from "@/components/ProfileInfo";
import { OrderHistory } from "@/components/OrderHistory";

export default function ProfilePage() {
  return (
    <div className="px-4 pt-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      
      <ProfileInfo />
      
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Order History</h2>
        <OrderHistory />
      </div>
    </div>
  );
}