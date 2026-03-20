class Card {
    constructor(name, photo, predateText, date, description) {
        this.name = name;
        this.photo = photo;
        this.predateText = predateText;
        this.date = date;
        this.description = description;
    }

    createInHTML() {
        let cardInHTML = document.createElement("section");
        cardInHTML.className = "card_vertical_flexbox";
        cardInHTML.innerHTML = `
            <img class="card_image" src="${this.photo}" alt="${this.name}">
            <div class="name_and_date_horizontal_flexbox">
                <h3>${this.name}</h3>
                <div class="date_info_vertical_flexbox">
                    <p class="card_predate_text">${this.predateText}</p>
                    <p class="card_date_text">${this.date}</p>
                </div>
            </div>
            <hr>
            <p class="card_description_text">${this.description}</p>
        `;
        return cardInHTML;
    }
}

class Member extends Card {
    constructor(name, photo, date, description, role, level, power) {
        super(name, photo, "Дата рождения:", date, description);
        this.role = role;
        this.level = level;
        this.power = power;
    }

    createInHTML() {
        let cardInHTML = super.createInHTML();
        cardInHTML.className = "member_card_vertical_flexbox";
        const statsBlock = document.createElement("div");
        statsBlock.className = 'stats-block';
        statsBlock.innerHTML = `
            <p><strong>Роль:</strong> ${this.role}</p>
            <p><strong>Уровень:</strong> ${this.level}</p>
            <p><strong>Сила:</strong> ${this.power}</p>
        `;
        const hr = cardInHTML.querySelector("hr");
        cardInHTML.insertBefore(statsBlock, hr);
        return cardInHTML;
    }
}

class Album extends Card {
    constructor(name, photo, date, description, songsAmount, genre, popularity, totalStreams) {
        super(name, photo, "Год релиза:", date, description);
        this.songsAmount = songsAmount;
        this.genre = genre;
        this.popularity = popularity;
        this.totalStreams = totalStreams;
    }

    createInHTML() {
        let cardInHTML = super.createInHTML();
        const songsP = document.createElement("p");
        songsP.className = 'album_songs_amount_text';
        songsP.textContent = `Песен в альбоме: ${this.songsAmount}`;
        const nameDiv = cardInHTML.querySelector(".name_and_date_horizontal_flexbox");
        nameDiv.insertAdjacentElement("afterend", songsP);

        const statsBlock = document.createElement('div');
        statsBlock.className = 'stats-block';
        statsBlock.innerHTML = `
            <p><strong>Жанр:</strong> ${this.genre}</p>
            <p><strong>Популярность:</strong> ${this.popularity}/100</p>
            <p><strong>Прослушиваний:</strong> ${this.totalStreams}</p>
        `;
        const hr = cardInHTML.querySelector('hr');
        cardInHTML.insertBefore(statsBlock, hr);
        return cardInHTML;
    }
}

// ======================= Song =======================
class Song extends Card {
    constructor(name, fromAlbumCover, date, description, songAudioLink, fromAlbumName, duration, rating, genre) {
        super(name, fromAlbumCover, "Дата релиза:", date, description);
        this.songAudioLink = songAudioLink;
        this.fromAlbumName = fromAlbumName;
        this.fromAlbumCover = fromAlbumCover;
        this.duration = duration;
        this.rating = rating;
        this.genre = genre;
    }

    createInHTML() {
        let cardInHTML = document.createElement("section");
        cardInHTML.className = "card_vertical_flexbox";
        cardInHTML.innerHTML = `
            <div class="song_cover_and_album_horizontal_flexbox">
                <iframe class="song_youtube_video" src="${this.songAudioLink}" allowfullscreen></iframe>
                <div class="album_info_vertical_flexbox">
                    <img class="album_cover_image" src="${this.fromAlbumCover}" alt="${this.fromAlbumName}">
                    <h4>${this.fromAlbumName}</h4>
                </div>
            </div>
            <div class="name_and_date_horizontal_flexbox">
                <h3>${this.name}</h3>
                <div class="date_info_vertical_flexbox">
                    <p class="card_predate_text">${this.predateText}</p>
                    <p class="card_date_text">${this.date}</p>
                </div>
            </div>
            <div class="stats-block">
                <p><strong>Длительность:</strong> ${this.duration} мин</p>
                <p><strong>Рейтинг:</strong> ${this.rating}/10</p>
                <p><strong>Жанр:</strong> ${this.genre}</p>
            </div>
            <hr>
            <p class="card_description_text">${this.description}</p>
        `;
        return cardInHTML;
    }
}

