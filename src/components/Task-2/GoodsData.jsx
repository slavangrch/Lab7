import { useState, useEffect } from 'react';
import GoodsCard from './GoodsCard';
import './GoodsData.css';

const GoodsData = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=6&skip=10&")
            .then((response) => response.json())
            .then((data) => setItems(data.products));
    }, []);

    if (!items) {
        return <span>Loading...</span>;
    }

    return (
        <div className="goodsData">
            {items.map(({ id, thumbnail, title, price }) => {
                return (
                    <GoodsCard key={id} image={thumbnail} title={title} price={price} />
                );
            })}
        </div>
    );
}
export default GoodsData;