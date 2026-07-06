// ============================================================
// ZenFlix - script.js (avec Supabase)
// Client Supabase disponible via window.ZENFLIX_SUPABASE
// ============================================================

// Raccourci pour le client Supabase
var sb = window.ZENFLIX_SUPABASE;

// ===== DONNÉES DES FILMS (locales) =====
var defaultMovies = [
    {
        id: 1, title: "Predator Badlands", year: 2025,
        genres: ["Action", "Science-Fiction", "Thriller"],
        poster: "PredatorBadlands.png",
        backdrop: "PredatorBadlands.png",
        description: "Dans les badlands d'une planète lointaine, un chasseur Predator redoutable traque sa proie la plus dangereuse à ce jour.",
        duration: "106 min", language: "MULTI", quality: "HDLight 1080p (x265)", size: "3.51 GB",
        link: "https://1fichier.com/?xcayhbhr9oljem69yjl9&af=5010551",
        dateAdded: "2025-11-05", featured: true
    },
    {
        id: 2, title: "Aladdin", year: 1993,
        genres: ["Aventure", "Fantastique", "Romance"],
        poster: "Aladdin.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/bga3iolsXgLhSStmpy5jR17lsNW.jpg",
        description: "Aladdin, un jeune homme des rues, tombe amoureux de la belle princesse Jasmine. Il découvre une lampe magique contenant un génie.",
        duration: "90 min", language: "MULTI", quality: "HDLight 1080p (x265)", size: "2.96 GB",
        link: "https://1fichier.com/?j3vrcva3e8knfssz7t78&af=5010551",
        dateAdded: "1993-11-24", featured: false
    },
    {
        id: 3, title: "Jumpers", year: 2026,
        genres: ["Animation", "Aventure", "Comédie"],
        poster: "Jumpers.webp",
        backdrop: "https://image.tmdb.org/t/p/original/hoppers_backdrop.jpg",
        description: "Mabel, une jeune fille passionnée par les animaux, accepte de tester une invention top secrète : un système qui transfère son esprit dans un castor robot.",
        duration: "104 min", language: "MULTI", quality: "HDLight 1080p (x265)", size: "3.41 GB",
        link: "https://1fichier.com/?2u9ay0rb0527524jopoc&af=5010551",
        dateAdded: "2026-03-04", featured: true
    },
    {
        id: 4, title: "Shining", year: 1980,
        genres: ["Horreur", "Drame", "Thriller"],
        poster: "Shining.webp",
        backdrop: "https://image.tmdb.org/t/p/original/shining_backdrop.jpg",
        description: "Jack Torrance accepte un emploi de gardien d'hôtel isolé durant l'hiver, accompagné de sa femme et de son fils télépathe. Peu à peu, l'endroit maudit va le pousser vers la folie et la violence.",
        duration: "146 min", language: "VOSTFR", quality: "HDLight 1080p (x265)", size: "3.20 GB",
        link: "https://1fichier.com/?shiningplaceholder&af=5010551",
        dateAdded: "1980-05-23", featured: false
    },
    {
        id: 5, title: "Black Swan", year: 2010,
        genres: ["Drame", "Thriller", "Fantastique"],
        poster: "BlackSwan.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/blackswan_backdrop.jpg",
        description: "Nina, une danseuse perfectionniste au sein d'une compagnie de ballet new-yorkaise, décroche le rôle principal du Lac des cygnes. Sa quête obsessionnelle de la perfection la fait sombrer dans une spirale de paranoïa destructrice.",
        duration: "108 min", language: "VOSTFR", quality: "HDLight 1080p (x265)", size: "2.85 GB",
        link: "https://1fichier.com/?blackswanplaceholder&af=5010551",
        dateAdded: "2010-12-22", featured: false
    },
    {
        id: 6, title: "Toy Story 5", year: 2026,
        genres: ["Animation", "Aventure", "Comédie", "Famille"],
        poster: "ToyStory5.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/toystory5_backdrop.jpg",
        description: "Bonnie, désormais âgée de 8 ans, délaisse ses jouets traditionnels pour une tablette tactile. Woody, Buzz l'Éclair et leurs amis vont devoir rivaliser d'ingéniosité pour reconquérir le cœur de leur propriétaire face aux nouvelles technologies.",
        duration: "100 min", language: "MULTI", quality: "HDLight 1080p (x265)", size: "3.60 GB",
        link: "https://1fichier.com/?toystory5placeholder&af=5010551",
        dateAdded: "2026-06-17", featured: true
    },
    {
        id: 7, title: "Des Minions et des Monstres", year: 2026,
        genres: ["Animation", "Comédie", "Famille"],
        poster: "MinionsMonstres.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/minionsmonstres_backdrop.jpg",
        description: "Les Minions sont de nouveau à la recherche d'un génie du mal à servir, mais leur quête va les mener à découvrir un tout nouveau monde... Hollywood, envahi de monstres hauts en couleur !",
        duration: "95 min", language: "MULTI", quality: "HDLight 1080p (x265)", size: "3.15 GB",
        link: "https://1fichier.com/?minionsmonstresplaceholder&af=5010551",
        dateAdded: "2026-06-24", featured: true
    },
    {
        id: 8, title: "Scary Movie", year: 2026,
        genres: ["Comédie", "Horreur", "Parodie"],
        poster: "ScaryMovie.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/scarymovie6_backdrop.jpg",
        description: "Le sixième film de la saga culte revient après 13 ans d'absence pour parodier les récentes propositions horrifiques du cinéma : Scream, M3GAN, Sinners, Get Out, Smile, The Substance et Terrifier n'y échapperont pas !",
        duration: "97 min", language: "MULTI", quality: "HDLight 1080p (x265)", size: "3.05 GB",
        link: "https://1fichier.com/?scarymovie6placeholder&af=5010551",
        dateAdded: "2026-06-03", featured: true
    },
    {
        id: 9, title: "Disclosure Day", year: 2026,
        genres: ["Science-Fiction", "Drame", "Mystère"],
        poster: "DisclosureDay.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/disclosureday_backdrop.jpg",
        description: "Steven Spielberg s'intéresse à nouveau à la vie extraterrestre dans ce thriller mystérieux porté par Emily Blunt et Josh O'Connor, autour de l'existence avérée, ou non, de présences étrangères sur la planète.",
        duration: "128 min", language: "VOSTFR", quality: "HDLight 1080p (x265)", size: "4.10 GB",
        link: "https://1fichier.com/?disclosuredayplaceholder&af=5010551",
        dateAdded: "2026-06-03", featured: true
    },
    {
        id: 10, title: "La Bataille de Gaulle - L'Âge de fer", year: 2026,
        genres: ["Drame", "Historique", "Biopic"],
        poster: "BatailleDeGaulle.webp",
        backdrop: "https://image.tmdb.org/t/p/original/bataillegaulle_backdrop.jpg",
        description: "Premier volet d'un diptyque ambitieux sur la Seconde Guerre mondiale, retraçant l'action du général de Gaulle à la tête de la France Libre, entre relations diplomatiques complexes et éveil de la Résistance.",
        duration: "145 min", language: "MULTI", quality: "HDLight 1080p (x265)", size: "4.30 GB",
        link: "https://1fichier.com/?bataillegaulle1placeholder&af=5010551",
        dateAdded: "2026-06-03", featured: false
    },
    {
        id: 11, title: "Le Vertige", year: 2026,
        genres: ["Comédie", "Science-Fiction", "Animation"],
        poster: "LeVertige.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/levertige_backdrop.jpg",
        description: "Premier film d'animation de Quentin Dupieux : un homme rend visite à son meilleur ami pour lui annoncer une terrible nouvelle, l'humanité vivrait dans une simulation. Un mélange unique entre Matrix et l'univers loufoque de Dupieux.",
        duration: "80 min", language: "VF", quality: "HDLight 1080p (x265)", size: "2.10 GB",
        link: "https://1fichier.com/?levertigeplaceholder&af=5010551",
        dateAdded: "2026-06-10", featured: false
    },
];

