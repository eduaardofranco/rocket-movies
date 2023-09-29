import { Container } from './styles'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'

export function AddTag({ value, isnew, onClick, ...rest }) {
    return(
        <Container isnew={isnew} >
            <input value={value} type="text" { ...rest } />
            <button
                type="button"
                className={ isnew ? "button-add" : "button-delete" }
                onClick={onClick}
            >
                { isnew ? <AiOutlinePlus /> : <AiOutlineClose /> }

            </button>
        </Container>
    )
}