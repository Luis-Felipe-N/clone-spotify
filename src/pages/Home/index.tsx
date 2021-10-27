import styles from './styles.module.scss'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { useState } from 'react'

 export function Home() {
    const [ user, setUser ] = useState(true)

    return (
        <>
        <Header />
           { user ? (
                <main className={ styles.homeContainerLogged }>
                    <div>
                        <h1>Suas músicas estão com saudade</h1>
                        <p>Continue curtindo de onde parou.</p>
                        <a href="#">Acesse o web player</a>
                    </div>
                </main>
           ) : (
                <main className={ styles.homeContainer }>
                    <div>
                        <h1     >Escutar muda tudo</h1>
                        <p>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
                        <a href="#">Acesse o web player</a>
                    </div>
                </main>
           )}
        <Footer />
        </>
    )
}