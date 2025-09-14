// import React from "react";

// function Projects() {
//     return (
//         <section>
//             <h2>Projects</h2>
//             <div className="projects">
//                 <ul>
//                     <div className="project-card">
//                         <li>
//                             <h2>Medium clone:</h2>
//                             <p>A clone of the Medium platform built with React.</p>
//                             <a href="https://github.com/path-tw/medium-code-commanders">View Project</a>
//                         </li>
//                     </div>
//                     <div className="project-card">
//                         <li>
//                             <h2>E-Commerce:</h2>
//                             <p> A fully functional e-commerce application built with React.</p>
//                             <a href="https://github.com/RAKESHGURUGU/E-Commerce">View Project</a>
//                         </li>
//                     </div>
//                 </ul>
//             </div>
//         </section>
//     );
// }

// export default Projects;
import React from "react";

function Projects() {
    return (
        <section>
            <h2>Projects</h2>
            <ul className="projects-list">
                <li className="project-card">
                    <h3>Medium clone</h3>
                    <p>A clone of the Medium platform built with React.</p>
                    <a href="https://github.com/path-tw/medium-code-commanders" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </li>
                <li className="project-card">
                    <h3>E-Commerce</h3>
                    <p>A fully functional e-commerce application built with React.</p>
                    <a href="https://github.com/RAKESHGURUGU/E-Commerce" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Projects;