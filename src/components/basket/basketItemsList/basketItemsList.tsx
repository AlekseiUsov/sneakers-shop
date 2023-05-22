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
            <h2 className={styles.title}>My basket</h2>
            <div className={styles.list}>
                {!items.length
                    ? null
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
        </div>
    )
}