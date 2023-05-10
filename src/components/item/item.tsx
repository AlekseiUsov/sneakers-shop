import { FC } from "react"
import { Link } from "react-router-dom";

//styles
import styles from './item.module.scss'

//Types
import { TItem } from "../../utils/types"

//Components
import { ItemPrice } from "../../ui-kit/item-price/item-price";


export const Item: FC<TItem> = (item) => {

    const { title, image } = item;

    return (
        <div className={styles.wrapper}>
            <Link
                to={`/items/${item.id}`}
                className={styles.image}
            >
                <img src={image} alt={`фото кроссовок ${title}`} />
            </Link>
            <h3 className={styles.title}>{title}</h3>
            <ItemPrice item={item} />
        </div>
    )
}