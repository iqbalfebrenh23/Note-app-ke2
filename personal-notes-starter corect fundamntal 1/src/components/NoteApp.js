import React from "react";
import {Route,Routes} from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import RegisterPage from "../pages/RegisterPage";
// import NoteList from "./NoteList";
// import NoteInput from "./NoteInput";
// import { getAllNotes } from "../utils/index";


class NoteApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            authedUser: null,
        };
    }


    render(){

        if(this.state.authedUser === null) {
            return(
                <div className="note-app">
                    <header className="note-app__header">
                        <h1>Note List :V </h1>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/*" element={<p>Halaman Login</p>} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Routes>
                    </main>
                </div>
            )
        }


        return (
        
            <div className="note-app">
                <header className="note-app__header">
                <h1>Note List :V </h1>
                <Navigation />    
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/add" element={<AddPage />} />
                        <Route path="/notes/:id" element={<DetailPage />} />
                    </Routes>
                </main>
    
            </div>
        );

    }
}

export default NoteApp;