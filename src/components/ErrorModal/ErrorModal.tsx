import { useContext,useCallback } from "react"
import { WikiContext } from "../../contexts/WikiContext"
import './ErrorModal.css'
import { closeErrorModal } from "../App/actions";
import { Text } from "../../shared/constants";
import { Button } from "../Button/Button";

export function ErrorModal() {
    const {dispatch} = useContext(WikiContext);
    const handleClick = useCallback(() => (dispatch(closeErrorModal())), [dispatch]);
    
    return (
    <div className="modal-background">
        <div className="modal-error">
            <header>
                <h1>Error</h1>
            </header>
            <section>
                <p>{Text.errorMessage1}</p>
                <p>{Text.errorMessage2}</p>
            </section>
            <footer>
                <Button name={Text.close} clickHandler={handleClick} />
            </footer>
        </div>
    </div>    
    )
}