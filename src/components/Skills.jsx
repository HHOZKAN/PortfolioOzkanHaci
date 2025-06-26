import React from 'react';
// Assurez-vous d'avoir ajouté le lien Devicon dans votre index.html:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, iconClass: "devicon-react-original colored" },
        { name: 'JavaScript', level: 90, iconClass: "devicon-javascript-plain colored" },
        { name: 'HTML/CSS', level: 95, iconClass: "devicon-html5-plain colored" },
        { name: 'Tailwind CSS', level: 90, iconClass: "devicon-tailwindcss-plain colored" },
        { name: 'Bootstrap', level: 80, iconClass: "devicon-bootstrap-plain colored" },
        { name: 'Figma', level: 85, iconClass: "devicon-figma-plain colored" }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, iconClass: "devicon-nodejs-plain colored" },
        { name: 'Express.js', level: 85, iconClass: "devicon-express-original colored" },
        { name: 'PHP', level: 80, iconClass: "devicon-php-plain colored" },
        { name: 'Laravel', level: 80, iconClass: "devicon-laravel-plain colored" },
        { name: 'Symfony', level: 80, iconClass: "devicon-symfony-original colored" },
        { name: 'MongoDB', level: 85, iconClass: "devicon-mongodb-plain colored" }
      ]
    },
    {
      title: 'Outils & DevOps',
      skills: [
        { name: 'Git', level: 90, iconClass: "devicon-git-plain colored" },
        { name: 'Docker', level: 80, iconClass: "devicon-docker-plain colored" }
      ]
    }
  ];

  // Technologies additionnelles
  const additionalTech = [
    { name: 'React Native', iconClass: "devicon-react-original colored" },
    { name: 'Next.js', iconClass: "devicon-nextjs-original colored" },
    { name: 'Sass', iconClass: "devicon-sass-original colored" },
    { name: 'Redux', iconClass: "devicon-redux-original colored" },
    { name: 'Stripe', iconClass: "devicon-stripe-plain colored" },
    { name: 'Flutter', iconClass: "devicon-flutter-plain colored" }
  ];

  // Certifications
  const certifications = [
    { title: 'AWS Certified Developer', year: '2023', iconClass: "devicon-amazonwebservices-original colored" },
    { title: 'Google Analytics Certified', year: '2022', iconClass: "devicon-google-plain colored" },
    { title: 'Meta React Developer', year: '2022', iconClass: "devicon-facebook-plain colored" }
  ];

  const SkillBar = ({ skill }) => {
    return (
      <div className="group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-2xl"><i className={skill.iconClass}></i></span>
            <span className="font-medium text-gray-800">{skill.name}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Du développement front-end au back-end, je maîtrise l’essentiel <br></br>pour créer des projets web complets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>




      </div>
    </section>
  );
};

export default Skills;