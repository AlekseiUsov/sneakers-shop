//styles
import styles from './basket.module.scss'

//Components
import { BasketItemslist } from './basketItemsList/basketItemsList'
import { BasketOrderInfo } from './basketOrderInfo/basketOrderInfo'

export const ShopBasket = () => {

    return (
        <div className={styles.wrapper}>
            <BasketItemslist />
            <BasketOrderInfo />
        </div>
    )

}