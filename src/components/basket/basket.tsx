//styles
import styles from './basket.module.scss'

//RTK
import { useAppSelector } from '../../store'

//Components
import { BasketItemslist } from './basketItemsList/basketItemsList'
import { BasketOrderInfo } from './basketOrderInfo/basketOrderInfo'

export const ShopBasket = () => {
    const { status } = useAppSelector(state => state.cartStatus)

    return (
        <div className={`${styles.wrapper}  ${status ? styles.wrapperForTablet : ''}`}>
            <BasketItemslist />
            <BasketOrderInfo />
        </div>
    )

}