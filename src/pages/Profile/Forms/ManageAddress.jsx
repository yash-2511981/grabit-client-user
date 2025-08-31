import Address from "@/components/Address";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppStore } from "@/store/store";
import { X } from "lucide-react";

const ManageAddress = ({ setShowModal }) => {
  const { addresses } = useAppStore()

  return (
    <div className='fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 z-50'>
      <div className='p-2 sm:p-6 relative rounded-2xl shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300 max-sm:max-w-sm'>
        <X
          onClick={() => setShowModal(false)}
          className='absolute top-0 right-0 sm:-top-2 sm:-right-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full sm:size-10 size-7 transition-all duration-200 p-1 sm:p-2 cursor-pointer hover:scale-110 shadow-lg z-10'
        />
        <Card className="py-4 sm:p-6 sm:min-w-lg bg-white/95 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-800 text-center">
              Manage Address
            </CardTitle>
            <CardDescription className="text-center text-gray-600 mt-2">
              Update or delete address
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {addresses.map((address, index) => (
              <div key={index} className="transform transition-all duration-200 hover:scale-[1.02]">
                <Address address={address} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ManageAddress;