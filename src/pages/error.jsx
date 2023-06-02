import '../styles/pages.css'
import '../components/Botones/BtnAvanRetro.css'
import Retroceder from '../components/Botones/Retroceder'

export default function ErrorPage() {
    return (
        <>
            <div className="error">
                <div><h1>[ERROR]:La página que estás buscando no se ha podido encontrar</h1></div>
                <div><Retroceder text="Volver al inicio" page=""/></div>
            </div>
        </>
    )
} 