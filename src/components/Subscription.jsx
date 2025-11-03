import { ChevronDown, Clock, Gift, Utensils } from 'lucide-react';
import React, { useState } from 'react'
import CategoryBadge from './CategoryBadge';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Subscription = ({ subscription }) => {

    const weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const [showMenu, setShowMenu] = useState(false);

    const getMealTimeIcon = (mealTime) => {
        const colors = {
            breakfast: "text-orange-500",
            lunch: "text-green-500",
            dinner: "text-blue-500",
        };
        return <Utensils className={`w-4 h-4 ${colors[mealTime]}`} />;
    };

    const getDurationText = (duration) => {
        const map = { "1m": "1 Month", "3m": "3 Months", "6m": "6 Months", "12m": "12 Months" };
        return map[duration] || duration;
    };

    return (
        <div
            className="border rounded-xl transition-all duration-200 bg-white border-gray-200 hover:border-amber-300 hover:shadow-lg"
        >
            <div className="p-4 flex flex-col">
                <div className="flex justify-between items-start mb-2">

                    <div className="flex-1 min-w-0 pr-4">
                        <div className="flex items-center gap-2 mb-1">
                            {getMealTimeIcon(subscription.mealTime)}
                            <h3 className="font-extrabold text-xl text-gray-900 truncate leading-tight">
                                {subscription.name}
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{subscription.restaurant.name}</p>
                    </div>


                    <div className="flex-shrink-0 bg-amber-100 rounded-full px-3 py-1.5 text-center shadow-inner">
                        <p className="text-xs text-amber-600 font-bold leading-none">Price</p>
                        <p className="text-lg font-extrabold text-amber-700 leading-none">₹{subscription.price}</p>
                    </div>
                </div>


                <div className="relative flex items-center justify-between text-xs pt-2 border-t border-gray-100">

                    <div className="flex items-center gap-4">

                        <div className="flex items-center gap-1 text-gray-600 font-medium">
                            <Clock className="h-4 w-4 text-gray-400" />
                            {getDurationText(subscription.duration)}
                        </div>


                        {subscription.save > 0 && (
                            <div className="flex items-center gap-1 text-green-600 font-semibold">
                                <Gift className="h-4 w-4 text-green-500" />
                                Save ₹{subscription.save}
                            </div>
                        )}
                    </div>
                    <CategoryBadge category={subscription.category} />
                </div>
            </div>


            <div className="border-t border-gray-100 bg-gray-50/50 rounded-b-xl">
                <Button
                    className={cn("w-full py-2 text-sm text-gray-700 bg-white font-semibold hover:bg-gray-100 transition-colors rounded-b-xl rounded-t-none", { showMenu: "rounded-b-none rounded-t-none" })}
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowMenu(!showMenu);
                    }}
                >
                    <span className="text-amber-600">{showMenu ? "Hide" : "View"} Weekly Menu</span>
                    <ChevronDown className={`h - 4 w - 4 text - amber - 600 transition - transform ${showMenu ? "rotate-180" : ""} `} />
                </Button>

                {showMenu && (
                    <div className="p-3 border-t border-gray-200 bg-white max-h-56 overflow-y-auto">
                        <div className="grid grid-cols-2 gap-x-3 gap-y-3 text-xs">
                            {weekDays.map((day, index) => (
                                <div key={day} className="flex flex-col">
                                    <span className="font-bold text-gray-800 capitalize mb-0.5">{day}</span>
                                    <span className="text-gray-600 leading-snug line-clamp-2">{subscription.weeklyMenu[index]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div >
    )
}

export default Subscription