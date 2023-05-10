import { FC } from "react"

//RTK 
import { useAppDispatch } from "../../store";

//styles
import styles from './item-price.module.scss'

//Icons
import { cartIcon } from '../../assets/icons/index';

//Functions
import { formatePrice } from "../../utils/functions";

//Types
import { TCurrentItem } from "../../utils/types";

//Actions
import { addItem } from "../../store/slices/basket-slice";


export const ItemPrice: FC<TCurrentItem> = (item) => {
    const { price } = item.item;

    const dispatch = useAppDispatch();

    const formatedPrice = price > 999 ? formatePrice(price) : price;

    return (
        <div className={styles.inner}>
            <div
                className={styles.icon}
                onClick={() => dispatch(addItem(item.item))}
            >
                {cartIcon}
            </div>
            <p className={styles.price}>$ {formatedPrice}</p>
        </div>
    )
}