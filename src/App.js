import React from "react"
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note'
import notes from './notes';
function App()
{
    return(
        <div>
            <Header/>
            {notes.map(x=> <Note key={x.key} title={x.title} content={x.content} />
                
            )}
            
            <Footer/>
        </div>
    )
}
export default App

