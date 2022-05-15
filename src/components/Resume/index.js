import React from 'react';
import resume from '../../assets/documents/resume.docx'

function Resume() {
    return (
        <div>
            <a href={resume}>
                Click here to download my resume
            </a>
            <h3> My Skills </h3>
            <ul>
                <li>
                    Node.js
                </li>
                <li>
                    Express
                </li>
                <li>
                    Handlebars
                </li>
                <li>
                    React
                </li>
                <li>
                    SQL
                </li>
                <li>
                    MongoDB
                </li>
            </ul>
        </div>
    );
}

export default Resume;