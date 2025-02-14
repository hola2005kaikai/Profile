// Initialize Typed.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize typing animation
    new Typed('#typed-quote', {
        strings: ['\"Whatever your hand finds to do, do it with all your might...\" Ecclesiastes 9:10'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 5000,
        startDelay: 1000
    });

    // Initialize Lucide icons
    lucide.createIcons();

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu?.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Projects data
    const projects = [
        {
            title: "One",
            description: "Beloved Country Kiribati",
            image: "kiribatiproject.png"
        },
        {
            title: "Two",
            description: "Vodafone Business Drafting",
            image: "vodafone.template.png"
        },
        {
            title: "Three",
            description: "Another BarberShop Website with highlights videos",
            image: "barber.png"
        },
        {
            title: "Four",
            description: "Tourism Website with Location",
            image: "tourisim with location.png"
        },
        {
            title: "Five",
            description: "Login Wifi Portal",
            image: "login.png"
        }
    ];

    // Render projects
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Music player functionality
    const playBtn = document.querySelector('.play-btn');
    let isPlaying = false;

    playBtn?.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playBtn.innerHTML = `<i data-lucide="${isPlaying ? 'pause' : 'play'}"></i>`;
        lucide.createIcons();
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});



        // Playlist Functionality
        const playlist = [
            { title: "Creation", artist: "Chat.GPT ft DeepSeek", file: "Te Kai bwara room (1).mp3" },
            { title: "Ade Monica", artist: "Fav-song", file: "ade_monika.mp3" },
            { title: "Beat", artist: "Fav-song", file: "Dj_Settler_Project_-_Le..mp3" },
        ];
        
        const playlistElement = document.getElementById('playlist');
        const currentSongTitle = document.getElementById('current-song-title');
        const currentSongArtist = document.getElementById('current-song-artist');
        const audioElement = document.getElementById('audio-player'); // HTML <audio> element
        
        playlist.forEach((song, index) => {
            const playlistItem = document.createElement('div');
            playlistItem.classList.add('playlist-item');
            playlistItem.innerHTML = `
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            `;
            playlistItem.addEventListener('click', () => {
                currentSongTitle.textContent = song.title;
                currentSongArtist.textContent = song.artist;
                
                // Set the audio source to the selected song
                audioElement.src = song.file;
                audioElement.play();  // Play the song automatically
            });
            playlistElement.appendChild(playlistItem);
        });