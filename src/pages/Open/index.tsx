import { MenuPrimary } from '../../components/MenuPrimary'

import styles from './styles.module.scss'

export function Open() {
    return (
        <main className={styles.openContainer}>
            <MenuPrimary />
        </main>
    )
}