// ======================= Данные карт =======================
let CardsStorage = [
    new Member("Тайлер Джозеф", "resources/imgs/Tyler_Joesph_photo.jpg", "01.12.1988", "Круто поёт и играет на пианинах. Здоровский мужик, респект ему.", "Вокалист, клавишник", 85, 92),
    new Member("Джош Дан", "resources/imgs/Josh_Dun_photo.jpg", "18.06.1988", "Барабанит что надо! Легенда", "Барабанщик", 82, 88),

    new Album("Blurryface", "resources/imgs/album-covers/Blurryface.jpg", "2015", "Мой любимый альбом группы. Люблю в нём абсолютно все песни.", 14, "Альтернативный хип-хоп", 98, "1.2B"),
    new Album("Vessel", "resources/imgs/album-covers/Vessel.jpg", "2013", "Очень уютный альбом со множеством красивых песен. Тоже очень мне нравится.", 12, "Инди-поп", 95, "800M"),
    new Album("Clancy", "resources/imgs/album-covers/Clancy.jpg", "2024", "Один из новых альбомов группы. Первой песней из него я услышал At The Risk Of Feeling Dumb и мгновенно её полюбил.", 13, "Альтернативный рок", 97, "400M"),
    new Album("Trench", "resources/imgs/album-covers/Trench.jpg", "2018", "Jumpsuit, Chlorine, The Hype, Smithereens, Nico and the Niners... прекрасный альбом.", 14, "Электро-поп", 99, "1.5B"),
    new Album("Breach", "resources/imgs/album-covers/Breach.jpg", "2025", "Последний (на данный момент) альбом группы. Очень нравятся Downstairs и другие.", 13, "Альтернатива", 96, "300M"),

    new Song("My Blood", "resources/imgs/album-covers/Trench.jpg", "27.08.2018", "Приятная песня с приятной музыкой, текстом и всем.", "https://www.youtube.com/embed/8mn-FFjIbo8", "Trench", 3.5, 9.5, "Поп-рок"),
    new Song("Polarize", "resources/imgs/album-covers/Blurryface.jpg", "19.05.2015", "Вторая песня из Blurryface, которая попала мне в самое сердечко.", "https://www.youtube.com/embed/MiPBQJq49xk", "Blurryface", 3.8, 9.0, "Альт-хип-хоп"),
    new Song("Hometown", "resources/imgs/album-covers/Blurryface.jpg", "17.05.2015", "Просто красивая песенка с необычным мотивом.", "https://www.youtube.com/embed/pJtlLzsDICo", "Blurryface", 3.6, 8.7, "Синти-поп"),
    new Song("We Don't Believe What's on TV", "resources/imgs/album-covers/Blurryface.jpg", "19.05.2015", "Уютненькая песня со смыслом.", "https://www.youtube.com/embed/zZEumf7RowI", "Blurryface", 2.9, 8.9, "Украинский фолк-рок?"),
    new Song("Smithereens", "resources/imgs/album-covers/Blurryface.jpg", "05.10.2018", "Красивая песня. Что тут ещё сказать, надо слушать.","https://www.youtube.com/embed/v8GwUos_Mtw", "Trench", 2.9, 9.2, "Поп"),
    new Song("Goner", "resources/imgs/album-covers/Blurryface.jpg", "19.05.2015", "Крутая, грустная песенка. Под дождь идёт просто невероятно.", "https://www.youtube.com/embed/3J5mE-J1WLk", "Blurryface", 3.7, 9.1, "Эмо-рок"),
    new Song("Holding on to You", "resources/imgs/album-covers/Vessel.jpg", "11.09.2012", "Эта песня познакомила меня с Vessel'ом.", "https://www.youtube.com/embed/ktBMxkLUIwY", "Vessel", 4.2, 9.8, "Рэп-рок"),
    new Song("Midwest Indigo", "resources/imgs/album-covers/Clancy.jpg", "24.05.2024", "Наверное, моя любимая песня из альбома Clancy.", "https://www.youtube.com/embed/mREOvIgImmo", "Clancy", 3.3, 9.6, "Альтернатива"),
    new Song("Doubt", "resources/imgs/album-covers/Blurryface.jpg", "17.05.2015", "Моя ЛЮБИМАЯ песня пилотов. Люблю всё, от первой секунды до последней.", "https://www.youtube.com/embed/MEiVnNNpJLA", "Blurryface", 3.3, 10, "Электро-рок"),
    new Song("Heavydirtysoul", "resources/imgs/album-covers/Blurryface.jpg", "17.05.2015", "Моя ЛЮБИМАЯ песня пилотов. Люблю всё, от первой секунды до последней.", "https://www.youtube.com/embed/MEiVnNNpJLA", "Blurryface", 3.3, 10, "Электро-рок")
];


