window.addEventListener('DOMContentLoaded', function() {
  var levels = [
    { name: 'Under Heroine I', id: '92182309', author: 'Mariner', Beaten: '6 Jul 2023', videoUrl: 'https://www.youtube.com/watch?v=4cK_ZNj7D7c', type: 'Challenge' },
    { name: 'Cave of Lilys', id: '91130171', author: 'WDWiktor', Beaten: '30 May 2023', videoUrl: 'https://youtu.be/6B8mPt69P4I', type: 'Challenge' },
    { name: 'In the End', id: '87989862', author: 'maaaaaaaaaaark2', Beaten: '13 May 2023', videoUrl: 'https://youtu.be/c44KdklvQ1w', type: 'Challenge' }
  ];

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

    challengeList.appendChild(listItem);
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
