import React, { useState } from 'react';
import { Menu, X, ExternalLink, Mail, Linkedin, ArrowDown, Shield, Database, Network, Code2 } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      date: 'Nov 2024 - Avr 2025',
      title: 'Stage - Projet Anti-Phishing en Deep Learning',
      company: 'INAWE Group',
      location: 'Champs-sur-Marne',
      points: [
        'Analyse des besoins en sécurité',
        'Conception de l\'architecture anti-phishing',
        'Collecte, traitement et labellisation des données',
        'Développement et entraînement des modèles'
      ]
    },
    {
      date: 'Nov 2022 - Avr 2023',
      title: 'Stage Chef de Projet',
      company: 'INAWE Group',
      location: 'Champs-sur-Marne',
      points: [
        'Cartographie des vulnérabilités et menaces',
        'Mise en œuvre de politiques de sécurité',
        'Création et gestion de site web',
        'Traitement de données avec Python'
      ]
    }
  ];

  const projects = [
    {
      title: 'Création de Site ERP pour PME-SI',
      date: 'Projet Personnel - En cours',
      school: 'Projet Autonome',
      description: 'Développement d\'une plateforme ERP modulaire dédiée aux PME, permettant la gestion intégrée des ressources (RH, stocks, finances, CRM). Architecture cloud-native avec authentification sécurisée et tableaux de bord décisionnels.',
      skills: ['React', 'Node.js', 'PostgreSQL', 'Architecture ERP', 'Gestion de projet', 'Sécurité applicative'],
      icon: Code2
    },
    {
      title: 'Optimisation d\'un Système d\'Information',
      date: 'Fév - Avr 2024',
      school: 'EPSI Paris',
      description: 'Diagnostic complet d\'un SI avec alignement stratégique, analyse des performances et recommandations de sécurité.',
      skills: ['Gestion de projet', 'Cybersécurité', 'Analyse des risques'],
      icon: Shield
    },
    {
      title: 'Informatique Décisionnel d\'un S.I',
      date: 'Mai - Juil 2023',
      school: 'EPSI Paris',
      description: 'Conception d\'une architecture BI/Big Data avec modélisation statistique et solutions Machine Learning.',
      skills: ['Data Management', 'Business Intelligence', 'Python', 'Power BI'],
      icon: Database
    },
    {
      title: 'Architecture Cloud et S.I Sécurisé',
      date: 'Fév - Mar 2023',
      school: 'EPSI Paris',
      description: 'Déploiement d\'une infrastructure virtualisée sécurisée avec authentification centralisée et stockage cloud.',
      skills: ['VMware', 'Cloud Computing', 'Administration Systèmes', 'Sécurité'],
      icon: Network
    }
  ];

  const skills = {
    'Sécurité & Monitoring': ['Firewall (PfSense, Iptables)', 'Nessus', 'Nagios', 'Zabbix', 'Supervision proactive'],
    'Systèmes': ['Linux (Ubuntu, Debian, CentOS)', 'Windows Server', 'Active Directory', 'LDAP'],
    'Réseaux': ['LAN, WAN, VLAN', 'TCP/IP', 'DNS, DHCP', 'VPN', 'VoIP, ToIP, SIP'],
    'Langages & Scripts': ['Python', 'Bash', 'PowerShell', 'SQL', 'HTML/CSS'],
    'Bases de données': ['MySQL', 'PostgreSQL', 'SQL Server'],
    'Virtualisation & Cloud': ['VMware', 'VirtualBox']
  };

  const articles = [
    {
      title: 'Introduction aux Pare-feu et à la Détection des Menaces',
      excerpt: 'Découvrez les principes fondamentaux des pare-feu, les différents types de menaces et comment les détecter efficacement.',
      date: '15 Jan 2025',
      readTime: '5 min'
    },
    {
      title: 'Deep Learning pour la Détection du Phishing',
      excerpt: 'Exploration des techniques de Deep Learning pour automatiser la détection des emails de phishing.',
      date: '20 Déc 2024',
      readTime: '8 min'
    },
    {
      title: 'Gestion des Accès et Authentification Centralisée',
      excerpt: 'Mise en place d\'une architecture d\'authentification sécurisée avec Active Directory et LDAP.',
      date: '10 Déc 2024',
      readTime: '6 min'
    }
  ];

  const formations = [
    {
      degree: 'Mastère expert en Informatique et Système d\'Information',
      school: 'EPSI Paris',
      date: 'Sep 2022 - Sep 2024'
    },
    {
      degree: 'Licence Professionnelle en Systèmes, Réseaux et Télécommunications',
      school: 'UCAD - Ecole Supérieure Polytechnique Dakar',
      date: '2020 - 2021'
    },
    {
      degree: 'Diplôme Supérieur Technique en Systèmes, Réseaux et Télécommunications',
      school: 'UCAD - Ecole Supérieure Polytechnique Dakar',
      date: '2018 - 2020'
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold tracking-tight">
              <span className="text-cyan-400">TK</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'timeline', 'projects', 'skills', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    activeSection === item ? 'text-cyan-400' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item === 'home' ? 'Accueil' : item === 'about' ? 'À propos' : item === 'timeline' ? 'Parcours' : item === 'projects' ? 'Projets' : item === 'skills' ? 'Compétences' : item === 'blog' ? 'Blog' : 'Contact'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-800">
              {['home', 'about', 'timeline', 'projects', 'skills', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-sm text-slate-400 hover:text-slate-200"
                >
                  {item === 'home' ? 'Accueil' : item === 'about' ? 'À propos' : item === 'timeline' ? 'Parcours' : item === 'projects' ? 'Projets' : item === 'skills' ? 'Compétences' : item === 'blog' ? 'Blog' : 'Contact'}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6 inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-0.5">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-2xl font-bold">
                TK
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Toumani Kamara
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-4">
            Analyste SOC Junior | Cybersécurité & Infrastructure
          </p>
          
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">
            Curieux, rigoureux et réactif. Je développe des compétences en analyse de menaces, investigation et automatisation de la détection pour contribuer à la défense des SI.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <a href="mailto:toumanikamara9898@gmail.com" className="px-8 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-colors">
              Me Contacter
            </a>
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-colors">
              Voir Mes Projets
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://linkedin.com/in/toumani-kamara" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:toumanikamara9898@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">À Propos</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Passionné par la cybersécurité et l'infrastructure IT, je suis un professionnel en début de carrière avec une solide formation académique et une expérience pratique en analyse de menaces et gestion de systèmes d'information.
              </p>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Ma spécialité réside dans la conception d'architectures sécurisées, la détection des menaces et l'automatisation des processus de sécurité.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Mes Atouts</h3>
                <div className="space-y-2">
                  <p className="text-slate-300"><span className="text-cyan-400">→</span> Discipline et organisation rigoureuse</p>
                  <p className="text-slate-300"><span className="text-cyan-400">→</span> Approche simplifiée des problèmes complexes</p>
                  <p className="text-slate-300"><span className="text-cyan-400">→</span> Apprentissage continu et curiosité technique</p>
                  <p className="text-slate-300"><span className="text-cyan-400">→</span> Bilingue français/anglais (professionnel)</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-slate-800 hover:border-cyan-400/30 transition-colors">
                <p className="text-slate-400 mb-2">📍 Localisation</p>
                <p className="text-slate-100 font-semibold">Noisy-le-Grand (93), Île-de-France</p>
                <p className="text-slate-500 text-sm">Télétravail ou présentiel</p>
              </div>

              <div className="p-6 rounded-lg border border-slate-800 hover:border-cyan-400/30 transition-colors">
                <p className="text-slate-400 mb-2">📱 Contact</p>
                <p className="text-slate-100 font-semibold">+33 7 82 28 56 12</p>
                <p className="text-slate-500 text-sm">toumanikamara9898@gmail.com</p>
              </div>

              <div className="p-6 rounded-lg border border-slate-800 hover:border-cyan-400/30 transition-colors">
                <p className="text-slate-400 mb-2">🎯 Intérêts</p>
                <p className="text-slate-300 text-sm">Documentation technique • Lecture • Football • Innovation en cybersécurité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Parcours Professionnel & Formations</h2>

          <div className="space-y-12">
            {/* Experiences */}
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-8">Expériences</h3>
              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-cyan-400 rounded-full mt-2"></div>
                      {idx < experiences.length - 1 && <div className="w-0.5 h-24 bg-slate-700 mt-4"></div>}
                    </div>
                    <div className="pb-8">
                      <p className="text-cyan-400 text-sm font-semibold">{exp.date}</p>
                      <h4 className="text-xl font-bold mt-1 mb-1">{exp.title}</h4>
                      <p className="text-slate-400 mb-3">{exp.company} • {exp.location}</p>
                      <ul className="space-y-2">
                        {exp.points.map((point, pidx) => (
                          <li key={pidx} className="text-slate-300 text-sm flex gap-2">
                            <span className="text-cyan-400">›</span> {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formations */}
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-8 mt-8">Formations</h3>
              <div className="space-y-6">
                {formations.map((formation, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                      {idx < formations.length - 1 && <div className="w-0.5 h-20 bg-slate-700 mt-3"></div>}
                    </div>
                    <div className="pb-6">
                      <p className="text-blue-400 text-sm font-semibold">{formation.date}</p>
                      <h4 className="text-lg font-bold mt-1">{formation.degree}</h4>
                      <p className="text-slate-400 text-sm">{formation.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Projets Académiques</h2>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div key={idx} className="p-8 rounded-lg border border-slate-800 hover:border-cyan-400/50 transition-all hover:bg-slate-900/30 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-slate-500">{project.date} • {project.school}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, sidx) => (
                      <span key={sidx} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Compétences Techniques</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="p-6 rounded-lg border border-slate-800 hover:border-cyan-400/30 transition-colors">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">{category}</h3>
                <div className="space-y-3">
                  {items.map((item, sidx) => (
                    <div key={sidx}>
                      <p className="text-slate-300 text-sm mb-2">{item}</p>
                      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          style={{width: `${75 + Math.random() * 25}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Articles Techniques</h2>

          <div className="grid md:grid-cols-1 gap-6">
            {articles.map((article, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-slate-800 hover:border-cyan-400/50 transition-all hover:bg-slate-900/30 group cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">{article.title}</h3>
                  <ExternalLink size={20} className="text-slate-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                </div>
                
                <p className="text-slate-400 text-sm mb-4">{article.excerpt}</p>
                
                <div className="flex gap-4 text-xs text-slate-500">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900/50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Discutons Ensemble</h2>
          
          <p className="text-lg text-slate-400 mb-12">
            Vous cherchez un analyste SOC passionné par la cybersécurité ? Contactez-moi pour discuter de vos besoins en sécurité IT.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:toumanikamara9898@gmail.com"
              className="px-8 py-4 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Envoyer un Email
            </a>
            <a 
              href="https://linkedin.com/in/toumani-kamara"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-colors flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            <p>© 2025 Toumani Kamara. Tous droits réservés.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
