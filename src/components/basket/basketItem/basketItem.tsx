import { FC } from "react"

//RTK
import { useAppDispatch } from "../../../store";

//Styles
import styles from './basketItem.module.scss'

//Types
import { TItem } from "../../../utils/types";

//Icons
import { closeIcon, minusIcon, plusIcon } from "../../../assets/icons";

//Functions
import { formatePrice } from "../../../utils/functions";

//Actions
import { decrementCounter, incrementCounter, removeItem } from "../../../store/slices/basket-slice";


export const BasketItem: FC<TItem> = (item) => {

    const dispatch = useAppDispatch();

    const { title, price, image, counter } = item;

    const totalForAItem = price * counter;

    const formatedPrice = totalForAItem > 999 ? formatePrice(totalForAItem) : totalForAItem;


    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <img src={image} alt={`фото кроссовок ${title}`} />
            </div>
            <div className={styles.block}>
                <p className={styles.name}>{title}</p>
                <div className={styles.counter}>
                    <div
                        className={styles.minus}
                        onClick={() => dispatch(decrementCounter(item))}
                    >{minusIcon}</div>
                    <span>{counter}</span>
                    <div
                        onClick={() => dispatch(incrementCounter(item))}
                        className={styles.plus}
                    >{plusIcon}</div>
                </div>
                <p>$ {formatedPrice}</p>
            </div>
            <div onClick={() => dispatch(removeItem(item))}>{closeIcon}</div>
        </div>
    )
}