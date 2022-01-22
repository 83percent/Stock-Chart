import { useState, useEffect, useMemo } from 'react';
import LineChart from '../chart/LineChart';
import StockModule from '../../contents/js/Stock';

// CSS
import '../../contents/css/main/index.scss';

const Index = () => {
    const data = ["삼성", "네이버", "제주항공", "크래프톤", "KB금융", "롯데쇼핑", "한화에어로스페이스", "카카오"];
    const [stockCode, setStockCode] = useState(0);
    const [stockInfo, setStockInfo] = useState(undefined);
    

    
    const Stock = useMemo(() => {
        return new StockModule();
    }, []);
    
    
    useEffect(() => {
        
        setStockInfo(Stock.getStock(data[stockCode]))
    }, [stockCode])
    return (
        <div className="index" style={{backgroundColor: stockInfo?.options?.background || "#111"}}>
            
            <div className="info-wrapper" style={{color: stockInfo?.options?.color}}>
                <button style={{visibility: stockCode === 0 ? 'hidden' : 'visible', color: stockInfo?.options?.color}} onClick={() => setStockCode(stockCode - 1)}>이전</button>
                <div>
                    <h2>{data[stockCode]}</h2>
                    <p>{stockInfo?.price[stockInfo.price.length - 1][4]}</p>
                </div>
                <button style={{visibility: stockCode === data.length - 1 ? 'hidden' : 'visible', color: stockInfo?.options?.color}} onClick={() => setStockCode(stockCode + 1)}>다음</button>
            </div>
            <LineChart stockInfo={stockInfo?.price} color={stockInfo?.options?.color || "#fff"}/>
        </div>
    )
}

export default Index;