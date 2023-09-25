import { Container } from './styles'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'

export function AddTag({ value, isNew, onClick, ...rest }) {
    return(
        <Container isNew={isNew} >
            <input value={value} type="text" { ...rest } />
            <button
                type="button"
                className={ isNew ? "button-add" : "button-delete" }
                onClick={onClick}
            >
                { isNew ? <AiOutlinePlus /> : <AiOutlineClose /> }

            </button>
        </Container>
    )
}