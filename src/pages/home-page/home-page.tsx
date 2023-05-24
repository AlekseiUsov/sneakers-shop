//hooks
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store";

//styles 
import styles from './home-page.module.scss'

//Api
import { fetchItems } from "../../store/slices/items-slice";

//Components
import { Items } from "../../components/items/items";
import { ShopBasket } from "../../components/basket/basket";
import { Loader } from "../../ui-kit/loader/loader";

//Selectors
import { itemsSelector } from "../../store/selectors/selectors";


export const HomePage = () => {
    const dispatch = useAppDispatch();
    const { isLoading, items, error } = useAppSelector(itemsSelector);

    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    return (
        <>
            {isLoading && !items && <Loader />}
            {error && <h1>Извините, произошла ошибка...</h1>}
            {items &&
                <div className={styles.wrapper}>
                    <Items items={items} />
                    <ShopBasket />
                </div>
            }
        </>
    )
}