// ============================================================
// ZenFlix - Configuration Page d'Accueil
// ============================================================

const HOME_CONFIG = {
    // === TOP 10 DU MOMENT ===
    top10Ids: [1, 5, 4, 6, 21, 8, 28, 36, 37, 38],

    // === CATÉGORIES (contrôlées par IDs) ===
    categories: [
        {
            id: "top10",
            title: "Top 10 du moment",
            icon: '<i class="fas fa-fire category-icon"></i>',
            type: "ids",
            ids: [1, 56, 5, 4, 6, 21, 8, 28, 30, 31]
        },
        {
            id: "nouveautes",
            title: "Nouveautés 2026",
            icon: '<i class="fas fa-bolt category-icon"></i>',
            type: "filter",
            filter: (m) => m.year === 2026
        },
        {
            id: "series",
            title: "Séries Incontournables",
            icon: '<i class="fas fa-tv category-icon"></i>',
            type: "ids",
            ids: [36, 37, 42, 41, 40]          // Arcane, Game Of Throne, Stranger Things, Squid Game, The Last of Us, Breaking Bad
        },
        {
            id: "animation",
            title: "Animation & Famille",
            icon: '<i class="fas fa-film category-icon"></i>',
            type: "ids",
            ids: [5, 6, 7, 36, 38]             // Toy Story 5, Minions, Jumpers, Super Mario, Zootopie 2
        },
        {
            id: "action",
            title: "Action & Aventure",
            icon: '<i class="fas fa-compass category-icon"></i>',
            type: "ids",
            ids: [3, 8, 9, 10, 11, 12, 13, 14, 22, 25, 27]
        },
        {
            id: "horreur",
            title: "Horreur, Sci-Fi & Thriller",
            icon: '<i class="fas fa-ghost category-icon"></i>',
            type: "ids",
            ids: [1, 4, 21, 28, 29, 30, 37]
        },
        {
            id: "comedie",
            title: "Comédie & Humour",
            icon: '<i class="fas fa-laugh-beam category-icon"></i>',
            type: "ids",
            ids: [16, 17, 18, 19, 20, 21, 26]
        },
        {
            id: "streaming",
            title: "Disponible en Streaming",
            icon: '<i class="fas fa-play-circle category-icon"></i>',
            type: "filter",
            filter: (m) => m.streamLink || (m.seasons && m.seasons.some(s => s.streamLink))
        }
    ]
};

window.HOME_CONFIG = HOME_CONFIG;