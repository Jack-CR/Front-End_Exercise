
import NavBar from '../Components/NavBar/NavBar'
import { Row, Container } from 'react-bootstrap'
import TableComponent from '../Components/Table/TableComponent'

export const IndexPage = () => {

    return (
        <>
            <NavBar />
            <Container>
                <Row className="d-flex justify-content-center mt-5">
                    <TableComponent />
                </Row>
            </Container>
        </>
    )
}

export default IndexPage