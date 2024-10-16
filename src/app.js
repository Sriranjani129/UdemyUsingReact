import Categories from "./components/categories";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Topics from "./components/topics";
import Saleimg from "./components/saleimg";
import Popular from "./components/popular";
import Recommended from "./components/recommended";

function App()
{
    return(
        <>
                <Navbar></Navbar>
                <Categories></Categories>
                <Saleimg></Saleimg>
                <Recommended></Recommended>
                <Topics></Topics>
        <Popular></Popular>
        <Footer></Footer>

        </>
    )
}
export default App