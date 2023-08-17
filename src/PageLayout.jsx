import NavBar from "./components/NavBar";

export default function PageLayout({children}) {
    {/*The function allows me to have a consitent layout for each, by rendering the navbar, and the page content as a child prop */}
    return(
        <div className="page--container">
            <nav className="navbar">
                <NavBar />
            </nav>
            <main className="page--content">
                {children} {/*Renders out the specific content on each page*/}
            </main>
        </div>
    );
};