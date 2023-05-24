import { FC } from "react";
import { useAppDispatch } from "../../store";

//Types
import { TCurrentItem } from "../../utils/types";

//hooks
import { Link } from "react-router-dom";

//styles
import styles from './current-item.module.scss'

//Ui
import { ItemPrice } from "../../ui-kit/item-price/item-price";

//Action
import { removeCurrentItem } from "../../store/slices/current-item-slice";

export const CurrentItem: FC<TCurrentItem> = (item) => {
    const { largeImage, title, number } = item.item;

    const dispath = useAppDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper} >
                <Link
                    to='/'
                    className={styles.button}
                    onClick={() => dispath(removeCurrentItem(item))}
                >Back in catalog</Link>
                <div className={styles.image}>
                    <img src={largeImage} alt={`фото кроссовок ${title}`} />
                </div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.number}>{`Item model number: ${number}`}</p>
                <ItemPrice item={item.item} />
            </div>
        </div>
    )
}