import React from 'react';
import { cn } from '@/lib/utils';
import OrderNowBtn from '@/pages/Home/compoenents/OrderNowBtn';
import AddToCartBtn from '@/pages/Home/compoenents/AddToCartBtn';

const MenuItem = ({ product }) => {
    const isVeg = product.category === "veg";

    return (
        <div className='bg-white w-full rounded-2xl flex gap-0 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 relative overflow-hidden h-[110px]'>
            {/* Fixed Image Container */}
            <div className='w-32 h-full flex-shrink-0 relative'>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className='w-full h-full object-cover rounded-l-2xl'
                />

                {/* Rating Badge */}
                {product.rating && (
                    <div className="absolute bottom-2 right-2 bg-yellow-50 text-yellow-700 text-xs px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm border border-yellow-200">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold">{(product.rating / product.ratingCount).toFixed(1)}</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className='flex flex-col py-3 px-3 flex-1 min-w-0'>
                {/* Header Section */}
                <div className='space-y-1'>
                    <div className='flex items-center gap-2 justify-between'>
                        <h3 className='text-sm font-bold text-gray-800 truncate flex-1'>
                            {product.name}
                        </h3>
                        {/* Veg/Non-veg Indicator */}
                        <div className={`w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 rounded-xs ${isVeg ? 'border-green-500' : 'border-red-500'}`}>
                            <div className={cn('w-1.5 h-1.5 rounded-full', { 'bg-green-500': isVeg, "bg-red-500": !isVeg })}></div>
                        </div>
                    </div>
                    <p className='text-xs text-gray-600 line-clamp-2 leading-relaxed truncate'>{product.description}</p>
                </div>

                {/* Bottom Section - Price and Buttons */}
                <div className='flex items-center justify-between mt-2'>
                    {/* Price Section */}
                    <div className="flex items-center gap-2 max-sm:hidden">
                        <span className="font-bold text-sm text-gray-900">₹{product.price}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex gap-1.5 flex-shrink-0'>
                        <OrderNowBtn product={product} />
                        <AddToCartBtn product={product} variant="outline" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;