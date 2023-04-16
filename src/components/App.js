import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";
import Cards from "./Cards/Cards";
import data from "./data"
function App(){
    const cards = data.map(item => {
        return (
            <Cards
                key={item.id}
                haha={item}
                
            />
        )
    })        
    return (
        <div>
            <NavBar/>
            <Main/>
            <section className="cards-list">
                {cards}
            </section>
            {/* <Cards 
            img="./images/katie-zaferes.png"
            rating={5.0}
            reviewcount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136} 
            /> */}
        </div>
    )
}

export default App;