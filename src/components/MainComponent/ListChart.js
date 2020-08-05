import React from 'react'
import { Chart } from 'react-charts'
export default function ListChart() {
  const data = React.useMemo(
    () => [{
      label: 'USDT',
      data: [
        [1, 1] , [2, 2], [3, 5],[4, 4],[5, 2]
      ]
    }],
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom',show: false},
      { type: 'linear', position: 'left', show: false}
    ],
    []
  )
  const series = React.useMemo(
    () => ({
      showPoints: false
    }),
    []
  )
  return(
    <>
    <div className="item">
      <div className='price'>
        <p className="symbol">KDG/USDT</p>
        <div className="price-chart">
          <span className="price-usd up">1000</span>
          <span className='price-vnd'>đ 23.000.000</span>
          <div className="chart-border">
            <div className='chart'>
              <Chart data={data} series={series} axes={axes} />
            </div>
          </div>
        </div>
        <div className="change-volume">
          <span className="change up">
            +2.57%
              </span>
          <span className="volume">
            Khối lượng: 42,564,215,26 USDT
              </span>
        </div>
      </div>
    </div>
    <div className="item">
      <div className='price'>
        <p className="symbol">KDG/USDT</p>
        <div className="price-chart">
          <span className="price-usd up">1000</span>
          <span className='price-vnd'>đ 23.000.000</span>
          <div className="chart-border">
            <div className='chart'>
              <Chart data={data} series={series} axes={axes} />
            </div>
          </div>
        </div>
        <div className="change-volume">
          <span className="change up">
            +2.57%
              </span>
          <span className="volume">
            Khối lượng: 42,564,215,26 USDT
              </span>
        </div>
      </div>
    </div>
    <div className="item">
      <div className='price'>
        <p className="symbol">KDG/USDT</p>
        <div className="price-chart">
          <span className="price-usd up">1000</span>
          <span className='price-vnd'>đ 23.000.000</span>
          <div className="chart-border">
            <div className='chart'>
              <Chart data={data} series={series} axes={axes} />
            </div>
          </div>
        </div>
        <div className="change-volume">
          <span className="change up">
            +2.57%
              </span>
          <span className="volume">
            Khối lượng: 42,564,215,26 USDT
              </span>
        </div>
      </div>
    </div>
    <div className="item">
      <div className='price'>
        <p className="symbol">KDG/USDT</p>
        <div className="price-chart">
          <span className="price-usd up">1000</span>
          <span className='price-vnd'>đ 23.000.000</span>
          <div className="chart-border">
            <div className='chart'>
              <Chart data={data} series={series} axes={axes} />
            </div>
          </div>
        </div>
        <div className="change-volume">
          <span className="change up">
            +2.57%
              </span>
          <span className="volume">
            Khối lượng: 42,564,215,26 USDT
              </span>
        </div>
      </div>
    </div>
    </>
  )
}