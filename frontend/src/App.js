import {BrowserRouter,Routes,Route} from "react-router-dom";
// we import all usefull component

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";


function App() {
    return (
        <BrowserRouter>
        <AppContext>
            {/* all components under <AppContext> are a children of
            this and we define those state under AppContext are easyily aceess in those components */}
            <Header />
            <Routes>
                {/* route means pages .we create those many routes for that many pages. */}
                {/* Route takes two props 1st one is path and second one is element */}
                <Route path="/" element={<Home />}/>
                <Route path="/category/:id" element={<Category />}/>
                <Route path="/product/:id" element={<SingleProduct />}/>
            </Routes>
            <Newsletter />
            <Footer />
        </AppContext>
        </BrowserRouter>
    );
}

export default App;
