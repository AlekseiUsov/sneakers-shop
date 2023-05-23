//hooks
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react"

//Styles 
import styles from './item-page.module.scss'

//Api
import { fetchItem } from "../../store/slices/current-item-slice";

//Components
import { ShopBasket } from "../../components/basket/basket";
import { CurrentItem } from "../../components/current-item/current-item";
import { Loader } from "../../ui-kit/loader/loader";


export const ItemPage = () => {

    const { id } = useParams();

    const { isLoading, currentItem, error } = useAppSelector(state => state.currentItem);
    const { status } = useAppSelector(state => state.cartStatus);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(fetchItem(id))
        }
    }, [dispatch, id])

    return (
        <>
            {isLoading && !currentItem && <Loader />}
            {error && <h1>Извините, произошла ошибка...</h1>}
            {currentItem &&
                <div className={styles.wrapper}>
                    <CurrentItem item={currentItem} />
                    <ShopBasket />
                </div >
            }
        </>
    )
}