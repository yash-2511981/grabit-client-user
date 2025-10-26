import { cn } from '@/lib/utils'
import React from 'react'

const CategoryBadge = ({ category }) => {
    return (
        <div className="absolute top-3 left-3">
            <div className={cn(
                "w-5 h-5 rounded-sm border-2 bg-white flex items-center justify-center shadow-sm",
                "border-green-500",
                { "border-red-500": category === "non-veg" }
            )}>
                <div className={cn(
                    "w-2.5 h-2.5 rounded-full bg-green-500",
                    { "bg-red-500": category === "non-veg" }
                )}></div>
            </div>
        </div>
    )
}

export default CategoryBadge
