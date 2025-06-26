import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'GARAGE404',
      position: 'Développeur Web / Business Developer',
      period: '2024 - 2025',
      location: 'Saint-Etienne, France',
      type: 'Alternance',
      description: 'Cours d’initiation au développement web pour adolescents de quartiers prioritaires et développement d’ateliers robotiques et jeux vidéos.',
      achievements: [
        'Dispense de cours d’initiation au développement web pour jeunes',
        'Acquisition de clients pour ateliers enfants',
        'Conception, développement et maintenance de sites web'
      ],
      technologies: ['PHP', 'Laravel', 'React', 'SQL', 'NoSQL'],
      color: 'blue'
    },
    {
      id: 2,
      company: 'GARAGE404',
      position: 'Stagiaire en Développement Web',
      period: '2023 - 2024',
      location: 'Saint-Etienne, France',
      type: 'Stage',
      description: 'Première immersion dans le développement web avec des projets concrets.',
      achievements: [
        'Découverte du métier de développeur web',
        'Développement de sites web avec des exemples pratiques'
      ],
      technologies: ['PHP', 'Laravel', 'React'],
      color: 'green'
    },
    {
      id: 3,
      company: 'Crédit Agricole',
      position: 'Conseiller de clientèle particuliers',
      period: '2021 - 2023',
      location: 'Macon, France',
      type: 'CDI',
      description: 'Gestion quotidienne de clients et accompagnement des clients en difficultés financières.',
      achievements: [
        'Accompagnement de clients en situation difficile',
        'Analyse de situations financières',
        'Prise de rendez-vous, accueil et gestion courante'
      ],
      technologies: [],
      color: 'purple'
    }
  ];

  const education = [
    {
      school: 'GARAGE 404',
      degree: 'Concepteur Développeur d’Applications',
      period: '2024 - 2025',
      location: 'Saint-Etienne, France',
      description: 'Formation en cours pour devenir concepteur développeur d’applications web et mobiles.'
    },
    {
      school: 'GARAGE404',
      degree: 'Titre DWWM (Développeur Web et Web Mobile) - Niveau Bac+2',
      period: '2023 - 2024',
      location: 'Saint-Etienne, France',
      description: 'Formation intensive pour acquérir les compétences fondamentales en développement web et mobile.'
    },
    {
      school: 'Université Lyon Lumière 2',
      degree: 'Licence Banque, Finance et Assurance',
      period: '2021 - 2022',
      location: 'Lyon, France',
      description: 'Études spécialisées en gestion bancaire et assurances.'
    }
  ];

  const ExperienceItem = ({ experience, index }) => (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

      {/* Timeline dot */}
      <div className={`absolute left-6 top-8 w-4 h-4 rounded-full border-4 border-white shadow-lg bg-${experience.color}-500`}></div>

      {/* Content */}
      <div className="ml-12 sm:ml-20 pb-8 sm:pb-12">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{experience.position}</h3>
              <h4 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">{experience.company}</h4>
            </div>
            <div className="flex flex-col lg:text-right">
              <span className="text-gray-600 font-medium text-sm sm:text-base">{experience.period}</span>
              <span className="text-gray-500 text-xs sm:text-sm">{experience.location}</span>
              <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium mt-2 lg:mt-1 lg:self-end
                ${experience.type === 'CDI' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                {experience.type}
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">{experience.description}</p>

          <div className="mb-6">
            <h5 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Réalisations clés :</h5>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Technologies utilisées :</h5>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        {/* Professional Experience */}
        <div className="mb-12 sm:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Expérience Professionnelle
          </h3>
          <div className="relative">
            {experiences.map((experience, index) => (
              <ExperienceItem key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-gray-50 rounded-3xl p-4 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Formation
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <h5 className="text-base sm:text-lg font-semibold text-blue-600 mb-2">{edu.school}</h5>
                  </div>
                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <span className="text-gray-600 font-medium block text-sm sm:text-base">{edu.period}</span>
                    <span className="text-gray-500 text-xs sm:text-sm">{edu.location}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;