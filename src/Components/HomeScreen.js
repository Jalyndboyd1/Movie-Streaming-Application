import "./css/HomeScreen.css"
import Nav from "./Nav"
import Banner from "./Banner"

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            {/* Rows.JS */}
        </div>
    )
}

export default HomeScreen