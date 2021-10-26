import styles from './styles.module.scss'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

 export function Home() {
    return (
        <>
        <Header />
            <main className={ styles.homeContainer }>
                <div>
                    <h1>Suas músicas estão com saudade</h1>
                    <p>Continue curtindo de onde parou.</p>
                    <a href="#">Acesse o web player</a>
                </div>
            </main>
        <Footer />
        </>
    )
}