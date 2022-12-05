import './GoodsCard.css';

export default function GoodsCard(props) {
    const image = props.image;
    const name = props.title;
    const price = props.price;

    return (
        <div className="goodsCard">
            <img src={image} alt={name} />
            <div>
                <b>Name:</b> {name}
            </div>
            <div>
                <b>Price:</b> {price}$
            </div>
        </div>
    );
}