var moviesData = JSON.parse(localStorage.getItem('zenflix_movies')) || defaultMovies;
var currentUser = null;
var currentAuthTab = 'login';
var suggestionsData = [];

// ============================================================
// VÉRIFICATION DU CLIENT SUPABASE
// ============================================================

if (!sb) {
    console.error('[ZenFlix] ❌ Supabase client non initialisé ! Vérifie le chargement du SDK.');
} else {
    console.log('[ZenFlix] ✅ Supabase client prêt');
}

// ============================================================
// AUTHENTIFICATION
// ============================================================

async function handleAuth(e) {
    e.preventDefault();
    
    if (!sb) {
        alert("❌ Supabase n'est pas initialisé. Recharge la page.");
        return;
    }

    var username = document.getElementById('authUsername').value.trim();
    var pass = document.getElementById('authPassword').value;

    console.log('[ZenFlix] Auth attempt:', username, currentAuthTab);

    if (currentAuthTab === 'register') {
        // Vérifications locales
        if (username.length < 2) { alert("Le pseudo doit contenir au moins 2 caractères."); return; }
        if (pass.length < 3) { alert("Le mot de passe doit contenir au moins 3 caractères."); return; }

        // Créer un email unique basé sur le pseudo
        var fakeEmail = 'user_' + username.toLowerCase().replace(/[^a-z0-9]/g, '') + '_' + Date.now() + '@zenflix.com';

        console.log('[ZenFlix] Signing up with:', fakeEmail);

        try {
            var result = await sb.auth.signUp({
                email: fakeEmail,
                password: pass,
                options: { data: { username: username } }
            });

            console.log('[ZenFlix] SignUp result:', result);

            if (result.error) {
                alert("❌ Erreur : " + result.error.message);
                return;
            }

            if (result.data.user) {
                var isAdmin = window.ADMIN_USERNAMES.indexOf(username) !== -1;
                console.log('[ZenFlix] Creating profile, isAdmin:', isAdmin);

                var profileResult = await sb.from('profiles').upsert([{
                    id: result.data.user.id,
                    username: username,
                    email: fakeEmail,
                    is_admin: isAdmin
                }]);

                if (profileResult.error) {
                    console.error('[ZenFlix] Profile error:', profileResult.error);
                    alert("Compte créé mais erreur de profil : " + profileResult.error.message);
                    return;
                }

                if (result.data.session) {
                    currentUser = {
                        id: result.data.user.id,
                        username: username,
                        isAdmin: isAdmin,
                        email: fakeEmail
                    };
                    localStorage.setItem('zenflix_session', JSON.stringify(currentUser));
                    alert("✅ Compte créé ! Bienvenue " + username);
                    closeAuthModal();
                    updateAuthUI();
                } else {
                    alert("✅ Compte créé ! Connecte-toi maintenant.");
                    switchAuthTab('login');
                }
            }
        } catch (err) {
            console.error('[ZenFlix] SignUp error:', err);
            alert("❌ Erreur : " + err.message);
        }

    } else {
        // CONNEXION
        console.log('[ZenFlix] Login attempt for:', username);

        try {
            // Trouver l'email via la table profiles
            var profileResult = await sb.from('profiles').select('email').eq('username', username).limit(1);

            if (profileResult.error || !profileResult.data || profileResult.data.length === 0) {
                alert("❌ Utilisateur non trouvé. Inscris-toi d'abord.");
                return;
            }

            var userEmail = profileResult.data[0].email;
            console.log('[ZenFlix] Found email:', userEmail);

            var result = await sb.auth.signInWithPassword({
                email: userEmail,
                password: pass
            });

            console.log('[ZenFlix] SignIn result:', result);

            if (result.error) {
                alert("❌ Erreur : " + result.error.message);
                return;
            }

            if (result.data.user) {
                var profResult = await sb.from('profiles').select('*').eq('id', result.data.user.id).single();
                
                if (profResult.data) {
                    currentUser = {
                        id: profResult.data.id,
                        username: profResult.data.username,
                        isAdmin: profResult.data.is_admin || false,
                        email: profResult.data.email
                    };
                } else {
                    var isAdmin = window.ADMIN_USERNAMES.indexOf(username) !== -1;
                    currentUser = { id: result.data.user.id, username: username, isAdmin: isAdmin, email: userEmail };
                }

                localStorage.setItem('zenflix_session', JSON.stringify(currentUser));
                alert("✅ Connecté ! Bienvenue " + currentUser.username);
                closeAuthModal();
                updateAuthUI();
            }
        } catch (err) {
            console.error('[ZenFlix] Login error:', err);
            alert(" Erreur : " + err.message);
        }
    }
}

