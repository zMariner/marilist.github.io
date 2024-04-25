window.addEventListener('DOMContentLoaded', function() {
  var levels = [
      { name: '#9 - Firework', id: '75206202', author: 'TrickGMD', Beaten: '20 Oct 2023', videoUrl: 'https://youtu.be/YZAoOEVvK8I', type: 'Level' },
    { name: '#98 - Bloodlust', id: '42584142', author: 'Knobbelboy', Beaten: '17 Feb 2024', videoUrl: 'www.youtube.com/watch?v=kgtFGxkn_wI', type: 'Level' },
    { name: '#81 - Frozen Cave', id: '68908396', author: 'TrueParadoxTeam', Beaten: '18 Apr 2023', videoUrl: 'https://www.youtube.com/watch?v=J57GlLpUbRg', type: 'Level' },
    { name: '#194 - Sonic Wave', id: '26681070', author: 'lSunix', Beaten: '25 Apr 2024', videoUrl: 'https://www.youtube.com/watch?v=R-HQrQc84AE', type: 'Level' },
    { name: '#90 - Wasureta', id: '64658786', author: 'HelpegasuS', Beaten: '14 Mar 2023', videoUrl: 'https://www.youtube.com/watch?v=K5FK2kOptzI', type: 'Level' },
    { name: '#N/A - Ruler of Everything', id: '83204544', author: 'ASBCHazel', Beaten: '2 Nov 2023', videoUrl: 'https://www.youtube.com/watch?v=yyzWFa0zoVc', type: 'Level' },
    { name: '#383 - Blade of Justice', id: '35448603', author: 'Manix648', Beaten: '3 Mar 2024', videoUrl: 'https://www.youtube.com/watch?v=qYl59iCkpvY', type: 'Level' },
    { name: '#248 - Dolos', id: '58417850', author: 'Enzeux', Beaten: '1 Apr 2023', videoUrl: 'https://www.youtube.com/watch?v=iscKMHv-Lsk', type: 'Level' },
    { name: '#N/A - Moment', id: '68848817', author: 'lexycat', Beaten: '22 Oct 2023', videoUrl: 'https://www.youtube.com/watch?v=O6N_7RZsogc', type: 'Level' },
    { name: '#NDW - Shitty Minusdry', id: '90383862', author: 'Wiktor and Mystix', Beaten: '29 Apr 2023', videoUrl: 'https://www.youtube.com/watch?v=yd3RoTdunJo', type: 'Level' },
    { name: '#261 - Bloodbath', id: '10565740', author: 'Riot', Beaten: '23 Aug 2022', videoUrl: 'https://www.youtube.com/watch?v=W8cPS8VTZp0', type: 'Level' },
    { name: '#325 - Prismatic Haze', id: '59899374', author: 'Cirtrax', Beaten: '30 Mar 2023', videoUrl: 'https://www.youtube.com/watch?v=McXMhw1kafg', type: 'Level' },
    { name: '#N/A - ZOOOOOOOOOOOOOOOOOOM', id: '93916671', author: 'Awesomeme360', Beaten: '10 Feb 2024', videoUrl: 'https://www.youtube.com/watch?v=f9PcgDLqp-w', type: 'Level' },
    { name: '#N/A - Shukufuku', id: '93916671', author: 'Joker179114', Beaten: '14 Dec 2023', videoUrl: 'https://youtu.be/wqMrlZlwXRs', type: 'Level' },
    { name: '#475 - Allegiance', id: '20761188', author: 'Nikroplays', Beaten: '4 Feb 2024', videoUrl: 'https://www.youtube.com/watch?v=Y7ptSSsMr1M', type: 'Level' },
    { name: '#N/A - Gunslinga Corridor', id: '58069223', author: 'zEvilPrisma', Beaten: '10 Nov 2023', videoUrl: 'https://youtu.be/30ZLPEsNatM', type: 'Level' },
    { name: '#347 - Cataclysm', id: '3979721', author: 'Ggb0y', Beaten: '2 Aug 2022', videoUrl: 'https://www.youtube.com/watch?v=0r-7XShVfeg', type: 'Level' },
    { name: '#N/A - Acu', id: '61079355', author: 'Neigefeu', Beaten: '27 Dec 2022', videoUrl: 'https://www.youtube.com/watch?v=uraoLJbRsfk', type: 'Level' },
    { name: '#N/A - Hidden in the Sand', id: '87481937', author: 'ASBCHazel', Beaten: '3 Mar 2023', videoUrl: 'https://www.youtube.com/watch?v=b6Fr7SEcy84', type: 'Level' },
    { name: '#N/A - Spin Right Round', id: '91737656', author: 'Blueskii', Beaten: '8 Aug 2023', videoUrl: 'https://youtu.be/lc2inLYqBb4', type: 'Level' },
    { name: '#N/A - Firewall', id: '13437081', author: 'Hinds', Beaten: '28 Jul 2022', videoUrl: 'https://www.youtube.com/watch?v=A2-I-os-oKs', type: 'Level' },
    { name: '#N/A - Leyak', id: '61137742', author: 'EnZore', Beaten: '2 Dec 2023', videoUrl: 'https://youtu.be/3avU-gYCakA', type: 'Level' },
    { name: '#N/A - Supersonic', id: '4706930', author: 'ZenticAlpha', Beaten: '18 Jul 2022', videoUrl: 'https://youtu.be/l97leHRa4xU?si=6RJFxsNHgBzn80xb', type: 'Level' },
    { name: '#N/A - My Time', id: '82595578', author: 'Blueskii', Beaten: '11 Nov 2022', videoUrl: 'https://youtu.be/b0VpGcJkhHo', type: 'Level' },
    { name: '#N/A - 8o', id: '9145301', author: 'Zobros', Beaten: '8 Jul 2022', videoUrl: 'https://www.youtube.com/watch?v=Q-vbTISgQBs', type: 'Level' },
    { name: '#N/A - Windy Landscape', id: '4957691', author: 'WOOGI1411', Beaten: '6 Jul 2022', videoUrl: 'https://www.youtube.com/watch?v=8r-RiL_kc1w', type: 'Level' }
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
    levelList.appendChild(listItem);

  
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
