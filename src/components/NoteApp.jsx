import React from "react";
import { Routes, Route } from "react-router-dom";
import NoteNav from "./NoteNav";
import HomePage from "../pages/HomePage";
import ArchivePage from "../pages/ArchivePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";


function NoteApp() {
    return (
        <div className="app-container">
            <header className="navigation">
                <NoteNav/>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/notes/archive" element={<ArchivePage/>}/>
                    <Route path="/notes/add" element={<AddPage/>}/>
                    <Route path="/notes/:id" element={<DetailPage/>}/>
                </Routes>
            </main>
        </div>
    )
}


export default NoteApp;