async function logout() {
    if (sb) await sb.auth.signOut();
    currentUser = null;
    localStorage.removeItem('zenflix_session');
    updateAuthUI();
    closeAccountModal();
}

async function checkSession() {
    if (!sb) return;
    console.log('[ZenFlix] Checking session...');
    
    var sessionResult = await sb.auth.getSession();
    var session = sessionResult.data.session;
    console.log('[ZenFlix] Session:', session);

    if (session && session.user) {
        var profResult = await sb.from('profiles').select('*').eq('id', session.user.id).single();
        if (profResult.data) {
            currentUser = {
                id: profResult.data.id,
                username: profResult.data.username,
                isAdmin: profResult.data.is_admin || false,
                email: profResult.data.email
            };
            localStorage.setItem('zenflix_session', JSON.stringify(currentUser));
            console.log('[ZenFlix] User restored:', currentUser.username);
        }
    } else {
        var saved = JSON.parse(localStorage.getItem('zenflix_session'));
        if (saved) {
            currentUser = saved;
            console.log('[ZenFlix] Restored from local:', currentUser.username);
        }
    }

    updateAuthUI();
}

// ============================================================
// MODALS
// ============================================================

function openAuthModal() { document.getElementById('authModal').classList.add('active'); }
function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
    document.getElementById('authForm').reset();
    switchAuthTab('login');
}
function switchAuthTab(tab) {
    currentAuthTab = tab;
    var btns = document.querySelectorAll('.tab-btn');
    btns[0].classList.toggle('active', tab === 'login');
    btns[1].classList.toggle('active', tab === 'register');
    document.getElementById('modalTitle').textContent = tab === 'login' ? 'Connexion' : 'Inscription';
    document.getElementById('authSubmitBtn').textContent = tab === 'login' ? 'Se connecter' : "S'inscrire";
}

