import Subscription from '@/components/Subscription'
import { useAppStore } from '@/store/store'
import React from 'react'

const Subscriptions = () => {
    const { subscriptions } = useAppStore()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {subscriptions.map((subscription) => (
                <Subscription key={subscription._id} subscription={subscription} />
            ))}
        </div>
    )
}

export default Subscriptions
