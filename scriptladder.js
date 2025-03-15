window.addEventListener('DOMContentLoaded', function() {
  var levels = [
    { name: '#19 - Poocubed', id: '85133223', author: 'Liisp', Beaten: 'N/A', videoUrl: 'https://youtu.be/ms5xPzWFNYQ?si=Imxl9Zd43-27uHvG', type: 'Level' },
    { name: '#??? - ???', id: 'N/A', author: 'N/A', Beaten: 'N/A', videoUrl: 'https://www.youtube.com/watch?v=L_LUpnjgPso', type: 'Level' },
    { name: '#??? - ???', id: 'N/A', author: 'N/A', Beaten: 'N/A', videoUrl: 'https://youtu.be/I27TjqthWco', type: 'Level' },
    { name: '#??? - ???', id: 'N/A', author: 'N/A', Beaten: 'N/A', videoUrl: 'https://youtu.be/I27TjqthWco', type: 'Level' },
    { name: '#??? - ???', id: 'N/A', author: 'N/A', Beaten: 'N/A', videoUrl: 'https://youtu.be/I27TjqthWco', type: 'Level' },
    { name: '#??? - ???', id: 'N/A', author: 'N/A', Beaten: 'N/A', videoUrl: 'https://youtu.be/I27TjqthWco', type: 'Level' },
    { name: '#??? - ???', id: 'N/A', author: 'N/A', Beaten: 'N/A', videoUrl: 'https://youtu.be/I27TjqthWco', type: 'Level' },
    { name: '#??? - ???', id: 'N/A', author: 'N/A', Beaten: 'N/A', videoUrl: 'https://youtu.be/I27TjqthWco', type: 'Level' },
    { name: '#??? - ???', id: 'N/A', author: 'N/A', Beaten: 'N/A', videoUrl: 'https://youtu.be/I27TjqthWco', type: 'Level' },
    { name: '#??? - ???', id: 'N/A', author: 'N/A', Beaten: 'N/A', videoUrl: 'https://youtu.be/I27TjqthWco', type: 'Level' },
    { name: '#10 - GRIM', id: '90477539', author: 'NucDev', Beaten: '23 Oct 2099', videoUrl: 'https://www.youtube.com/watch?v=oS4DPqHwP6w', type: 'Level' }
  ];

  var levelList = document.getElementById('levelList');
  var challengeList = document.getElementById('challengeList');

  levels.forEach(function(level, index) {
    // Create a container for each level
    var listItemContainer = document.createElement('div');
    listItemContainer.className = 'list-item-container';

    // Create the list item
    var listItem = document.createElement('div');
    listItem.classList.add('list-item');
    
    // Add rank class
    if (index === 0) listItem.classList.add('rank-1');
    if (index === 1) listItem.classList.add('rank-2');
    if (index === 2) listItem.classList.add('rank-3');

    // Extract position from name (e.g., "#9 -" -> "9")
    var position = level.name.match(/#(\d+)/);
    if (position) {
      listItem.setAttribute('data-position', position[1]);
    }

    var listNumber = document.createElement('div');
    listNumber.classList.add('list-number');
    listNumber.textContent = '#' + (index + 1);
    var listThumbnail = document.createElement('div');
    listThumbnail.classList.add('list-thumbnail');
    listThumbnail.style.pointerEvents = 'none'; // Add this line
    var thumbnailLink = document.createElement('a');
    thumbnailLink.href = level.videoUrl;
    thumbnailLink.target = '_blank';
    var thumbnailImage = document.createElement('img');
    thumbnailImage.classList.add('list-image');
    thumbnailImage.alt = 'Level thumbnail';
    var videoId = extractVideoId(level.videoUrl);
    var thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/mqdefault.jpg';
    thumbnailImage.src = thumbnailUrl;
    thumbnailLink.appendChild(thumbnailImage);
    listThumbnail.appendChild(thumbnailLink);
    var listInfo = document.createElement('div');
    listInfo.classList.add('list-info');
    var levelName = document.createElement('p');
    levelName.classList.add('level-name');
    levelName.textContent = level.name;
    listInfo.appendChild(levelName);
    listItem.appendChild(listNumber);
    listItem.appendChild(listThumbnail);
    listItem.appendChild(listInfo);
    listItemContainer.appendChild(listItem);
    levelList.appendChild(listItemContainer);

    // Display the popup
    listItem.addEventListener('click', function() {
      // Get the video ID from the video URL
      var videoId = extractVideoId(levels[index].videoUrl);

      // Set the iframe source
      var iframe = document.getElementById('popup-video-frame');
      iframe.src = 'https://www.youtube.com/embed/' + videoId;

      // Populate the popup with the corresponding information
      document.getElementById('popup-name').textContent = levels[index].name;
      document.getElementById('popup-id').textContent = levels[index].id;
      document.getElementById('popup-author').textContent = levels[index].author;
      document.getElementById('popup-beaten').textContent = levels[index].Beaten;

      // Display the popup
      document.getElementById('popup').style.display = 'flex';
    });

    // Close the popup when the close button is clicked
    document.getElementById('popup-close').addEventListener('click', function() {
      var popup = document.getElementById('popup');
      popup.style.display = 'none';

      // Get the iframe element
      var iframe = document.getElementById('popup-video-frame');

      // Reset the iframe source to stop the video
      iframe.src = '';
    });
  });

  function extractVideoId(url) {
    var match = url.match(/(?:[?&]v=|\/embed\/|\/\d\/|\/vi\/|youtu\.be\/|\/embed\/|\/\d\/|\/vi\/)([^#&?/]+)/i);
    if (match && match[1]) {
      return match[1];
    } else {
      return '';
    }
  }
});