function openAccountModal() {
    if (!currentUser) return;
    document.getElementById('accountUsername').value = currentUser.username;
    document.getElementById('accountPassword').value = '';
    document.getElementById('accountPasswordConfirm').value = '';
    document.getElementById('accountRole').innerHTML = currentUser.isAdmin
        ? '<i class="fas fa-crown" style="color:gold;margin-right:0.4rem;"></i> Compte Administrateur'
        : '<i class="fas fa-user" style="margin-right:0.4rem;"></i> Compte Utilisateur';
    document.getElementById('accountModal').classList.add('active');
}
function closeAccountModal() { document.getElementById('accountModal').classList.remove('active'); }

async function saveAccountChanges() {
    var newUsername = document.getElementById('accountUsername').value.trim();
    var newPass = document.getElementById('accountPassword').value;
    var confirmPass = document.getElementById('accountPasswordConfirm').value;

    if (!newUsername || newUsername.length < 2) { alert("Le pseudo doit contenir au moins 2 caractères."); return; }
    if (newPass && newPass.length >= 3 && newPass !== confirmPass) { alert("Les mots de passe ne correspondent pas !"); return; }

    var existing = await sb.from('profiles').select('id').eq('username', newUsername).neq('id', currentUser.id).limit(1);
    if (existing.data && existing.data.length > 0) { alert("Ce pseudo est déjà pris !"); return; }

    var updateResult = await sb.from('profiles').update({ username: newUsername }).eq('id', currentUser.id);
    if (updateResult.error) { alert("Erreur : " + updateResult.error.message); return; }

    if (newPass && newPass.length >= 3) {
        var passResult = await sb.auth.updateUser({ password: newPass });
        if (passResult.error) { alert("Erreur mot de passe : " + passResult.error.message); return; }
    }

    currentUser.username = newUsername;
    localStorage.setItem('zenflix_session', JSON.stringify(currentUser));
    await sb.from('suggestions').update({ author: newUsername }).eq('author_id', currentUser.id);
    
    alert("✅ Modifications enregistrées !");
    closeAccountModal();
    updateAuthUI();
}

// ============================================================
// FILMS (admin)
// ============================================================

function openAddMovieModal() {
    if (!currentUser || !currentUser.isAdmin) { alert("Seul un admin peut ajouter un film."); return; }
    document.getElementById('addMovieForm').reset();
    document.getElementById('movieQuality').value = 'HDLight 1080p (x265)';
    document.getElementById('addMovieModal').classList.add('active');
}
function closeAddMovieModal() { document.getElementById('addMovieModal').classList.remove('active'); }

function deleteMovie(id) {
    if (!currentUser || !currentUser.isAdmin) return;
    var movie = moviesData.find(m => m.id === id);
    if (!movie) return;
    if (confirm("Supprimer \"" + movie.title + "\" ?")) {
        moviesData = moviesData.filter(m => m.id !== id);
        localStorage.setItem('zenflix_movies', JSON.stringify(moviesData));
        displayMoviesList();
    }
}

// ============================================================
// UI
// ============================================================

