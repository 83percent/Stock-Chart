import StockInfo from '../../data/Stock';

class Stock {
    getStock(name) {
        return StockInfo[name];
    }
}

export default Stock;