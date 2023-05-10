import { FC } from "react"
import styles from './items.module.scss'
import { TItems } from "../../utils/types"
import { Item } from "../item/item"

export const Items: FC<TItems> = ({ items }) => {

    return (
        <div className={styles.wrapper}>
            {items
                .map((item) => (
                    <Item
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
    )
}