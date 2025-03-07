import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const StatsCounter = () => {
    const [counterState, setCounterState] = useState(false)
    return (
        <div className='px-20 py-12'>
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                <div className='grid grid-cols-5 text-center'>
                    <div>
                        <h2 className='text-6xl font-bold text-brandPrimary'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={125002}
                                    duration={2.75}>
                                </CountUp>
                            }
                        </h2>
                        <p className='py-2 text-neutralDGrey font-medium'>Registered Farmers</p>
                    </div>
                    <div>
                        <h2 className='text-6xl font-bold text-brandPrimary'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={12643}
                                    duration={2.75}>
                                </CountUp>}
                        </h2>

                        <p className='py-2 text-neutralDGrey font-medium'>
                            Payments</p>
                    </div>
                    <div>
                        <h2 className='text-6xl font-bold text-brandPrimary'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={12643}
                                    duration={2.75}>
                                </CountUp>
                            }
                        </h2>
                        <p className='py-2 text-neutralDGrey font-medium'>Booking</p>
                    </div>
                    <div>
                        <h2 className='text-6xl font-bold text-brandPrimary'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={40}
                                    duration={2.75}>
                                </CountUp>
                            }</h2>
                        <p className='py-2 text-neutralDGrey font-medium'>Center</p>
                    </div>
                    <div>
                        <h2 className='text-6xl font-bold text-brandPrimary'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={12}
                                    duration={2.75}>
                                </CountUp>
                            }</h2>
                        <p className='py-2 text-neutralDGrey font-medium'>States</p>
                    </div>
                </div>
            </ScrollTrigger>

        </div>
    )
}

export default StatsCounter
