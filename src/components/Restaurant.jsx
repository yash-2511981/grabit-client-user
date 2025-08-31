import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import { Button } from "./ui/button";
import { useAppStore } from "@/store/store";

const RestaurantCard = ({ restaurant }) => {
    const { setShowMenuRestaurant, setShowMenu } = useAppStore()

    const handleMenuViewClick = () => {
        setShowMenu(true)
        setShowMenuRestaurant(restaurant)
    }

    return (
        <div className="bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-amber-200 group cursor-pointer">
            <div className="flex flex-col sm:flex-row">
                <div className="relative sm:w-48 flex-shrink-0 w-full">
                    <img
                        src={restaurant.imageUrl}
                        alt={restaurant.name}
                        className="w-full sm:w-48 h-40 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                        <div className={`p-1 flex items-center justify-center border-2 rounded-sm bg-white ${restaurant.category === "non-veg" ? "border-red-600" : "border-green-500"}`}>
                            <div className={`w-2 h-2 rounded-full ${restaurant.category === "non-veg" ? "bg-red-600" : "bg-green-500"}`}></div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="font-bold text-lg text-gray-800">{restaurant.name}</h3>
                            <div className="flex items-center bg-amber-100 px-2 py-1 rounded-full">
                                <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-1" />
                                <span className="text-xs font-semibold text-amber-700">{restaurant.rating}</span>
                            </div>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mb-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="truncate">{restaurant.address}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-amber-600 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{restaurant.avgDeliveryTime} Min Delivery</span>
                        </div>
                        <Button variant="primary" className="cursor-pointer flex items-center gap-2 " onClick={handleMenuViewClick}>
                            View Menu
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RestaurantCard;