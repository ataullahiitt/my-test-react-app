import LoginPage from "./pages/login";
import SignupPage from "./pages/sign-up";
import Headers from "./components/headers";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";


const PageNotFound = () => {

    return <>'404 - page not found !'</>
}


function App() {

    return (
        <>
            <Headers />
            <Container>
                <Routes>
                    <Route path="/" />
                    <Route path="/login" Component={LoginPage} />
                    <Route path="/sign-up" Component={SignupPage} />
                    <Route path="*" Component={PageNotFound} />
                </Routes>
            </Container>

        </>
    )
}

export default App
