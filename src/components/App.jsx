import React, {useState} from "react";
import Header from "./StaticComponents/Header";
import Footer from "./StaticComponents/Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(inputNote){
        setNotes(currNotes=> {
            return [...currNotes, inputNote];
        });
    }

    function deleteNote(id){
        setNotes(currNotes => {
            return currNotes.filter((note, index) => {
                return index !== id;
            })
        });
    }

    return (
        <div>
        <Header />
        <CreateArea addNote={addNote}/>
        {notes.map((listedNote, index) => (
            <Note key={index} id={index} listedNote={listedNote} onDel={deleteNote}/>
        ))}
        <Footer />
        </div>
    );
}

export default App;
