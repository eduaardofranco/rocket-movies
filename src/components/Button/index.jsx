import { Container } from './styles'

export function Button({ icon: Icon, title, loading = false, ...rest }) {
    return(
        <Container
            type="button"
            disabled={loading}
            >
                {Icon && <Icon />}
                { loading ? 'Loading...' : title }
        </Container>
    )
}