let editMode = false;

function editCard(card, type) {
    let newName = prompt("Введите новое название:", card.name);
    if (newName !== null) card.name = newName;
    
    let newDate = prompt("Введите дату:", card.date);
    if (newDate !== null) card.date = newDate;
    
    let newDescription = prompt("Введите описание:", card.description);
    if (newDescription !== null) card.description = newDescription;
    
    if (type === 'Member') {
        let newRole = prompt("Роль участника:", card.role);
        if (newRole !== null) card.role = newRole;
        let newLevel = prompt("Уровень (число):", card.level);
        if (newLevel !== null) card.level = parseInt(newLevel) || card.level;
        let newPower = prompt("Сила (число):", card.power);
        if (newPower !== null) card.power = parseInt(newPower) || card.power;
    } 
    else if (type === 'Album') {
        let newSongs = prompt("Количество песен в альбоме:", card.songsAmount);
        if (newSongs !== null) card.songsAmount = parseInt(newSongs) || card.songsAmount;
        let newGenre = prompt("Жанр альбома:", card.genre);
        if (newGenre !== null) card.genre = newGenre;
        let newPopularity = prompt("Популярность (0-100):", card.popularity);
        if (newPopularity !== null) card.popularity = parseInt(newPopularity) || card.popularity;
        let newStreams = prompt("Общее количество прослушиваний (например, 1.2B):", card.totalStreams);
        if (newStreams !== null) card.totalStreams = newStreams;
    }
    else if (type === 'Song') {
        let newDuration = prompt("Длительность (в минутах):", card.duration);
        if (newDuration !== null) card.duration = parseFloat(newDuration) || card.duration;
        let newRating = prompt("Рейтинг (0-10):", card.rating);
        if (newRating !== null) card.rating = parseFloat(newRating) || card.rating;
        let newGenre = prompt("Жанр песни:", card.genre);
        if (newGenre !== null) card.genre = newGenre;
        let newAlbumName = prompt("Название альбома:", card.fromAlbumName);
        if (newAlbumName !== null) card.fromAlbumName = newAlbumName;
        let newAudioLink = prompt("Ссылка YouTube (embed):", card.songAudioLink);
        if (newAudioLink !== null) card.songAudioLink = newAudioLink;
    }
    
    loadWebsite();
}

function createHeader() {
    const header = document.createElement("header");
    header.innerHTML = `
        <h1>Twenty One Pilots - Карточная коллекция</h1>
        <div class="edit-toggle">
            <button id="editModeToggle">Режим редактирования</button>
        </div>
    `;
    document.body.appendChild(header);
}

function loadWebsite() {
    document.body.innerHTML = '';
    createHeader();
    
    const mainContainer = document.createElement('div');
    mainContainer.className = 'container';
    
    const members = CardsStorage.filter(card => card instanceof Member);
    const others = CardsStorage.filter(card => !(card instanceof Member));
    
    if (members.length) {
        const membersGrid = document.createElement('div');
        membersGrid.className = 'cards-grid';
        members.forEach(member => {
            const cardElem = member.createInHTML();
            if (editMode) {
                cardElem.style.cursor = 'pointer';
                cardElem.addEventListener('click', (e) => {
                    e.stopPropagation();
                    editCard(member, 'Member');
                });
            }
            membersGrid.appendChild(cardElem);
        });
        mainContainer.appendChild(membersGrid);
    }
    
    if (others.length) {
        const othersGrid = document.createElement('div');
        othersGrid.className = 'cards-grid';
        others.forEach(card => {
            let cardElem;
            if (card instanceof Album) {
                cardElem = card.createInHTML();
                if (editMode) {
                    cardElem.style.cursor = 'pointer';
                    cardElem.addEventListener('click', (e) => {
                        e.stopPropagation();
                        editCard(card, 'Album');
                    });
                }
            } else if (card instanceof Song) {
                cardElem = card.createInHTML();
                if (editMode) {
                    cardElem.style.cursor = 'pointer';
                    cardElem.addEventListener('click', (e) => {
                        e.stopPropagation();
                        editCard(card, 'Song');
                    });
                }
            } else {
                cardElem = card.createInHTML();
            }
            othersGrid.appendChild(cardElem);
        });
        mainContainer.appendChild(othersGrid);
    }
    
    document.body.appendChild(mainContainer);
    
    const toggleBtn = document.getElementById('editModeToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            editMode = !editMode;
            loadWebsite();
        });
    }
}

document.addEventListener('DOMContentLoaded', loadWebsite);