//RTK
import { useAppSelector } from "../../../store";

//Components
import { BasketItem } from "../basketItem/basketItem";

//Styles
import styles from './basketItemsList.module.scss'


export const BasketItemslist = () => {
    const { items } = useAppSelector(state => state.basket);

    return (
        <div className={styles.wrapper}>
            {!items.length
                ? <h3>* Здесь будут ваши заказы *</h3>
                : <>
                    {items
                        .map((item) => (
                            <BasketItem
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
                </>
            }
        </div>
    )
}