function updateAuthUI() {
    var authSection = document.getElementById('authSection');
    var formCheck = document.getElementById('formAuthCheck');
    var adminBtn = document.getElementById('adminAddFilmBtn');

    if (currentUser) {
        if (authSection) {
            authSection.innerHTML = '<div class="user-profile"><span class="username-display" onclick="openAccountModal()" title="Mon compte">' + escapeHtml(currentUser.username) + (currentUser.isAdmin ? ' ★' : '') + '</span><button class="logout-btn" onclick="logout()">Déconnexion</button></div>';
        }
        if (adminBtn) adminBtn.style.display = currentUser.isAdmin ? 'block' : 'none';
        if (formCheck) {
            formCheck.innerHTML = '<form class="suggestion-form" id="suggestionForm"><div class="form-group"><label>Type</label><select id="suggestionType" name="type" required><option value="film">Film</option><option value="serie">Série</option></select></div><div class="form-group"><label>Titre</label><input type="text" id="suggestionTitle" name="title" required placeholder="Titre du contenu"></div><div class="form-group"><label>Année (optionnel)</label><input type="number" id="suggestionYear" name="year" placeholder="Ex: 2010" min="1900" max="2030"></div><div class="form-group"><label>Genre (optionnel)</label><input type="text" id="suggestionGenre" name="genre" placeholder="Ex: Action, Drame..."></div><div class="form-group"><label>Pourquoi ce choix ? (optionnel)</label><textarea id="suggestionComment" name="comment" placeholder="Dites-nous en plus..." rows="4"></textarea></div><button type="submit" class="submit-btn"><span>Envoyer la suggestion</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button></form>';
            attachFormEvent();
        }
    } else {
        if (authSection) authSection.innerHTML = '<button class="btn-auth" onclick="openAuthModal()">Se connecter</button>';
        if (adminBtn) adminBtn.style.display = 'none';
        if (formCheck) {
            formCheck.innerHTML = '<div class="auth-notice"><p><i class="fas fa-lock" style="color: var(--accent); margin-right: 0.5rem;"></i>Vous devez être connecté pour proposer une suggestion.</p><button onclick="openAuthModal()">Se connecter maintenant</button></div>';
        }
    }
    displaySuggestions();
}

function displayMoviesList() {
    var filmsResults = document.getElementById('filmsResults');
    if (!filmsResults) return;
    if (moviesData.length === 0) { filmsResults.innerHTML = '<p class="no-films">Aucun film.</p>'; return; }
    filmsResults.innerHTML = moviesData.map(function(m) {
        var deleteBtn = (currentUser && currentUser.isAdmin) ? '<button class="film-delete-btn" onclick="event.stopPropagation(); deleteMovie(' + m.id + ')" title="Supprimer"><i class="fas fa-trash"></i></button>' : '';
        return '<div class="film-card" onclick="showFilmDetail(' + m.id + ')">' + deleteBtn + '<img src="' + m.poster + '" alt="' + escapeHtml(m.title) + '" class="film-card-poster" onerror="this.src=\'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22450%22><rect fill=%22%231a1a1a%22/></svg>\'"><div class="film-card-info"><h3 class="film-card-title">' + escapeHtml(m.title) + '</h3><div class="film-card-meta"><span><i class="far fa-calendar-alt"></i> ' + m.year + '</span><span><i class="far fa-clock"></i> ' + m.duration + '</span><span><i class="fas fa-video"></i> ' + m.quality + '</span></div><div class="film-card-genres">' + m.genres.slice(0,3).map(function(g) { return '<span class="film-card-genre">' + g + '</span>'; }).join('') + '</div><button class="film-card-btn" onclick="event.stopPropagation(); showFilmDetail(' + m.id + ')">Voir le film</button></div></div>';
    }).join('');
}

