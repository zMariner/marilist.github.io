window.addEventListener('DOMContentLoaded', function() {
  var levels = [
    { name: '#17 - Menace 65%', id: '107805281', author: 'MannyHeffley', Beaten: '4 Aug 2025', videoUrl: 'https://youtu.be/59mbIlyOf1Y', type: 'Level' },
    { name: '#9 - Firework', id: '75206202', author: 'TrickGMD', Beaten: '20 Oct 2023', videoUrl: 'https://youtu.be/YZAoOEVvK8I', type: 'Level' },
    { name: '#21 - Poocubed', id: '85133223', author: 'Liisp', Beaten: '15 Mar 2025', videoUrl: 'https://youtu.be/ms5xPzWFNYQ?si=sA4a05Y2ipeop9kP', type: 'Level' },
    { name: '#19 - Saul Goodman', id: '90477539', author: 'Renn241', Beaten: '23 Oct 2024', videoUrl: 'https://youtu.be/_SVLhLydIcw', type: 'Level' },
    { name: '#29 - Combustion', id: '94359172', author: 'Cersia', Beaten: '29 Apr 2025', videoUrl: 'https://youtu.be/7CN82T7zdvI', type: 'Level' },
    { name: '#52 - The Golden', id: '60978746', author: 'BoBoBoBoBoBoBo', Beaten: '15 Feb 2025', videoUrl: 'https://youtu.be/ACAtm--afM4', type: 'Level' },
    { name: '#47 - Verdant Landscape', id: '76543324', author: 'Nisha', Beaten: '18 Nov 2024', videoUrl: 'https://www.youtube.com/watch?v=GabY3GWyUk4', type: 'Level' },
    { name: '#27 - UNKNOWN', id: '88203501', author: 'NineDice', Beaten: '23 Jul 2024', videoUrl: 'https://youtu.be/4oLxQ_pw798?si=fbryE57HLeZD0tIf', type: 'Level' },
    { name: '#47 - Shukketsu', id: '75286957', author: 'zYuko', Beaten: '18 Sep 2024', videoUrl: 'https://youtu.be/7XHFfPqEFcc?si=O6C0Z92lH4zWOFcx', type: 'Level' },
    { name: '#70 - Renevant', id: '58161496', author: 'Nikrodox', Beaten: '2 Aug 2024', videoUrl: 'https://youtu.be/aS4c2wqBWWk?si=MrwZU_xUTChHPyhj', type: 'Level' },
    { name: '#72 - Trueffet', id: '71434979', author: 'SyQual', Beaten: '10 May 2025', videoUrl: 'https://youtu.be/9R5JbhMtULg', type: 'Level' },
    { name: '#55 - Zodiac', id: '52374843', author: 'Bianox', Beaten: '22 Sep 2024', videoUrl: 'https://youtu.be/2MPRWSlJ0Fw', type: 'Level' },
    { name: '#111 - Cobwebs', id: '82172844', author: 'NineDice', Beaten: '15 Jan 2025', videoUrl: 'https://youtu.be/iBYUjza1Guc', type: 'Level' },
    { name: '#70 - Promethean', id: '69333212', author: 'Endlevel', Beaten: '29 Aug 2024', videoUrl: 'https://youtu.be/rTvUNXdcot8', type: 'Level' },
    { name: '#66 - SUPERHATEMEWORLD', id: '57571983', author: 'icedcave', Beaten: '18 Aug 2024', videoUrl: 'https://youtu.be/uYoY8guBbnw?si=X5GN73KapzN02N4_', type: 'Level' },
    { name: '#79 - RUST', id: '71912451', author: 'Neigefeu', Beaten: '7 May 2024', videoUrl: 'https://youtu.be/RnPaj1vjTDM?si=6GdUMw56IRg-xRAh', type: 'Level' },
    { name: '#98 - Bloodlust', id: '42584142', author: 'Knobbelboy', Beaten: '17 Feb 2024', videoUrl: 'www.youtube.com/watch?v=kgtFGxkn_wI', type: 'Level' },
    { name: '#81 - Frozen Cave', id: '68908396', author: 'TrueParadoxTeam', Beaten: '18 Apr 2023', videoUrl: 'https://www.youtube.com/watch?v=J57GlLpUbRg', type: 'Level' },
    { name: '#90 - Wasureta', id: '64658786', author: 'HelpegasuS', Beaten: '14 Mar 2023', videoUrl: 'https://www.youtube.com/watch?v=K5FK2kOptzI', type: 'Level' },
    { name: '#194 - Sonic Wave', id: '26681070', author: 'lSunix', Beaten: '25 Apr 2024', videoUrl: 'https://www.youtube.com/watch?v=R-HQrQc84AE', type: 'Level' },
    { name: '#N/A - Ruler of Everything', id: '83204544', author: 'ASBCHazel', Beaten: '2 Nov 2023', videoUrl: 'https://www.youtube.com/watch?v=yyzWFa0zoVc', type: 'Level' },
    { name: '#N/A - Fyrd Up', id: '118543855', author: 'rinjello', Beaten: '29 May 2025', videoUrl: 'https://www.youtube.com/watch?v=0i5o5GFjPoc', type: 'Level' },
    { name: '#383 - Blade of Justice', id: '35448603', author: 'Manix648', Beaten: '3 Mar 2024', videoUrl: 'https://www.youtube.com/watch?v=qYl59iCkpvY', type: 'Level' },
    { name: '#248 - Dolos', id: '58417850', author: 'Enzeux', Beaten: '1 Apr 2023', videoUrl: 'https://www.youtube.com/watch?v=iscKMHv-Lsk', type: 'Level' },
    { name: '#N/A - Moment', id: '68848817', author: 'lexycat', Beaten: '22 Oct 2023', videoUrl: 'https://www.youtube.com/watch?v=O6N_7RZsogc', type: 'Level' },
    { name: '#NDW - Shitty Minusdry', id: '90383862', author: 'Wiktor and Mystix', Beaten: '29 Apr 2023', videoUrl: 'https://www.youtube.com/watch?v=yd3RoTdunJo', type: 'Level' },
    { name: '#261 - Bloodbath', id: '10565740', author: 'Riot', Beaten: '23 Aug 2022', videoUrl: 'https://www.youtube.com/watch?v=W8cPS8VTZp0', type: 'Level' },
    { name: '#325 - Prismatic Haze', id: '59899374', author: 'Cirtrax', Beaten: '30 Mar 2023', videoUrl: 'https://www.youtube.com/watch?v=McXMhw1kafg', type: 'Level' },
    { name: '#N/A - ZOOO...OOOM', id: '93916671', author: 'Awesomeme360', Beaten: '10 Feb 2024', videoUrl: 'https://www.youtube.com/watch?v=f9PcgDLqp-w', type: 'Level' },
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
