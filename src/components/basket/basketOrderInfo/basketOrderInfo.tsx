import { useAppSelector } from '../../../store'
import { formatePrice } from '../../../utils/functions';

//Styles
import styles from './basketOrderInfo.module.scss'


export const BasketOrderInfo = () => {
    const { tax, shipping, items } = useAppSelector(state => state.basket)

    const subtotal = items.reduce((acc, item) => acc += item.counter * item.price, 0);
    const formatedSubTotal = subtotal >= 1000 ? formatePrice(subtotal) : subtotal;

    const total = tax + subtotal + shipping;
    const formatedTotal = total >= 1000 ? formatePrice(total) : total;


    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <p className={styles.text}>Subtotal</p>
                <p className={styles.price}>
                    {subtotal === 0
                        ? '-'
                        : <>${formatedSubTotal}</>
                    }
                </p>
            </div>
            <div className={styles.inner}>
                <p className={styles.text}>Tax</p>
                <p className={styles.price}>
                    {subtotal === 0
                        ? '-'
                        : <>${tax}</>
                    }</p>
            </div>
            <div className={styles.inner}>
                <p className={styles.text}>Shipping</p>
                <p className={styles.price}>
                    {subtotal === 0
                        ? '-'
                        : <>${shipping}</>
                    }
                </p>
            </div>
            <div className={styles.inner}>
                <h2 className={styles.text}>Total</h2>
                <h2 className={styles.price}>
                    {subtotal === 0
                        ? '-'
                        : <>${formatedTotal}</>
                    }</h2>
            </div>
        </div>
    )

}