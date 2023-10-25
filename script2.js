window.addEventListener('DOMContentLoaded', function() {
  var levels = [
    { name: 'Acheloos', id: '93991257', author: 'Mariner', Beaten: '31 Aug 2023', videoUrl: 'https://www.youtube.com/watch?v=v38Lpv_8Hmk', type: 'Challenge' },
    { name: 'Banana Beater', id: '91149251', author: 'Smickalv', Beaten: '15 Aug 2023', videoUrl: 'https://www.youtube.com/watch?v=x1-Udnf1kVw', type: 'Challenge' },
    { name: 'Under Heroine I', id: '92182309', author: 'Mariner', Beaten: '6 Jul 2023', videoUrl: 'https://www.youtube.com/watch?v=4cK_ZNj7D7c', type: 'Challenge' },
    { name: 'The Xylz Trials', id: '90885542', author: 'baconmonke', Beaten: '31 Aug 2023', videoUrl: 'https://www.youtube.com/watch?v=EN5BWf4cMsI', type: 'Challenge' },
    { name: 'Cave of Lilys', id: '91130171', author: 'WDWiktor', Beaten: '30 May 2023', videoUrl: 'https://youtu.be/6B8mPt69P4I', type: 'Challenge' },
    { name: 'In the End', id: '87989862', author: 'maaaaaaaaaaark2', Beaten: '13 May 2023', videoUrl: 'https://youtu.be/c44KdklvQ1w', type: 'Challenge' }
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
    challengeList.appendChild(listItem);

  
// Display the popup
listItem.addEventListener('click', function() {
  // Get the video ID from the video URL
  var videoId = extractVideoId(levels[index].videoUrl);

  // Create the iframe element for the embedded video
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + videoId;
  iframe.width = '560';
  iframe.height = '315';
  iframe.frameborder = '0';
  iframe.allowfullscreen = true;
  iframe.style.border = 'none';
  iframe.style.borderRadius = "10px";

  // Get the popup element
  var popup = document.getElementById('popup');

  // Clear the existing content of 'popup-video'
  var popupVideo = document.getElementById('popup-video');
  popupVideo.innerHTML = '';

  // Append the iframe to the popup video
  popupVideo.appendChild(iframe);

  // Populate the popup with the corresponding information
  document.getElementById('popup-name').textContent = levels[index].name;
  document.getElementById('popup-id').textContent = levels[index].id;
  document.getElementById('popup-author').textContent = levels[index].author;
  document.getElementById('popup-beaten').textContent = levels[index].Beaten;

  // Display the popup
  popup.classList.add('visible');
});

// Close the popup when the close button is clicked
document.getElementById('popup-close').addEventListener('click', function() {
  var popup = document.getElementById('popup');
  popup.classList.remove('visible');

  // Get the iframe element
  var iframe = document.getElementById('popup-video').querySelector('iframe');

  // Pause the video and reset the source
  iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  iframe.src = '';
});

  function extractVideoId(url) {
    var match = url.match(/(?:[?&]v=|\/embed\/|\/\d\/|\/vi\/|youtu\.be\/|\/embed\/|\/\d\/|\/vi\/)([^#&?/]+)/i);
    if (match && match[1]) {
      return match[1];
    } else {
      return '';
    }
  }
})});
