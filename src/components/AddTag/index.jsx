import { Container } from './styles'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'

export function AddTag({ value, isNew, ...rest }) {
    return(
        <Container isNew={isNew} >
            <input value={value} type="text" { ...rest } />
            <button
                type="button"
                className={ isNew ? "button-add" : "button-delete" }
            >
                { isNew ? <AiOutlinePlus /> : <AiOutlineClose /> }

            </button>
        </Container>
    )
}