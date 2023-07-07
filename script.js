window.addEventListener('DOMContentLoaded', function() {
    var levels = [
      { name: '#81 - Frozen Cave', id: '68908396', author: 'TrueParadoxTeam', Beaten: '18 Apr 2023', videoUrl: 'https://www.youtube.com/watch?v=J57GlLpUbRg', type: 'Level' },
      { name: '#90 - Wasureta', id: '64658786', author: 'HelpegasuS', Beaten: '14 Mar 2023', videoUrl: 'https://www.youtube.com/watch?v=K5FK2kOptzI', type: 'Level' },
      { name: '#248 - Dolos', id: '58417850', author: 'Enzeux', Beaten: '1 Apr 2023', videoUrl: 'https://www.youtube.com/watch?v=iscKMHv-Lsk', type: 'Level' },
      { name: '#N/A - Shitty Minusdry (my ver)', id: '90383853', author: 'Wiktor and Mystix', Beaten: '23 Aug 2022', videoUrl: 'https://www.youtube.com/watch?v=yd3RoTdunJo', type: 'Level' },
      { name: '#261 - Bloodbath', id: '10565740', author: 'Riot', Beaten: '23 Aug 2022', videoUrl: 'https://www.youtube.com/watch?v=W8cPS8VTZp0', type: 'Level' },
      { name: '#325 - Prismatic Haze', id: '59899374', author: 'Cirtrax', Beaten: '30 Mar 2023', videoUrl: 'https://www.youtube.com/watch?v=McXMhw1kafg', type: 'Level' },
      { name: '#347 - Cataclysm', id: '3979721', author: 'Ggb0y', Beaten: '2 Aug 2022', videoUrl: 'https://www.youtube.com/watch?v=0r-7XShVfeg', type: 'Level' },
      { name: '#N/A - Acu', id: '61079355', author: 'Neigefeu', Beaten: '27 Dec 2022', videoUrl: 'https://www.youtube.com/watch?v=uraoLJbRsfk', type: 'Level' },
      { name: '#N/A - Hidden in the Sand', id: '87481937', author: 'ASBCHazel', Beaten: '3 Mar 2023', videoUrl: 'https://www.youtube.com/watch?v=b6Fr7SEcy84', type: 'Level' },
      { name: '#N/A - My Time', id: '82595578', author: 'Blueskii', Beaten: '11 Nov 2022', videoUrl: 'https://youtu.be/b0VpGcJkhHo', type: 'Level' }
    ];
 
    

    var levelList = document.getElementById('levelList');
    var challengeList = document.getElementById('challengeList');
  
    levels.forEach(function(level, index) {
      var listItem = document.createElement('div');
      listItem.classList.add('list-item');
      var listNumber = document.createElement('div');
      listNumber.classList.add('list-number');
      listNumber.textContent = '#' + (index + 1);
      var listThumbnail = document.createElement('div');
      listThumbnail.classList.add('list-thumbnail');
      var thumbnailLink = document.createElement('a');
      thumbnailLink.href = level.videoUrl;
      thumbnailLink.target = '_blank';
      var thumbnailImage = document.createElement('img');
      thumbnailImage.classList.add('list-image');
      thumbnailImage.alt = 'Level thumbnail';
      var videoId = extractVideoId(level.videoUrl);
      var thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      thumbnailImage.src = thumbnailUrl;
      thumbnailLink.appendChild(thumbnailImage);
      listThumbnail.appendChild(thumbnailLink);
      var listInfo = document.createElement('div');
      listInfo.classList.add('list-info');
      var levelName = document.createElement('p');
      levelName.classList.add('level-name');
      levelName.textContent = level.name;
      var levelInfo = document.createElement('div');
      levelInfo.classList.add('level-info');
      var levelId = document.createElement('p');
      levelId.classList.add('level-id');
      levelId.textContent = level.id;
      var levelAuthor = document.createElement('p');
      levelAuthor.classList.add('level-author');
      levelAuthor.textContent = level.author;
      var levelBeaten = document.createElement('p');
      levelBeaten.classList.add('level-beaten');
      levelBeaten.textContent = level.Beaten;
      levelInfo.appendChild(levelId);
      levelInfo.appendChild(levelAuthor);
      levelInfo.appendChild(levelBeaten);
      listInfo.appendChild(levelName);
      listInfo.appendChild(levelInfo);
      listItem.appendChild(listNumber);
      listItem.appendChild(listThumbnail);
      listItem.appendChild(listInfo);
  
      if (level.type === 'Challenge') {
        
var challengePageUrl = './challenges.html';

// Redirect to the challenges page when a challenge item is clicked
listItem.addEventListener('click', function() {
  window.location.href = challengePageUrl;
});

      } else if (level.type === 'Level') {
        levelList.appendChild(listItem);
      }
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

  
