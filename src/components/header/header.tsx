import styles from './header.module.scss';

//Router
import { NavLink } from 'react-router-dom'

//RTK
import { useAppSelector, useAppDispatch } from '../../store';

//Icons
import { logoIcon, cartIcon } from '../../assets/icons/index';

//Actions 
import { toggleStatus } from '../../store/slices/cart-slice';

//Functions
import { countItems } from '../../utils/functions';

export const Header = () => {
    const dispath = useAppDispatch();

    const { items } = useAppSelector(state => state.basket);
    const counterItems = countItems(items);

    return (
        <header className={styles.wrapper}>
            <NavLink to='/' className={styles.logo}>
                {logoIcon}
            </NavLink>
            <div className={styles.card}
                onClick={() => dispath(toggleStatus())}
            >
                {counterItems
                    ? <span className={styles.counter}>
                        {counterItems}
                    </span>
                    : null
                }
                {cartIcon}
            </div>

        </header>
    )
}