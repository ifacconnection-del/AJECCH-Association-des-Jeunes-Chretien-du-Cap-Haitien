import { Thought, Post, Event, Idea } from '@types/index';

export const INITIAL_THOUGHT: Thought = {
  verse: "Romains 12:2",
  quote: "« Ne vous conformez pas au siècle présent, mais soyez transformés par le renouvellement de l'intelligence, afin que vous discerniez quelle est la volonté de Dieu, ce qui est bon, agréable et parfait. »",
  reflection: "En tant que jeunes leaders capois, notre appel est de refuser la médiocrité ambiante. L'excellence intellectuelle et la consécration spirituelle doivent marcher ensemble pour transformer la cité du Cap-Haïtien.",
  author: "Révérend Marcel Edner Verniot (Président)",
  action: "Passez au moins 30 minutes chaque jour cette semaine à lire un livre enrichissant et à prier pour le Cap-Haïtien.",
  prayer: "Seigneur, renouvelle notre intelligence et donne à la jeunesse d'AJECCH la force d'impacter positivement notre nation."
};

export const INITIAL_POSTS: Post[] = [
  {
    id: "post-1",
    author: "AJECCH Officiel",
    badge: "Champion 4VEH",
    date: "Il y a 2 jours",
    content: "🎉 Célébration officielle ! L'AJECCH rend grâce à Dieu pour la grande victoire de la 34ème édition du jeu de Génie 'Rendez-vous à Salut Match' de la Radio 4VEH ! Bravo à toute l'équipe blanche !",
    likes: 245,
    shares: 48,
    category: "Sport & Esprit"
  },
  {
    id: "post-2",
    author: "AJECCH Officiel",
    badge: "Événement",
    date: "Il y a 5 jours",
    content: "📢 Grand Lancement Officiel à l'Auditorium de l'Alliance Française du Cap-Haïtien. Un moment mémorable avec le conférencier Altiery Marc Maxi et nos artistes invités.",
    likes: 189,
    shares: 32,
    category: "Culture"
  }
];

export const INITIAL_EVENTS: Event[] = [
  {
    id: "ev-1",
    title: "Tournoi Inter-Églises de Génie & Sport",
    date: "15 Octobre 2026",
    location: "Alliance Française, Cap-Haïtien",
    desc: "Rencontre fraternelle et intellectuelle réunissant les jeunes des différentes communautés évangéliques.",
    status: "Inscriptions Ouvertes"
  },
  {
    id: "ev-2",
    title: "Atelier de Formation au Digital & Codage",
    date: "28 Novembre 2026",
    location: "Siège AJECCH, Cap-Haïtien",
    desc: "Initiation aux technologies du web et à l'intelligence artificielle pour les jeunes professionnels.",
    status: "Bientôt"
  }
];

export const INITIAL_IDEAS: Idea[] = [
  {
    id: "id-1",
    title: "Bibliothèque Numérique Chrétienne",
    author: "Jean-Paul M.",
    votes: 42,
    desc: "Créer un accès gratuit à des PDF et livres audio chrétiens d'étude biblique."
  },
  {
    id: "id-2",
    title: "Équipe de Secourisme Communautaire",
    author: "Sarah B.",
    votes: 29,
    desc: "Former 20 jeunes de l'AJECCH aux premiers secours pour intervenir au Cap-Haïtien."
  }
];
