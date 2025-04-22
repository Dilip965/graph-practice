import { useState } from 'react'

// nice
import './App.css'
import RadarChartComponent from './component/radarchart1'
import ProductPriceVsSalesChart from './component/scatter2'
import TreemapChartExample from './component/treemapchart'
import FunnelChartExample from './component/funnelchart'
import InvestmentReturnsHistogram from './component/histogram'
import InvestmentRiskReturnScatterPlot from './component/visual'
import InvestmentBubbleChart from './component/bubblechart'
import SplineChart from './component/splinechart'


import SalesChart from './component/salesChart'
import ScatterChart1 from './component/reactplotly'
import FinancialDashboard from './component/second'
import PortfolioPerformanceChart from './component/linechart'
import SalesDashboard from './component/salesdashbord'
import ConversionRadarChart from './component/radarchart'
import RevenueAreaChart from './component/areachart'
import LineChartExample from './component/linechart1'
import BarChartComponent from './component/barchart'
import AreaChartComponent from './component/areachart1'
import PieChartComponent from './component/piechart'
import InvestmentRadarChart from './component/iradar'
import ScatterPlotExample from './component/scatterchart'
import ComposedChartExample from './component/composedchart'
import RealTimeClock from './component/time'
import Ticket from './component/ticket'
import RadialBarChartExample from './component/radialchart'
import PortfolioTreemapChart from './component/port1'
import BarChart1 from './component/barchart1'



import BoxPlotExample from './component/boxchart'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    =
    <SalesChart/>
    <FinancialDashboard/>
    <PortfolioPerformanceChart/>
    <SalesDashboard/>
    <ConversionRadarChart/>
    <RevenueAreaChart/>
    <h1>LIne chart </h1>
    <LineChartExample/>
    <h1>Bar chart</h1>

    <BarChartComponent/>
    <h1>Area chart</h1>
       <AreaChartComponent/>
       <h1>Piechart</h1>

       <PieChartComponent/>

       <h1>Radar Chart</h1>

       <RadarChartComponent/>
       <h1>Investment</h1>
       <InvestmentRadarChart/>
       <h1>Scatter Chart</h1>
       <ScatterPlotExample/>
        <h1>Example 2
      <ProductPriceVsSalesChart/>
        </h1>


        <h1>Plotly js usecase</h1>
        <ScatterChart1/>
        <h2>Composed Chart</h2>
        <ComposedChartExample/>
        <h1>Real time clock</h1>
        <RealTimeClock/>
        <h1>Ticket</h1>
        <Ticket/>
        <h1>Radar chart Example</h1>
        <RadialBarChartExample/>
        <h1>Tree map chart</h1>
        <TreemapChartExample/>
        <p>example</p>
        <PortfolioTreemapChart/>
        <h1>Funnel chart</h1>
        <FunnelChartExample/>
        <h1>Histogram chart</h1>
        <InvestmentReturnsHistogram/>
        <h1>Investment Risk Return Scatter Plot</h1>
        <InvestmentRiskReturnScatterPlot/>
        <h1>Investment Bubble Chart</h1>
        <InvestmentBubbleChart/>
        <h1>Spline Chart</h1>
        <SplineChart/>
        <h1>Box Chart</h1>
      <BoxPlotExample/>

        <h1>Bar Chart 1</h1>  
        <BarChart1/>
     

    </>
  )
}

export default App

