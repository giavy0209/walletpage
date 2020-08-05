import React ,{useState} from 'react'
import symbal from '../../assets/images/symbal.png'
import deposit from '../../assets/images/deposit.png'
import withdraw from '../../assets/images/withdraw.png'
import trade from '../../assets/images/trade.png'
import stake from '../../assets/images/stake.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy} from '@fortawesome/free-solid-svg-icons'
import qr from '../../assets/images/qrcode.jpg'

import Model from '../Modal'
export default function ListCoin(){
    const [VisibleDeposit, setVisibleDeposit] = useState(false)
    const [VisibleWithdraw, setVisibleWithdraw] = useState(false)
    const [Coin] = useState('USDT')

    return(
        <>
        <Model
        isVisible={VisibleDeposit}
        title={`Nạp ${Coin}`}
        onCancel={()=>setVisibleDeposit(false)}
        >
            <div className='model-deposit'>
                <span>Scan tại đây để nạp</span>
                <div className="qr-code">
                    <span></span>
                    <img alt="qr" src={qr}/>
                </div>
                <span>Hoặc sao chép mã tại đây</span>
                <div className="deposit-address">
                    <span>0x7c199e34a40f4Cb190CC7FE0b9978F9fBf4A86e2</span>
                    <FontAwesomeIcon icon={faCopy}/>
                </div>
            </div>
        </Model>

        <Model
        isVisible={VisibleWithdraw}
        title={`Rút ${Coin}`}
        onCancel={()=>setVisibleWithdraw(false)}
        >
            <div className="model-withdraw">
                <form>
                    <div className="input-group">
                        <span>Địa chỉ ví nhận</span>
                        <input placeholder="Địa chỉ ví nhận" name="wallet" />
                    </div>
                    <div className="input-group">
                        <span>Số lượng {Coin}</span>
                        <input placeholder={`Số lượng ${Coin}`} name="quantity"/>
                    </div>
                    <div className="input-group google-authen">
                        <span>Mã Google Authen</span>
                        <input />
                        <input />
                        <input />
                        <input />
                        <input />
                        <input />
                    </div>
                    <button>Rút tiền</button>
                </form>
            </div>

        </Model>
        <div className="item">
            <div className="coin">
                <div className="top-info">
                <div className="coin-image-name">
                    <img src={symbal} alt="coin"/>
                    <span className="name">KDG</span>
                </div>
                <div className='balance'>
                    <p><span>Available: </span><span>200</span></p>
                    <p><span>Locked: </span><span>100</span></p>
                </div>
                </div>
                <div className="button-group">
                <div className="kdg-row kdg-column-4 list-button text-c va-m">
                    <div className="item">
                    <div onClick={()=>setVisibleDeposit(true)} className='button'>
                        <img alt="deposit" src={deposit}/>
                        <p>nạp</p>
                    </div>
                    </div>
                    <div className="item">
                    <div onClick={()=>setVisibleWithdraw(true)} className='button'>
                        <img alt="withdraw" src={withdraw}/>
                        <p>rút</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt="staking" src={stake}/>
                        <p>staking</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt='trade' src={trade}/>
                        <p>giao dịch</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>









        <div className="item">
            <div className="coin">
                <div className="top-info">
                <div className="coin-image-name">
                    <img src={symbal} alt="coin"/>
                    <span className="name">KDG</span>
                </div>
                <div className='balance'>
                    <p><span>Available: </span><span>200</span></p>
                    <p><span>Locked: </span><span>100</span></p>
                </div>
                </div>
                <div className="button-group">
                <div className="kdg-row kdg-column-4 list-button text-c va-m">
                    <div className="item">
                    <div className='button'>
                        <img alt="deposit" src={deposit}/>
                        <p>nạp</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt="withdraw" src={withdraw}/>
                        <p>rút</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt="staking" src={stake}/>
                        <p>staking</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt='trade' src={trade}/>
                        <p>giao dịch</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="coin">
                <div className="top-info">
                <div className="coin-image-name">
                    <img src={symbal} alt="coin"/>
                    <span className="name">KDG</span>
                </div>
                <div className='balance'>
                    <p><span>Available: </span><span>200</span></p>
                    <p><span>Locked: </span><span>100</span></p>
                </div>
                </div>
                <div className="button-group">
                <div className="kdg-row kdg-column-4 list-button text-c va-m">
                    <div className="item">
                    <div className='button'>
                        <img alt="deposit" src={deposit}/>
                        <p>nạp</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt="withdraw" src={withdraw}/>
                        <p>rút</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt="staking" src={stake}/>
                        <p>staking</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt='trade' src={trade}/>
                        <p>giao dịch</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="coin">
                <div className="top-info">
                <div className="coin-image-name">
                    <img src={symbal} alt="coin"/>
                    <span className="name">KDG</span>
                </div>
                <div className='balance'>
                    <p><span>Available: </span><span>200</span></p>
                    <p><span>Locked: </span><span>100</span></p>
                </div>
                </div>
                <div className="button-group">
                <div className="kdg-row kdg-column-4 list-button text-c va-m">
                    <div className="item">
                    <div className='button'>
                        <img alt="deposit" src={deposit}/>
                        <p>nạp</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt="withdraw" src={withdraw}/>
                        <p>rút</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt="staking" src={stake}/>
                        <p>staking</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt='trade' src={trade}/>
                        <p>giao dịch</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="coin">
                <div className="top-info">
                <div className="coin-image-name">
                    <img src={symbal} alt="coin"/>
                    <span className="name">KDG</span>
                </div>
                <div className='balance'>
                    <p><span>Available: </span><span>200</span></p>
                    <p><span>Locked: </span><span>100</span></p>
                </div>
                </div>
                <div className="button-group">
                <div className="kdg-row kdg-column-4 list-button text-c va-m">
                    <div className="item">
                    <div className='button'>
                        <img alt="deposit" src={deposit}/>
                        <p>nạp</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt="withdraw" src={withdraw}/>
                        <p>rút</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt="staking" src={stake}/>
                        <p>staking</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt='trade' src={trade}/>
                        <p>giao dịch</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="coin">
                <div className="top-info">
                <div className="coin-image-name">
                    <img src={symbal} alt="coin"/>
                    <span className="name">KDG</span>
                </div>
                <div className='balance'>
                    <p><span>Available: </span><span>200</span></p>
                    <p><span>Locked: </span><span>100</span></p>
                </div>
                </div>
                <div className="button-group">
                <div className="kdg-row kdg-column-4 list-button text-c va-m">
                    <div className="item">
                    <div className='button'>
                        <img alt="deposit" src={deposit}/>
                        <p>nạp</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt="withdraw" src={withdraw}/>
                        <p>rút</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt="staking" src={stake}/>
                        <p>staking</p>
                    </div>
                    </div>
                    <div className="item">
                    <div className='button'>
                        <img alt='trade' src={trade}/>
                        <p>giao dịch</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}