// Define genres data
const genres = [
    { 
        name: 'Rock', 
        description: 'Rock music originated as "rock and roll" in the United States in the 1950s.',
        artists: [
            { name: 'The Beatles', image: 'https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg' },
            { name: 'Queen', image: 'https://miro.medium.com/v2/resize:fit:591/1*NLd09bCdDWgs_PFIMLxu9A.jpeg' }
        ]
    },
    { 
        name: 'Pop', 
        description: 'Pop music is characterized by catchy melodies and simple song structures.',
        artists: [
            { name: 'Madonna', image: 'https://www.etonline.com/sites/default/files/images/2023-02/GettyImages-1463282630.jpg' },
            { name: 'Taylor Swift', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiwqfL05uFXdoykf5uwYLlyr37L0kx0uPlsf1xv8fTw&s' }
        ]
    },
    { 
        name: 'Hip Hop', 
        description: 'Hip hop music originated in the Bronx in New York City in the 1970s.', 
        artists: [
            { name: 'Tupac Shakur', image: 'https://media.gettyimages.com/id/1336359825/photo/new-york-ny-american-rapper-songwriter-and-actor-tupac-shakur-poses-for-a-portrait-during-the.jpg?s=612x612&w=gi&k=20&c=l0ERoWDO0fMbgyHUgFGJnKgBi8RPFtHYbRBNTZZddE8=' },
            { name: 'Jay-Z', image: 'https://imageio.forbes.com/specials-images/imageserve/5ed554fab14861000600baf1/0x0.jpg?format=jpg&crop=686,686,x53,y114,safe&height=416&width=416&fit=bounds' }
        ]
    }
];

// Function to handle search and display search results
function search() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const filteredGenres = genres.filter(genre => genre.name.toLowerCase().includes(searchInput));
    displayGenres(filteredGenres);
}

// Function to display genres and artists
function displayGenres(genresToShow) {
    const genreList = document.getElementById('genreList');
    genreList.innerHTML = '';

    if (genresToShow.length > 0) {
        genresToShow.forEach(genre => {
            const genreDiv = document.createElement('div');
            genreDiv.classList.add('genre');
            genreDiv.innerHTML = `
            <h2>${genre.name}</h2>
                <p>${genre.description}</p>
                <div class="artist-list">
                    ${genre.artists.map(artist => `
                        <div class="artist">
                            <img src="${artist.image}" alt="${artist.name}">
                            <p>${artist.name}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="comment-section">
                    <input type="text" class="comment-input" placeholder="Write a comment...">
                    <button class="comment-btn">Post Comment</button>
                    <div class="comments"></div>
                </div>
            `;
            genreList.appendChild(genreDiv);
            // Add event listener for the comment button
            const commentButton = genreDiv.querySelector('.comment-btn');
            commentButton.addEventListener('click', () => postComment(genreDiv));
        });
    } else {
        genreList.innerHTML = '<p>No genres found matching your search.</p>';
    }
}
// Function to post a comment
function postComment(genreDiv) {
  const commentInput = genreDiv.querySelector('.comment-input');
  const commentText = commentInput.value.trim();
  if (commentText !== '') {
      const commentsContainer = genreDiv.querySelector('.comments');
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      commentDiv.textContent = commentText;
      commentsContainer.appendChild(commentDiv);
      commentInput.value = ''; // Clear input field after posting comment
  }
}


    