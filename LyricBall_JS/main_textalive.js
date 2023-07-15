const { Player, Ease } = TextAliveApp;

const player = new Player({
  app: { token: "your token here" },
});

player.addListener({
  onTimeUpdate,
  onTimerReady,
});

const playBtn = document.querySelector("#play");

function SongSet(id, url) {
  console.log(id);
  console.log(url);
  if (id != 0) songLists[id]();
  else player.createFromSongUrl(url);
}

let c;
let p = 0;
let is_;
let end = false;
let i = 0;
//毎フレーム呼ぶ
function onTimeUpdate(position) {
  if (!player.video.firstChar) {
    return;
  }
  //なぜか数回、positionして大きい値が渡されるための対処
  if (i < 6) {
    i++;
    if (position > 600) {
      console.log(`想定しない値-positon:${position}`);
      return;
    }
  }
  if (player.video.data.endTime < position && !end) {
    gameInstance.SendMessage("JSLisnerOBJ", "SongEnd", 1);
    end = true;
  }
  SendChoruses(position);
  let current = c || player.video.firstChar;
  while (current && current.startTime < position + 100) {
    if (c !== current) {
      gameInstance.SendMessage("JSLisnerOBJ", "SendChar", current.text);
      c = current;
    }
    current = current.next;
  }
}

let is_choruses = false;

function SendChoruses(position) {
  let now_choruses = false;
  for (let i = 0; i < p.length; i++) {
    if (position > p[i].startTime && position < p[i].endTime) {
      now_choruses = true;
      break;
    }
  }
  if (is_choruses != now_choruses) {
    if (now_choruses) gameInstance.SendMessage("JSLisnerOBJ", "Choruses", 1);
    else gameInstance.SendMessage("JSLisnerOBJ", "Choruses", 0);
    is_choruses = now_choruses;
  }
}

//loadが完了したら呼ばれる
function onTimerReady() {
  p = player.getChoruses();
  gameInstance.SendMessage("JSLisnerOBJ", "SetSongName", player.data.song.name);
  gameInstance.SendMessage(
    "JSLisnerOBJ",
    "ArtistName",
    player.data.song.artist.name
  );
  document.querySelector("#overlay").style.display = "block";
}

// function onTimerReady() {
//   artistSpan.textContent = player.data.song.artist.name;
//   songSpan.textContent = player.data.song.name;

//   document.querySelectorAll("button").forEach((btn) => (btn.disabled = false));

//   let p = player.video.firstPhrase;
//   jumpBtn.disabled = !p;
//   console.log(player.data.getChoruses());
//   while (p && p.next) {
//     p.animate = animatePhrase;
//     p = p.next;
//   }
// }

// function onThrottledTimeUpdate(position) {
//   positionEl.textContent = String(Math.floor(position));
// }

// function animatePhrase(now, unit) {
//   // show current phrase
//   if (unit.contains(now)) {
//     phraseEl.textContent = unit.text;
//   }
// }

const songLists = {
  // king妃jack躍 / 宮守文学 feat. 初音ミク
  1: function () {
    player.createFromSongUrl("https://piapro.jp/t/ucgN/20230110005414", {
      video: {
        // 音楽地図訂正履歴: https://songle.jp/songs/2427948/history
        beatId: 4267297,
        chordId: 2405019,
        repetitiveSegmentId: 2475577 /* 5月6日更新 */,
        // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FucgN%2F20230110005414
        lyricId: 56092,
        lyricDiffId: 9636,
      },
    });
  },
  //生きること / nogumi feat. 初音ミク
  2: function () {
    player.createFromSongUrl("https://piapro.jp/t/fnhJ/20230131212038", {
      video: {
        // 音楽地図訂正履歴: https://songle.jp/songs/2427949/history
        beatId: 4267300,
        chordId: 2405033,
        repetitiveSegmentId: 2475606,
        // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FfnhJ%2F20230131212038
        lyricId: 56131,
        lyricDiffId: 9638,
      },
    });
  },
  //唱明者 / すこやか大聖堂 feat. KAITO
  3: function () {
    player.createFromSongUrl("https://piapro.jp/t/Vfrl/20230120182855", {
      video: {
        // 音楽地図訂正履歴: https://songle.jp/songs/2427950/history
        beatId: 4267334,
        chordId: 2405059,
        repetitiveSegmentId: 2475645,
        // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FVfrl%2F20230120182855
        lyricId: 56095,
        lyricDiffId: 9637,
      },
    });
  },
  // ネオンライトの海を往く / Ponchi♪ feat. 初音ミク
  4: function () {
    player.createFromSongUrl("https://piapro.jp/t/fyxI/20230203003935", {
      video: {
        // 音楽地図訂正履歴: https://songle.jp/songs/2427951/history
        beatId: 4267373,
        chordId: 2405138,
        repetitiveSegmentId: 2475664,
        // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FfyxI%2F20230203003935
        lyricId: 56096,
        lyricDiffId: 9639,
      },
    });
  },
  //ミュウテイション / Rin（Kuroneko Lounge） feat. 初音ミク
  5: function () {
    player.createFromSongUrl("https://piapro.jp/t/Wk83/20230203141007", {
      video: {
        // 音楽地図訂正履歴: https://songle.jp/songs/2427952/history
        beatId: 4267381,
        chordId: 2405285,
        repetitiveSegmentId: 2475676,
        // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FWk83%2F20230203141007
        lyricId: 56812 /* 6月27日更新 */,
        lyricDiffId: 10668 /* 6月27日更新 */,
      },
    });
  },
  //Entrust via 39 / ikomai feat. 初音ミク
  6: function () {
    player.createFromSongUrl("https://piapro.jp/t/Ya0_/20230201235034", {
      video: {
        // 音楽地図訂正履歴: https://songle.jp/songs/2427953/history
        beatId: 4269734,
        chordId: 2405723,
        repetitiveSegmentId: 2475686,
        // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FYa0_%2F20230201235034
        lyricId: 56098,
        lyricDiffId: 9643,
      },
    });
  },
};
