import {Line} from 'react-chartjs-2'
import {useInput} from '../MainStoreProvider'
import React from 'react'

function MainAsset() {
    const {chartData, dispatch, starter} = useInput()


    return (
         <div className="MainAsset">
            <button onClick={()=>starter()}>Start</button>
            <Line className="MainAsset__Chart" data={chartData.mainChart.maindata}/>

        </div>

    )
}

export default MainAsset
