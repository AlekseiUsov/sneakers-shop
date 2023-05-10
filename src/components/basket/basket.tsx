//styles
import styles from './basket.module.scss'

//Components
import { BasketItemslist } from './basketItemsList/basketItemsList'
import { BasketOrderInfo } from './basketOrderInfo/basketOrderInfo'

export const ShopBasket = () => {

    return (
        <div className={styles.wrapper}>
            <h2>My basket</h2>
            <BasketItemslist />
            <BasketOrderInfo />
        </div>
    )

}