function showFilmDetail(id) {
    var m = moviesData.find(function(x) { return x.id === id; });
    if (!m) return;
    document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
    var dp = document.getElementById('filmDetailPage');
    if (dp) dp.classList.add('active');
    var dc = document.getElementById('filmDetailContent');
    if (dc) {
        var adminDelete = (currentUser && currentUser.isAdmin) ? '<button class="reveal-btn danger-btn" onclick="deleteMovie(' + m.id + ')" style="margin-top:1rem;background:#ff4444;"><i class="fas fa-trash" style="margin-right:0.6rem;"></i>Supprimer ce film (Admin)</button>' : '';
        dc.innerHTML = '<div class="film-detail-content"><img src="' + m.poster + '" alt="' + escapeHtml(m.title) + '" class="film-poster-large" onerror="this.src=\'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22450%22><rect fill=%231a1a1a/></svg>\'"><div class="film-info-detailed"><h1 class="film-title-large">' + escapeHtml(m.title) + '</h1><div class="film-meta-large"><span><i class="far fa-calendar-alt"></i> ' + m.year + '</span><span><i class="far fa-clock"></i> ' + m.duration + '</span><span><i class="fas fa-video"></i> ' + m.quality + '</span><span><i class="fas fa-database"></i> ' + m.size + '</span></div><p class="film-description">' + m.description + '</p><div class="film-card-genres" style="margin-bottom:2rem;">' + m.genres.map(function(g) { return '<span class="film-card-genre">' + g + '</span>'; }).join('') + '</div><div class="film-technical-info"><h3>Informations techniques</h3><div class="tech-info-item"><span class="tech-label"><i class="fas fa-language"></i> Langue</span><span class="tech-value">' + m.language + '</span></div><div class="tech-info-item"><span class="tech-label"><i class="fas fa-film"></i> Qualité</span><span class="tech-value">' + m.quality + '</span></div><div class="tech-info-item"><span class="tech-label"><i class="fas fa-hdd"></i> Taille</span><span class="tech-value">' + m.size + '</span></div><div class="tech-info-item"><span class="tech-label"><i class="far fa-calendar-plus"></i> Ajouté le</span><span class="tech-value">' + formatDate(m.dateAdded) + '</span></div></div><button class="reveal-btn" onclick="revealLink(' + m.id + ')"><i class="fas fa-download" style="margin-right:0.6rem;"></i>Télécharger</button>' + adminDelete + '</div></div>';
    }
    window.scrollTo(0, 0);
}

function revealLink(id) {
    var m = moviesData.find(function(x) { return x.id === id; });
    if (!m) return;
    if (m.link && m.link !== '' && m.link !== '#') window.open(m.link, '_blank');
    else alert('Lien en préparation.');
}

function goBack() { showPage('films'); }

function searchFilm() {
    var si = document.getElementById('filmsSearchInput');
    if (!si) return;
    var q = si.value.trim().toLowerCase();
    if (q === '') { displayMoviesList(); return; }
    var results = moviesData.filter(function(m) { return m.title.toLowerCase().includes(q) || m.genres.some(function(g) { return g.toLowerCase().includes(q); }); });
    var fr = document.getElementById('filmsResults');
    if (results.length > 0) {
        fr.innerHTML = results.map(function(m) { return '<div class="film-card" onclick="showFilmDetail(' + m.id + ')"><img src="' + m.poster + '" alt="' + escapeHtml(m.title) + '" class="film-card-poster" onerror="this.src=\'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22450%22><rect fill=%22%231a1a1a%22/></svg>\'"><div class="film-card-info"><h3 class="film-card-title">' + escapeHtml(m.title) + '</h3><div class="film-card-meta"><span><i class="far fa-calendar-alt"></i> ' + m.year + '</span><span><i class="far fa-clock"></i> ' + m.duration + '</span><span><i class="fas fa-video"></i> ' + m.quality + '</span></div><div class="film-card-genres">' + m.genres.slice(0,3).map(function(g) { return '<span class="film-card-genre">' + g + '</span>'; }).join('') + '</div><button class="film-card-btn" onclick="event.stopPropagation(); showFilmDetail(' + m.id + ')">Voir le film</button></div></div>'; }).join('');
    } else { fr.innerHTML = '<p class="no-films">Aucun résultat.</p>'; }
}

function filterFilms(filter, event) {
    document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
    if (event && event.target) event.target.classList.add('active');
    if (filter === 'all') { displayMoviesList(); return; }
    var results = moviesData.filter(function(m) { return m.language === filter || m.quality.includes(filter); });
    var fr = document.getElementById('filmsResults');
    if (results.length > 0) {
        fr.innerHTML = results.map(function(m) { return '<div class="film-card" onclick="showFilmDetail(' + m.id + ')"><img src="' + m.poster + '" alt="' + escapeHtml(m.title) + '" class="film-card-poster" onerror="this.src=\'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22450%22><rect fill=%22%231a1a1a%22/></svg>\'"><div class="film-card-info"><h3 class="film-card-title">' + escapeHtml(m.title) + '</h3><div class="film-card-meta"><span><i class="far fa-calendar-alt"></i> ' + m.year + '</span><span><i class="far fa-clock"></i> ' + m.duration + '</span><span><i class="fas fa-video"></i> ' + m.quality + '</span></div><div class="film-card-genres">' + m.genres.slice(0,3).map(function(g) { return '<span class="film-card-genre">' + g + '</span>'; }).join('') + '</div><button class="film-card-btn" onclick="event.stopPropagation(); showFilmDetail(' + m.id + ')">Voir le film</button></div></div>'; }).join('');
    } else { fr.innerHTML = '<p class="no-films">Aucun film.</p>'; }
}

