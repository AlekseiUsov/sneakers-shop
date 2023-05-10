import styles from './header.module.scss';

//Router
import { NavLink } from 'react-router-dom'

//RTK
import { useAppSelector } from '../../store';

//Icons
import { logoIcon, cartIcon } from '../../assets/icons/index';

//Functions
import { countItems } from '../../utils/functions';

export const Header = () => {
    const { items } = useAppSelector(state => state.basket);
    const counterItems = countItems(items);

    return (
        <div className={styles.wrapper}>
            <NavLink to='/' className={styles.logo}>
                {logoIcon}
            </NavLink>
            <div className={styles.card}>
                {counterItems
                    ? <span className={styles.counter}>
                        {counterItems}
                    </span>
                    : null
                }
                {cartIcon}
            </div>

        </div>
    )
}