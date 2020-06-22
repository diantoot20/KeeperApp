import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

export default function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [showTrue, setShowTrue] = useState(false); 

    function handleChange(event){
        const {name, value} = event.target
        setNote(currVal => {
            return{
                ...currVal,
                [name]: value
            }
        });
    }

    function handleClick(){
        setShowTrue(true);
    }

    

    function submitNote(event) {
        props.addNote(note);
        setNote({
          title: "",
          content: ""
        });
        setShowTrue(false);
        event.preventDefault();
      }



    return (
        <div>
        <form className="create-note">
            {showTrue && 
                <input 
                    onChange={handleChange} 
                    name="title" 
                    placeholder="Title" 
                    value={note.title}
                    required/>
            }
                
            <textarea 
                onClick={handleClick}
                onChange={handleChange} 
                name="content" 
                placeholder="Take a note..." 
                rows={showTrue ? "3" : "1"} 
                value={note.content}
                required/>
            <Zoom in={showTrue}>
                <Fab onClick={submitNote}><AddIcon /></Fab>
            </Zoom>
        </form>
        </div>
    );
}
