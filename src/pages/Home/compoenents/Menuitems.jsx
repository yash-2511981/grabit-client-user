import MenuItem from "@/components/MenuItem";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/store";
import { Clock, X } from "lucide-react";

const Menuitems = () => {
    const { products, showMenu, showMenuRestaurant, setShowMenu, setShowMenuRestaurant, category } = useAppStore();
    const { _id: resId, name, imageUrl, address, rating, avgDeliveryTime } = showMenuRestaurant;

    if (!showMenu && showMenuRestaurant) return null;

    return (
        <div className="p-4 pb-8 space-y-6">
            <div className="w-full bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-100 shadow-lg overflow-hidden h-full">
                <div className="h-full flex gap-0">
                    <div className="w-32 flex-shrink-0">
                        <img
                            src={imageUrl}
                            alt={`${name} image`}
                            className="w-full h-full object-cover rounded-l-2xl"
                        />
                    </div>

                    <div className="flex-1 flex flex-col justify-center px-4 py-3 min-w-0 ">
                        <h2 className="text-gray-800 font-bold text-lg md:text-xl leading-tight mb-1">{name}</h2>
                        <p className="text-gray-600 font-medium text-sm mb-2 truncate">{address}</p>
                        <div className="flex items-center gap-3 text-xs">
                            <div className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full flex items-center gap-1 shadow-sm border border-yellow-200 flex-shrink-0">
                                <span className="text-yellow-500">★</span>
                                <span className="font-semibold">{rating}</span>
                            </div>
                            <div className="flex items-center gap-1 flex-shrink-0">
                                <Clock className="w-3 h-3 text-gray-500" />
                                <span className="text-gray-600">{avgDeliveryTime || '30'} min</span>
                            </div>
                        </div>
                    </div>

                    {/* Fixed Close Button */}
                    <div className="flex items-start justify-center pt-2 pr-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="font-medium text-sm p-2 whitespace-nowrap"
                            onClick={() => {
                                setShowMenu(false);
                                setShowMenuRestaurant({});
                            }}
                        >
                            <X className="text-orange-600 text-4xl" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Menu Items Grid */}
            {category === "product" && <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {products.map((product, index) => {
                    if (product.restaurant._id === resId) {
                        return (
                            <MenuItem key={product._id || index} product={product} />
                        )
                    }
                })}
            </div>}
        </div>
    );
};

export default Menuitems;