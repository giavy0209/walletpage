import React from 'react';
import ListChart from './ListChart'
import ListCoin from './ListCoin'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
function Page() {
  
  return (
    <>
      <main>
        <div className="kdg-container">
          <section className="section-prices">
            <h2 className="title">Giá thị trường</h2>
            <div className="kdg-row kdg-column-4 list-price">
              <ListChart/>
            </div>
          </section>
          <section className="section-wallet">
            <h2 className="title">thông tin số dư</h2>
            <div className="kdg-row kdg-column-2 list-coin">
              <ListCoin/>
            </div>
          </section>

          <section className="section-history">
            <h2 className="title">LỊCH SỬ GIAO DỊCH</h2>
            <div className="list-tab">
              <div className="tab active">
                <p>Tất cả</p>
              </div>
              <div className="tab">
                <p>Nạp</p>
              </div>
              <div className="tab">
                <p>rút</p>
              </div>
            </div>

            <div className="history">
              <table>
                <tbody>
                  <tr>
                    <th>Thời gian</th>
                    <th>Số lượng</th>
                    <th>Token</th>
                    <th>Kiểu</th>
                    <th>Hash(Txid)</th>
                    <th>Trạng thái</th>
                  </tr>
                  <tr>
                    <td className="date-time">
                      <span className="date">20/07/2020</span>
                      <span className="time">18:21:00</span>
                    </td>
                    <td className="quantity red" >
                      {/*class red hoac green = rut/nap  */}
                      100
                    </td>
                    <td>USDT</td>
                    <td>Rút tiền</td>
                    <td>1M0l1mobIiLVUn2Rj0YTFiqo2YXEl0eg5oMRTGSVQH7o/edit#gid=64389968</td>
                    <td className="status">
                      <span>Đang chờ</span>
                      <span className="cancel">Hủy</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="date-time">
                      <span className="date">20/07/2020</span>
                      <span className="time">18:21:00</span>
                    </td>
                    <td className="quantity red" >
                      {/*class red hoac green = rut/nap  */}
                      100
                    </td>
                    <td>USDT</td>
                    <td>Rút tiền</td>
                    <td>1M0l1mobIiLVUn2Rj0YTFiqo2YXEl0eg5oMRTGSVQH7o/edit#gid=64389968</td>
                    <td className="status">
                      <span>Đang chờ</span>
                      <span className="cancel">Hủy</span>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="date-time">
                      <span className="date">20/07/2020</span>
                      <span className="time">18:21:00</span>
                    </td>
                    <td className="quantity red" >
                      {/*class red hoac green = rut/nap  */}
                      100
                    </td>
                    <td>USDT</td>
                    <td>Rút tiền</td>
                    <td>1M0l1mobIiLVUn2Rj0YTFiqo2YXEl0eg5oMRTGSVQH7o/edit#gid=64389968</td>
                    <td className="status">
                      <span>Đang chờ</span>
                      <span className="cancel">Hủy</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="date-time">
                      <span className="date">20/07/2020</span>
                      <span className="time">18:21:00</span>
                    </td>
                    <td className="quantity red" >
                      {/*class red hoac green = rut/nap  */}
                      100
                    </td>
                    <td>USDT</td>
                    <td>Rút tiền</td>
                    <td>1M0l1mobIiLVUn2Rj0YTFiqo2YXEl0eg5oMRTGSVQH7o/edit#gid=64389968</td>
                    <td className="status">
                      <span>Đang chờ</span>
                      <span className="cancel">Hủy</span>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div className="pagination">
              <p className="page-des">01 đến 05 trong số 100</p>
              <span className="arrow"><FontAwesomeIcon icon={faAngleDoubleLeft}/></span>
              <span className="arrow"><FontAwesomeIcon icon={faAngleLeft}/></span>
              <a className="page active" href="https://google.com">1</a>
              <a className="page" href="https://google.com">2</a>
              <input />
              <span className="arrow"><FontAwesomeIcon icon={faAngleDoubleRight}/></span>
              <span className="arrow"><FontAwesomeIcon icon={faAngleRight}/></span>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

export default Page;
