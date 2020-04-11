import React , { useState, useEffect }from 'react';
import Header from './components/Header'
import './App.css'
//import background from './assets/background.jpeg'
import api from './services/api'

function App() {

    const [projects, setProjects] = useState([]) 

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    },[])

    async function handleAddProject() {

        const response = await api.post('projects', {             
            title: `Novo projeto ${Date.now()}`,
            owner: "Diego"
        })

        const project = response.data;

        setProjects([...projects, project])
        
    }
    
    return (
        <>
            <Header title="ReactJs">
                <h1>Vai tomar no cu</h1>
                {/*<img src={background} alt="Nada" width={200} height={200} />*/}
            </Header>
            <ul>
                {projects.map((project, index) => <li key={project.id}>{project.title}</li>)}
            </ul> 



            <button onClick={handleAddProject}>Adicionar Projeto</button>           
        </>
    )
}

export default App;

