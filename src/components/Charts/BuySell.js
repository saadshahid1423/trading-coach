import React from 'react'
import {useInput} from '../MainStoreProvider'

function BuySell() {

    const {chartData, dispatch} = useInput()
    

    return (
        <div>
            <h1>Price : {chartData.currentPrice} </h1>
            <h1> Buy Price : {chartData.buyPrice} 
                <button onClick={()=>dispatch({type:"buy"})}>Buy</button></h1>
             <h1> Sell Price : {chartData.sellPrice} 
                <button onClick={()=>dispatch({type:"sell"})}>Sell</button></h1>
            <h1> Profit / Loss : {chartData.profit}
             
                <button onClick={()=>dispatch({type:"reset"})}>Reset</button></h1>
            <h1> Today's Profit : {chartData.todayProfit}</h1>

        </div>
    )
}

export default BuySell
