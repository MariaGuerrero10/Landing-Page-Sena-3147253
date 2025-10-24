import React from 'react';

const Programs = () => {
  const programs = [
    {
      title: "ADSO",
      description: "Análisis y Desarrollo de Sistemas de Información - Formación en desarrollo de software y gestión de proyectos tecnológicos."
    },
    {
      title: "ANIMACIÓN 3D",
      description: "Creación y desarrollo de animaciones tridimensionales - Domina las herramientas de diseño y animación digital."
    },
    {
      title: "REDES DE DATOS",
      description: "Gestión y administración de redes de comunicación - Especialízate en infraestructura y seguridad de redes."
    }
  ];

  return (
    <section className="section programs" id="programas">
      <h2 className="section-title">PROGRAMAS DE FORMACIÓN</h2>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;