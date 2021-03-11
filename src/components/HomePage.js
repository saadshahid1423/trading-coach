import React from 'react'
import BuySell from './Charts/BuySell'
import {FXChart, BondChart, EconNews} from './Charts/EconCharts'
import MainAsset from './Charts/MainAsset'

function HomePage() {
    return (
        <div className='Home'>
            <div className = 'Home__TopRow'>
                <MainAsset/>
                <BuySell/>

            </div>
            <div className = 'Home__BottomRow'>
                <div className = "Home__BottomCharts">
                    <FXChart/>
                    <BondChart/>
                </div>
                <EconNews/>
            </div>
        </div>
    )
}

export default HomePage
