import { cn } from '@/lib/utils'
import { CheckSquare, ShoppingBagIcon, Star, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { useAppStore } from '@/store/store'
import useColumns from '@/hooks/useColumns'
import OrderNowBtn from '@/pages/Home/compoenents/OrderNowBtn'
import AddToCartBtn from '@/pages/Home/compoenents/AddToCartBtn'

const Product = ({ product, open, setOpen, index, ref }) => {

    const { reorderOnLastProductCardClick, moveIndex, setShowMenu, setShowMenuRestaurant } = useAppStore()

    const columns = useColumns()
    const isLastInRow = ((index + 1) % columns) === 0;


    const handleProductClick = () => {
        if (open) return // Prevent clicking when already open

        setOpen(product._id)
        if (isLastInRow) {
            reorderOnLastProductCardClick(index)
        }
    }

    const handleCloseProduct = (e) => {
        e.stopPropagation()
        setOpen(null)
        if (moveIndex !== null) {
            reorderOnLastProductCardClick()
        }
    }

    const handleMenuViewClick = () => {
        setShowMenu(true)
        setShowMenuRestaurant(product.restaurant)
    }

    return (
        <div
            className={cn(
                "product-card bg-white rounded-xl shadow-sm hover:shadow-md hover:border-orange-200 cursor-pointer group touch-manipulation active:shadow-lg transition-all duration-500 overflow-hidden border border-gray-100 col-span-1 row-span-1",
                {
                    "shadow-xl border-amber-200 cursor-default col-span-2 row-span-2 z-10": open,
                    "hover:shadow-lg": !open,
                }
            )}
            ref={(el) => {
                if (ref && ref.current) {
                    ref.current[product._id] = el
                }
            }}
        >
            <div
                className={cn("relative aspect-[4/3] overflow-hidden", { "h-1/2 w-full aspect-[4/2]": open })}
                onClick={handleProductClick}
            >
                <img
                    src={product?.imageUrl}
                    alt={product.name}
                    className={cn("w-full h-full object-cover group-hover:scale-105 transition-transform duration-300")}
                    loading="lazy"
                />

                <div className="absolute top-3 left-3">
                    <div className={cn(
                        "w-5 h-5 rounded-sm border-2 bg-white flex items-center justify-center shadow-sm",
                        "border-green-500",
                        { "border-red-500": product.category === "non-veg" }
                    )}>
                        <div className={cn(
                            "w-2.5 h-2.5 rounded-full bg-green-500",
                            { "bg-red-500": product.category === "non-veg" }
                        )}></div>
                    </div>
                </div>

                <div className="absolute bottom-3 right-3 transition-opacity duration-200">
                    <AddToCartBtn product={product} variant="primary" classNames="rounded-full" />
                </div>

                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                    <span className="text-sm font-bold text-orange-600">₹{product.price}</span>
                </div>
            </div>

            <div className={cn("pt-3 pb-3 flex flex-col px-3 justify-between w-full h-fit", { "pb-0": open })} >
                <div className='flex flex-col gap-0 h-fit'>
                    <div className='flex justify-between items-center'>
                        <h3 className={cn(
                            "font-bold text-gray-800 text-sm sm:text-base truncate max-w-[90%] flex justify-between ",
                            {
                                "max-w-full text-lg": open
                            }
                        )}>
                            {product.name}
                        </h3>
                        {open && (
                            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 px-3 py-0.5 sm:py-1 rounded-full border border-yellow-200 flex items-center gap-1 shadow-sm transition-all duration-100">
                                <Star className='w-4 h-4 text-yellow-500 fill-yellow-500' />
                                <span className="text-sm font-bold text-yellow-700">{(product.rating / product.ratingCount).toFixed(1)}</span>
                            </div>
                        )}
                    </div>
                    <p className={cn(
                        'text-gray-600 text-xs sm:text-sm truncate  max-w-[90%]',
                        { 'max-w-full text-sm leading-relaxed line-clamp-2': open }
                    )}>
                        {product.description}
                    </p>
                </div>

                {open && (
                    <div className='flex flex-col h-fit mb-8 sm:mb-0 transition-all duration-100'>
                        <div className='flex flex-col mt-2'>
                            <div className='flex gap-2 bg-gray-50 rounded-lg p-3'>
                                <img
                                    src={product.restaurant.imageUrl}
                                    alt={product.restaurant.name}
                                    className='h-20 w-20 rounded-2xl object-cover'
                                />
                                <div className='flex flex-col w-full justify-between items-start pl-3'>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='flex items-center gap-2 w-[90%]'>
                                            <span className="text-lg sm:text-xl font-bold text-gray-800 max-sm:truncate max-sm:max-w-[95%]">{product.restaurant.name}</span>
                                        </div>
                                        <div className="bg-white px-2  py-0.5 sm:py-1 rounded-full border border-yellow-200 flex items-center gap-1 shadow-sm">
                                            <Star className='w-3 h-3 text-yellow-500 fill-yellow-500' />
                                            <span className="text-xs font-bold text-yellow-700">{product.restaurant.rating}</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 text-gray-600'>
                                        <span className="text-sm">{product.restaurant.avgDeliveryTime} Min Delivery</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-gray-600 cursor-pointer' onClick={handleMenuViewClick}>
                                        <Button variant="Link" className="text-sm p-0">View Menu</Button>
                                        <ArrowRight size={15} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-3 mt-2 max-sm:pb-6'>
                            <OrderNowBtn product={product} />
                            <Button
                                className='cursor-pointer'
                                variant="outline"
                                onClick={handleCloseProduct}
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Product