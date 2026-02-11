function Skills(){
    const skills = ["React", "Javascript", "PHP", "MySQL", "Git"]

    return(
        <section id="skills" className="section">
            <h2>Tecnologia</h2>

            <div className="skills">
                {skills.map(skill => (
                    <span key={skill}>{skill}</span>
                ))}
            </div>
        </section>
    )
}

export default Skills