// ============================================================
// NAVIGATION
// ============================================================

function showPage(pageName) {
    document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
    var tp = document.getElementById(pageName + 'Page');
    if (tp) tp.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(function(l) {
        l.classList.remove('active');
        var t = l.textContent.toLowerCase();
        if ((pageName === 'home' && t.includes('accueil')) || (pageName === 'films' && t.includes('film')) || (pageName === 'series' && t.includes('série')) || (pageName === 'suggestions' && t.includes('suggestion'))) l.classList.add('active');
    });
    window.scrollTo(0, 0);
    if (pageName === 'films') displayMoviesList();
    if (pageName === 'suggestions') updateAuthUI();
}

function toggleSearch() {
    var o = document.getElementById('searchOverlay');
    var i = document.getElementById('overlaySearchInput');
    if (o) { o.classList.toggle('active'); if (o.classList.contains('active') && i) i.focus(); }
}

// ============================================================
// SUGGESTIONS
// ============================================================

async function fetchSuggestions() {
    if (!sb) { console.error('[ZenFlix] sb non défini'); return; }
    console.log('[ZenFlix] Fetching suggestions...');
    var result = await sb.from('suggestions').select('*').order('created_at', { ascending: false });
    if (result.error) {
        console.error('[ZenFlix] Suggestions error:', result.error);
        suggestionsData = [];
    } else {
        suggestionsData = result.data || [];
        console.log('[ZenFlix] Loaded', suggestionsData.length, 'suggestions');
    }
    displaySuggestions();
}

function displaySuggestions() {
    var list = document.getElementById('suggestionsList');
    if (!list) return;
    if (suggestionsData.length === 0) { list.innerHTML = '<p class="no-suggestions">Aucune suggestion.</p>'; return; }
    list.innerHTML = suggestionsData.map(function(s) {
        var isAuthor = currentUser && s.author_id === currentUser.id;
        var isAdmin = currentUser && currentUser.isAdmin;
        var canDelete = isAuthor || isAdmin;
        var hasLiked = currentUser && s.liked_by && s.liked_by.indexOf(currentUser.id) !== -1;
        var likeCount = s.liked_by ? s.liked_by.length : 0;
        return '<div class="suggestion-item"><div class="suggestion-author"><i class="fas fa-user"></i> ' + escapeHtml(s.author) + '</div><div class="suggestion-item-header"><h4 class="suggestion-item-title">' + escapeHtml(s.title) + (s.year ? ' (' + s.year + ')' : '') + '</h4><span class="suggestion-item-type">' + (s.type === 'film' ? 'Film' : 'Série') + '</span></div>' + (s.genre ? '<div style="margin-top:0.6rem;"><span class="film-card-genre">' + escapeHtml(s.genre) + '</span></div>' : '') + (s.comment ? '<p class="suggestion-item-comment">' + escapeHtml(s.comment) + '</p>' : '') + '<div class="suggestion-item-footer"><button class="like-btn ' + (hasLiked ? 'active' : '') + '" onclick="likeSuggestion(\'' + s.id + '\')" ' + (!currentUser ? 'disabled' : '') + '><i class="fas fa-thumbs-up"></i> ' + likeCount + '</button><span class="suggestion-item-date">' + formatDate(s.created_at) + '</span><button class="delete-btn" onclick="deleteSuggestion(\'' + s.id + '\')" ' + (!canDelete ? 'disabled' : '') + '><i class="fas fa-trash"></i> ' + (canDelete ? 'Supprimer' : '') + '</button></div></div>';
    }).join('');
}

function attachFormEvent() {
    var form = document.getElementById('suggestionForm');
    if (form) {
        form.onsubmit = async function(e) {
            e.preventDefault();
            if (!currentUser) { alert("Connecte-toi d'abord."); return; }
            if (!sb) { alert("Supabase non initialisé."); return; }

            var fd = new FormData(form);
            var suggestion = {
                id: crypto.randomUUID(),
                author_id: currentUser.id,
                author: currentUser.username,
                type: fd.get('type'),
                title: fd.get('title').trim(),
                year: fd.get('year') ? parseInt(fd.get('year')) : null,
                genre: fd.get('genre') ? fd.get('genre').trim() : null,
                comment: fd.get('comment') ? fd.get('comment').trim() : null,
                liked_by: []
            };

            var result = await sb.from('suggestions').insert([suggestion]);
            if (result.error) { alert("Erreur : " + result.error.message); return; }

            suggestionsData.unshift(suggestion);
            displaySuggestions();
            form.reset();
        };
    }
}

async function likeSuggestion(id) {
    if (!currentUser || !sb) return;
    var sug = suggestionsData.find(function(s) { return s.id === id; });
    if (!sug) return;

    var likedBy = sug.liked_by || [];
    var idx = likedBy.indexOf(currentUser.id);
    if (idx > -1) likedBy.splice(idx, 1); else likedBy.push(currentUser.id);

    var result = await sb.from('suggestions').update({ liked_by: likedBy }).eq('id', id);
    if (result.error) { console.error('[ZenFlix] Like error:', result.error); return; }

    sug.liked_by = likedBy;
    displaySuggestions();
}

async function deleteSuggestion(id) {
    var sug = suggestionsData.find(function(s) { return s.id === id; });
    if (!sug) return;
    var isAuthor = currentUser && sug.author_id === currentUser.id;
    var isAdmin = currentUser && currentUser.isAdmin;
    if (isAdmin || isAuthor) {
        if (confirm("Supprimer cette suggestion ?")) {
            var result = await sb.from('suggestions').delete().eq('id', id);
            if (result.error) { alert("Erreur : " + result.error.message); return; }
            suggestionsData = suggestionsData.filter(function(s) { return s.id !== id; });
            displaySuggestions();
        }
    }
}

// ============================================================
// UTILITAIRES
// ============================================================

function escapeHtml(text) {
    if (!text) return '';
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(d) {
    if (!d) return '';
    return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('[ZenFlix] DOM ready, sb =', !!sb);
    
    // Check session
    checkSession();

    // Auth form
    var af = document.getElementById('authForm');
    if (af) af.addEventListener('submit', handleAuth);

    // Add movie form
    var mf = document.getElementById('addMovieForm');
    if (mf) {
        mf.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!currentUser || !currentUser.isAdmin) { alert("Seul un admin peut ajouter un film."); return; }
            var genresRaw = document.getElementById('movieGenres').value.trim();
            var genres = genresRaw.split(',').map(function(g) { return g.trim(); }).filter(function(g) { return g; });
            var newMovie = {
                id: Date.now(),
                title: document.getElementById('movieTitle').value.trim(),
                year: parseInt(document.getElementById('movieYear').value),
                genres: genres,
                poster: document.getElementById('moviePoster').value.trim() || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450"><rect fill="%231a1a1a"/></svg>',
                backdrop: '',
                description: document.getElementById('movieDescription').value.trim(),
                duration: document.getElementById('movieDuration').value.trim() || 'N/A',
                language: document.getElementById('movieLanguage').value,
                quality: document.getElementById('movieQuality').value.trim() || 'HDLight 1080p (x265)',
                size: document.getElementById('movieSize').value.trim() || 'N/A',
                link: document.getElementById('movieLink').value.trim() || '#',
                dateAdded: new Date().toISOString().split('T')[0],
                featured: document.getElementById('movieFeatured').checked
            };
            moviesData.unshift(newMovie);
            localStorage.setItem('zenflix_movies', JSON.stringify(moviesData));
            closeAddMovieModal();
            alert("Film \"" + newMovie.title + "\" ajouté !");
            displayMoviesList();
        });
    }

    // Navbar scroll
    var nb = document.querySelector('.navbar');
    if (nb) {
        window.addEventListener('scroll', function() { nb.classList.toggle('scrolled', window.pageYOffset > 50); });
    }

    // Modal close on backdrop
    ['authModal', 'accountModal', 'addMovieModal'].forEach(function(id) {
        var modal = document.getElementById(id);
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    if (id === 'authModal') { document.getElementById('authForm').reset(); switchAuthTab('login'); }
                }
            });
        }
    });

    // Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            ['searchOverlay', 'authModal', 'accountModal', 'addMovieModal'].forEach(function(id) {
                var el = document.getElementById(id);
                if (el && el.classList.contains('active')) {
                    el.classList.remove('active');
                    if (id === 'authModal') { document.getElementById('authForm').reset(); switchAuthTab('login'); }
                }
            });
        }
    });

    // Auth state listener
    if (sb) {
        sb.auth.onAuthStateChange(function(event, session) {
            console.log('[ZenFlix] Auth state:', event);
            if (event === 'SIGNED_OUT') {
                currentUser = null;
                localStorage.removeItem('zenflix_session');
                updateAuthUI();
            } else if (event === 'SIGNED_IN' && session && session.user) {
                checkSession();
            }
        });
    }

    // Fetch suggestions
    fetchSuggestions();
});
