/* 
  ========================================================================================
  version      date            author            Remark
  ========================================================================================
  1.00         2026.04.30      Catherine         First edition release
  1.01         2026.05.02      Catherine         Add 4/12 & 5/1 date & BGM
  ========================================================================================
*/

const correctPassword = "20250623"; // 密碼

let currentPage = 0;
let isMusicPlaying = false;

const pages = [
  {
    date: "2025.06.23 - 2026.06.23",
    title: "一週年快樂",
    text: "資工人要用資工人的方式過一週年！",
    images: ["images/cover.jpg"]
  },
  {
    date: "2025.07.02",
    title: "第一次見我爸媽的屁",
    text: "其實是很貼心的來幫屁換藥 出車禍好痛...",
    images: ["images/accident.jpg"]
  },
  {
    date: "2025.07.05",
    title: "我們的第一部電影 F1",
    text: "屁說要當我第一個副駕！",
    images: [
                "images/f1_movie.jpg",
                "images/chinSeDeWoMen.jpg"
            ]
  },
  {
    date: "2025.07.18 - 2025.07.20",
    title: "第一次見你的兄弟們",
    text: "很開心你帶我認識你的朋友們，在台南的那三天玩得很開心。",
    images: [
                "images/first_trip_to_tainan_us_1.jpg",
                "images/first_trip_to_tainan_us_2.jpg",
                "images/first_trip_to_tainan_us_3.jpg",
                "images/first_trip_to_tainan_us_4.jpg",
                "images/first_trip_to_tainan_P.jpg",
                "images/first_trip_to_tainan_everyone.jpg",
                "images/first_trip_to_tainan_smellyFeet.jpg",
                "images/first_trip_to_tainan_steve.jpg",
                "images/first_trip_to_tainan_PsmellsGood.jpg"
            ]
  },
  {
    date: "2025.07.26",
    title: "My Handsome 屁",
    text: "吃撈撈 後來還一群人去打麻將將",
    images: ["images/handsomeP.jpg"]
  },
  {
    date: "2025.07.28",
    title: "第一次一起看甄嬛",
    text: "他們個個都要害本宮",
    images: ["images/nianShiLan.jpg"]
  },
  {
    date: "2025.08.01",
    title: "看夜景",
    text: "當心屁屁情侶 減速慢行",
    images: ["images/night_sight.jpg"]
  },
  {
    date: "2025.08.09",
    title: "第一次一起去動物園 還是夜間動物園！",
    text: "最喜歡的部分是三個人都穿得很邋遢",
    images: [
                "images/zoo1.jpg",
                "images/zoo2.jpg",
                "images/zoo3.jpg",
                "images/maltese_retriever_1.jpg",
                "images/maltese_retriever_2.jpg",
                "images/maltese_retriever_3.jpg"
            ]
  },
  {
    date: "2025.08.11",
    title: "小熊熊",
    text: "屁開直播給我看熊熊！",
    images: ["images/bear.jpg"]
  },
  {
    date: "2025.08.21",
    title: "平鎮運動公園",
    text: "我的屁真好 還幫小孩拉滑輪",
    images: [
                "images/happy_park_1.jpg",
                "images/happy_park_2.jpg",
                "images/happy_park_3.jpg"
            ]
  },
  {
    date: "2025.08.29",
    title: "七夕情人節 Oh Babe ~",
    text: "七夕夕夕夕夕 吃福柒柒柒柒柒",
    images: ["images/77valentines_hotpot.jpg"]
  },
  {
    date: "2025.08.30",
    title: "角頭 鬥陣欸",
    text: "看完電影去酒精路跑\n" +
          "還有一個小笨蛋把耳機「弄丟」 一整天都不心心",
    images: [
                "images/movie_fight.jpg",
                "images/fake_sober.jpg",
                "images/stupidP.jpg"
            ]
  },
  {
    date: "2025.09.07",
    title: "吃早餐餐 & 經典襪襪神照",
    text: "我的襪子香到不行",
    images: [
                "images/breakfast1.jpg",
                "images/breakfast2.jpg",
                "images/socks.jpg"
            ]
  },
  {
    date: "2025.09.13",
    title: "蠟筆小新：超華麗！灼熱的春日部舞者們",
    text: "我們是印度警察機密離奇懸案特殊搜查組刑警\n" +
          "卡比爾 卡查帕帕爾 帕卡帕帕爾 卡查帕帕爾 帕卡帕帕爾\n" +
          "一樣 我是迪爾\n",
    images: ["images/movie_crayonshin.jpg"]
  },
  {
    date: "2025.09.14",
    title: "96 分鐘",
    text: "啊哈哈 看完電影大吵一架 年輕氣盛呀",
    images: ["images/movie_96min.jpg"]
  },
  {
    date: "2025.09.15",
    title: "不怕蟑螂的男人最帥了",
    text: "前情提要是我的偶都拜被三隻大蟑螂包圍(可惡太帥了)",
    images: ["images/my_motorbike.jpg"]
  },
  {
    date: "2025.10.06",
    title: "竹圍漁港",
    text: "騎ㄅㄨㄅㄨ去吃生魚片 & 看海",
    images: [
                "images/fish1.jpg",
                "images/fish2.jpg",
                "images/beach.jpg",
                "images/swan.jpg"
            ]
  },
  {
    date: "2025.10.10",
    title: "中秋烤肉！",
    text: "好吃好吃 剛剪完頭的西瓜皮屁烤肉給我吃！",
    images: ["images/barbecue.jpg"]
  },
  {
    date: "2025.10.12",
    title: "屁第一次見我阿姨 & 舅公、表姨",
    text: "好吧我也沒想到是手抓飯 是有點大場面了",
    images: [
                "images/dinner_with_my_family_1.jpg",
                "images/dinner_with_my_family_2.jpg",
                "images/dinner_with_my_family_3.jpg"
            ]
  },
  {
    date: "2025.10.20",
    title: "猴子！",
    text: "屁屁猴",
    images: ["images/monkeyP.jpg"]
  },
  {
    date: "2025.10.24",
    title: "大掃除日",
    text: "過敏兒要戴好口罩！",
    images: ["images/clean_your_room.jpg"]
  },
  {
    date: "2025.10.26",
    title: "桃園萬聖城",
    text: "想跟相機哥拍照反被他拍?",
    images: [
                "images/halloween1.jpg",
                "images/halloween2.jpg",
                "images/halloween3.jpg"
            ]
  },
  {
    date: "2025.10.27",
    title: "學士服",
    text: "剛拿到學士服要試穿一下吶 畢業快樂~",
    images: ["images/try_on_Bachelor_degree_uniform.jpg"]
  },
  {
    date: "2025.11.02",
    title: "我要騎在你頭上！",
    text: "靈感來源自某路邊大叔讓小孩坐在他肩上",
    images: ["images/i_ride_u.jpg"]
  },
  {
    date: "2025.11.03",
    title: "超大盃拍照日",
    text: "屁陪拍",
    images: [
                "images/super_big_cup_1.jpg",
                "images/super_big_cup_2.jpg",
                "images/super_big_cup_3.jpg"
            ]
  },
  {
    date: "2025.11.04",
    title: "大溪老街",
    text: "在路邊抽到好籤吶\n" +
          "我們會幸運的吶",
    images: [
                "images/lucky1.jpg",
                "images/lucky2.jpg"
            ]
  },
  {
    date: "2025.11.05",
    title: "我們是配豆高手！",
    text: "是誰凌晨在玩這種很吵的遊戲 是我們",
    images: ["images/paddle.jpg"]
  },
  {
    date: "2025.11.06",
    title: "去腳皮 臭臭",
    text: "屁第一次嘗試撕腳皮",
    images: ["images/smelly_feet.jpg"]
  },
  {
    date: "2025.11.07",
    title: "雙馬尾屁！",
    text: "撈撈撈撈撈撈撈撈",
    images: [
                "images/cuteP_1.jpg",
                "images/cuteP_2.jpg",
                "images/cuteP_3.jpg"
            ]
  },
  {
    date: "2025.11.15、2025.12.05",
    title: "屁拔智齒",
    text: "自己嚇自己",
    images: [
                "images/teeth1.jpg",
                "images/teeth2.jpg",
                "images/teeth3.jpg"
            ]
  },
  {
    date: "2025.11.19",
    title: "屁第一次送我大禮物！",
    text: "送我禮物的原因還是因為8/29去台北 有人的耳機不見一天\n" +
          "屁說:「屁買給你！」 最後有找到耳機 但屁記在心上了\n" +
          "後來屁的耳機壞了 在挑型號 屁就說要買給我\n" +
          "好可愛呀 屁真好\n",
    images: [
                "images/airpods4.jpg",
                "images/airpods4_PP.jpg"
            ]
  },
  {
    date: "2025.11.23",
    title: "我們的第一個聖誕節",
    text: "到哪都有焦糖布蕾...",
    images: [
                "images/our_first_Christmas_1.jpg",
                "images/our_first_Christmas_2.jpg"
            ]
  },
  {
    date: "2025.11.29 ~ 2025.11.30",
    title: "屁的生日溫泉之旅",
    text: "最後又疲憊又驚險的走九彎十八拐趕回來還車",
    images: [
                "images/birthday_trip_1.jpg", "images/birthday_trip_2.jpg", "images/birthday_trip_3.jpg",
                "images/birthday_trip_4.jpg", "images/birthday_trip_5.jpg", "images/birthday_trip_6.jpg"
            ]
  },
  {
    date: "2025.12.01",
    title: "偷摸籌畫的生日驚喜餐",
    text: "屁下次偷摸準備驚喜屁就別懷疑呢哼\n" +
          "別人家的男孩有驚喜 我的屁屁孩也要有呢哼\n",
    images: ["images/happy_birthday.jpg"]
  },
  {
    date: "2025.12.24 ~ 2025.12.25",
    title: "第一個聖誕節！",
    text: "很日常的聖誕節 很日常的幫屁吹頭毛",
    images: [
                "images/Christmas1.jpg",
                "images/Christmas2.jpg",
                "images/Christmas3.jpg",
            ]
  },
  {
    date: "2025.12.28",
    title: "屁好看 但髮型師下面一位",
    text: "結果還因為頭髮吵了一架 哼 和好啦",
    images: ["images/disaster_hair.jpg"]
  },
  {
    date: "2025.12.31 ~ 2026.01.01",
    title: "跨年",
    text: "第一次一起跨年 第一次拍拍貼",
    images: [
                "images/HappyNewYear1.jpg", "images/HappyNewYear2.jpg",
                "images/HappyNewYear3.jpg", "images/HappyNewYear4.jpg",
                "images/HappyNewYear5.jpg", "images/HappyNewYear6.jpg",
                "images/HappyNewYear7.jpg", "images/HappyNewYear8.jpg",
            ]
  },
  {
    date: "2026.01.10",
    title: "屁去唱歌",
    text: "蔣奇遑是我的絕佳線人 哈哈哈哈哈",
    images: [
                "images/singingP1.jpg",
                "images/singingP2.jpg",
                "images/singingP3.jpg",
            ]
  },
  {
    date: "2026.01.16",
    title: "敷面膜",
    text: "屁可愛",
    images: ["images/mask.jpg"]
  },
  {
    date: "2026.01.22",
    title: "屁要成為榮民路上最靓的仔！",
    text: "穿大黃褲的屁是最可愛的對吧",
    images: ["images/shiao_bay.jpg"]
  },
  {
    date: "2026.01.23",
    title: "尾牙",
    text: "可惜沒抽中埃鳳17坡max 但有抽到1000元吶",
    images: ["images/tail_teeth.jpg"]
  },
  {
    date: "2026.01.24",
    title: "陽光女子合唱團",
    text: "先生 你懷的是我看電影要用的衛生紙嗎？是。",
    images: ["images/movie_cry.jpg"]
  },
  {
    date: "2026.02.02",
    title: "乳液",
    text: "考成大資工所前一晚屁給我抹乳液",
    images: ["images/before_exam.jpg"]
  },
  {
    date: "2026.02.10",
    title: "皺鼻子屁",
    text: "過年前的依依不捨",
    images: ["images/wrinkle_nose_P.jpg"]
  },
  {
    date: "2026.02.19",
    title: "刮刮樂",
    text: "我們賺錢錢啦！",
    images: ["images/scratch_lotto.jpg"]
  },
  {
    date: "2026.02.20",
    title: "洗車車",
    text: "第一次洗車車也是屁給我擦的車車\n" +
          "現在也還是屁給我擦的 以後也想讓屁幫我擦車車",
    images: ["images/wash_oh_do_buy.jpg"]
  },
  {
    date: "2026.03.03",
    title: "西堤的蘑菇醬吐司",
    text: "超好吃",
    images: ["images/tasty.jpg"]
  },
  {
    date: "2026.03.08",
    title: "第一次跑馬拉松",
    text: "4.5公里 不輕輕不鬆鬆 但補給站的食物很好吃",
    images: [
                "images/marathon1.jpg",
                "images/marathon2.jpg",
                "images/marathon3.jpg",
                "images/marathon4.jpg"
            ]
  },
  {
    date: "2026.03.09",
    title: "燙頭毛的帥帥屁",
    text: "真的很喜歡這個設計師 焊死你的屁屁不准離開他",
    images: [
                "images/very_good_hair_1.jpg",
                "images/very_good_hair_2.jpg"
            ]
  },
  {
    date: "2026.03.14",
    title: "第一個白色情人節！",
    text: "屁送我百合花束吶 開心得要死 真的很漂漂\n" +
          "等你發達了 屁還要花花吶",
    images: [
                "images/valentines_day_1.jpg",
                "images/valentines_day_2.jpg",
                "images/valentines_day_3.jpg",
            ]
  },
  {
    date: "2026.03.18",
    title: "beautiful 翹嘴羊羊",
    text: "我化的妝呢哼 屁美麗",
    images: [
                "images/beautiful_chiao_tzue_sheep.jpg",
                "images/sleepy_P.jpg"
            ]
  },
  {
    date: "2026.03.24 ~ 2026.03.29",
    title: "畢旅 東京",
    text: "喜歡鎌倉像漫畫一樣的景色\n" +
          "喜歡第二天晚上我們去晴空塔散步約會\n" +
          "喜歡穿和服帥氣的屁 & 美麗的我\n" +
          "喜歡第四天的 City Walk 約會\n"+
          "每天都很喜歡 特別喜歡你\n" +
          "下次還要去日本！還要抽卡！",
    images: [
                "images/gradTrip1.jpg", "images/gradTrip2.jpg", "images/gradTrip3.jpg", "images/gradTrip4.jpg",
                "images/gradTrip5.jpg", "images/gradTrip6.jpg", "images/gradTrip7.jpg", "images/gradTrip8.jpg",
                "images/gradTrip9.jpg", "images/gradTrip10.jpg", "images/gradTrip11.jpg", "images/gradTrip12.jpg",
                "images/gradTrip13.jpg", "images/gradTrip14.jpg", "images/gradTrip15.jpg", "images/gradTrip16.jpg",
                "images/gradTrip17.jpg", "images/gradTrip18.jpg", "images/gradTrip19.jpg", "images/gradTrip20.jpg",
            ]
  },
  {
    date: "2026.04.02、2026.04.05、2026.04.08、\n" + "2026.04.11、2026.04.12",
    title: "奶爸屁",
    text: "我去香港的時候是誰照顧頓頓跟鵝鵝的啊？\n" +
          "是我的寶貝屁呢！\n",
    images: [
                "images/hangyodon_daddy_1.jpg",
                "images/hangyodon_daddy_2.jpg",
                "images/hangyodon_daddy_3.jpg",
                "images/hangyodon_daddy_4.jpg",
                "images/hangyodon_penguin_daddy_5.jpg",
                "images/hangyodon_penguin_daddy_6.jpg",
                "images/hangyodon_penguin_daddy_7.jpg",
                /* 1.01 Start*/
                "images/hangyodon_penguin_daddy_8.jpg"
                /* 1.01 End */
            ]
  },
  {
    date: "2026.04.11",
    title: "親親",
    text: "我的上唇 + 你的下唇 = 親親 (變態版)",
    images: ["images/kiss.jpg"]
  },
  {
    date: "2026.04.30",
    title: "屁唱歌讓我外婆笑到直不起腰",
    text: "下次再聽你唱一次芒果醬醬的喜歡你 可愛吶",
    images: [
                "images/singingP_laghingGranny_1.jpg",
                "images/singingP_laghingGranny_2.jpg"
            ]
  },
  /* 1.01 Start*/
  {
    date: "2026.05.01",
    title: "穿著普拉達的惡魔2",
    text: "看電影吶\n" +
          "屁還抽到隱藏款比奇堡的居民 厲害吶\n" +
          "在公園還帶頓頓跟鵝鵝盪輪胎鞦韆吶",
    images: [
                "images/prada_1.jpg",
                "images/prada_2.jpg",
                "images/prada_3.jpg",
                "images/prada_4.jpg"
            ]
  },
  /* 1.01 End */
  {
    date: "2025 ~ 2026",
    title: "Study 碎片",
    text: "我們會上岸的！",
    images: [
                "images/study1.jpg", "images/study2.jpg", "images/study3.jpg", "images/study4.jpg",
                "images/study5.jpg", "images/study6.jpg", "images/study7.jpg", "images/study8.jpg",
                "images/study9.jpg", "images/study10.jpg", "images/study11.jpg", "images/study12.jpg",
                "images/study13.jpg", "images/study14.jpg"
            ]
  },
  {
    date: "2025.02.03 ~ 2026.01.30",
    title: "一些光光幼兒園碎片",
    text: "我的屁綁啾啾！",
    images: [
                "images/asecl_1.jpg", "images/asecl_2.jpg", "images/asecl_3.jpg",
                "images/asecl_4.jpg", "images/asecl_5.jpg", "images/asecl_6.jpg",
                "images/asecl_7.jpg", "images/asecl_8.jpg", "images/asecl_9.jpg",
                "images/asecl_10.jpg"
            ]
  },
  {
    title: "未來清單",
    type: "checklist",
    text: "下一年想和你一起完成的事",
    checklist: [
                    "一起去環島",
                    "一起考完研",
                    "一起吃一間很想吃的餐廳",
                    "一起跑完半馬",
                    "一起變成更好的人"
                ],
    images: ["images/wishlist.jpg"]
  },
  {
    title: "To my cutie 屁",
    text:  "謝謝屁陪我走完一年 我們的故事還未完待續呢\n" +
           "希望往後的日子裡你都能開開心心的\n" +
           "未來我們還要繼續吃很多好吃的、去很多地方、經歷很多事\n" +
           "會吵吵鬧鬧 但會一直和好\n" +
           "雖然以後可能會越來越忙 沒有今年的精彩\n" +
           "但屁會一直喜歡你的 心裡都是你\n" +
           "就算沒幹嘛 忙裡偷閒也會想跟你待再一起\n" +
           "發呆也想跟你一起發呆(你呆呆)\n" +
           "以後也請多指教吶\n" +
           "一周年快樂 我的屁屁寶♡\n",
    images: ["images/our_cuties.jpg"]
  }
];

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const errorMessage = document.getElementById("errorMessage");

  if (input === correctPassword) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("storyPage").classList.remove("hidden");
    renderPage();
    document.getElementById("bgm").play(); /* 1.01 Add */
  } else {
    errorMessage.textContent = "密碼怎麼能打錯呢 ♡";
  }
}

function renderPage() {
  const page = pages[currentPage];

  const dateEl = document.getElementById("storyDate");
  const titleEl = document.getElementById("storyTitle");
  const textEl = document.getElementById("storyText");
  const photoSlider = document.getElementById("photoSlider");

  // 每次換頁都先重設內容
  dateEl.textContent = "";
  titleEl.textContent = "";
  textEl.textContent = "";

  titleEl.textContent = page.title || "";

  if (page.type === "checklist") {
    dateEl.style.display = "none";
    photoSlider.style.display = "none";

    textEl.style.display = "block";
    textEl.textContent = page.text || "";
  } else {
    dateEl.style.display = "block";
    photoSlider.style.display = "flex";
    textEl.style.display = "block";

    dateEl.textContent = page.date || "";
    textEl.textContent = page.text || "";

    renderPhotos(page.images || []);
  }

  renderChecklist(page);
  renderDots();
  renderMenu();
}

function renderPhotos(images) {
  const photoSlider = document.getElementById("photoSlider");
  photoSlider.innerHTML = "";

  if (images.length === 1) {
    photoSlider.classList.add("single-photo");
  } else {
    photoSlider.classList.remove("single-photo");
  }

  function setActivePhotoByIndex(activeIndex) {
    const allPhotos = photoSlider.querySelectorAll("img");

    allPhotos.forEach(function (photo, index) {
      if (index === activeIndex) {
        photo.classList.add("active-photo");
      } else {
        photo.classList.remove("active-photo");
      }
    });
  }

  function updateActivePhotoByVisibleArea() {
    const allPhotos = photoSlider.querySelectorAll("img");

    const sliderRect = photoSlider.getBoundingClientRect();
    const sliderLeft = sliderRect.left;
    const sliderRight = sliderRect.right;

    let activeIndex = 0;
    let maxVisibleWidth = 0;

    allPhotos.forEach(function (img, index) {
      const imgRect = img.getBoundingClientRect();

      const visibleLeft = Math.max(sliderLeft, imgRect.left);
      const visibleRight = Math.min(sliderRight, imgRect.right);

      const visibleWidth = Math.max(0, visibleRight - visibleLeft);

      if (visibleWidth > maxVisibleWidth) {
        maxVisibleWidth = visibleWidth;
        activeIndex = index;
      }
    });

    setActivePhotoByIndex(activeIndex);
  }

  images.forEach(function (image, index) {
    const img = document.createElement("img");

    img.src = image;
    img.alt = "memory photo";
    img.loading = "lazy";
    img.decoding = "async";

    if (index === 0) {
      img.classList.add("active-photo");
    }

    img.addEventListener("click", function () {
      setActivePhotoByIndex(index);

      img.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    });

    photoSlider.appendChild(img);
  });

  setTimeout(function () {
    const firstImg = photoSlider.querySelector("img");

    if (firstImg) {
      firstImg.scrollIntoView({
        behavior: "auto",
        inline: "center",
        block: "nearest"
      });
    }

    updateActivePhotoByVisibleArea();
  }, 100);

  let ticking = false;

  photoSlider.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateActivePhotoByVisibleArea();
        ticking = false;
      });

      ticking = true;
    }
  });
}

function renderDots() {
  const pageDots = document.getElementById("pageDots");
  pageDots.innerHTML = "";

  const maxVisibleDots = 5;

  let start = Math.max(0, currentPage - 2);
  let end = Math.min(pages.length - 1, currentPage + 2);

  if (currentPage <= 1) {
    start = 0;
    end = Math.min(pages.length - 1, maxVisibleDots - 1);
  }

  if (currentPage >= pages.length - 2) {
    end = pages.length - 1;
    start = Math.max(0, pages.length - maxVisibleDots);
  }

  if (start > 0) {
    const leftMore = document.createElement("span");
    leftMore.textContent = "…";
    leftMore.classList.add("dot-more");
    pageDots.appendChild(leftMore);
  }

  for (let i = start; i <= end; i++) {
    const dot = document.createElement("button");
    dot.classList.add("dot");

    if (i === currentPage) {
      dot.classList.add("active-dot");
    }

    dot.addEventListener("click", function () {
      currentPage = i;
      renderPage();
    });

    pageDots.appendChild(dot);
  }

  if (end < pages.length - 1) {
    const rightMore = document.createElement("span");
    rightMore.textContent = "…";
    rightMore.classList.add("dot-more");
    pageDots.appendChild(rightMore);
  }
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

function toggleMusic() {
  const bgm = document.getElementById("bgm");

  if (isMusicPlaying) {
    bgm.pause();
    isMusicPlaying = false;
  } else {
    bgm.play();
    isMusicPlaying = true;
  }
}

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

const storyPage = document.getElementById("storyPage");

storyPage.addEventListener("touchstart", function (event) {
  // 如果手指從照片區開始滑，就不要觸發翻頁
  if (event.target.closest(".photo-touch-zone")) {
  return;
  }

  touchStartX = event.changedTouches[0].screenX;
  touchStartY = event.changedTouches[0].screenY;
});

storyPage.addEventListener("touchend", function (event) {
  // 如果手指在照片區結束，也不要觸發翻頁
  if (event.target.closest(".photo-touch-zone")) {
  return;
  }

  touchEndX = event.changedTouches[0].screenX;
  touchEndY = event.changedTouches[0].screenY;

  handlePageSwipe();
});

function handlePageSwipe() {
  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;

  // 必須是明顯左右滑，才切頁
  if (Math.abs(diffX) < 80) {
    return;
  }

  // 如果上下滑動比左右滑動明顯，就不要切頁
  if (Math.abs(diffY) > Math.abs(diffX) * 0.6) {
    return;
  }

  if (diffX > 0) {
    prevPage();
  } else {
    nextPage();
  }
}

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > 80) {
    prevPage();
  }

  if (swipeDistance < -80) {
    nextPage();
  }
}

function renderChecklist(page) {
  const checklistArea = document.getElementById("checklistArea");

  checklistArea.innerHTML = "";

  if (page.type !== "checklist") {
    checklistArea.style.display = "none";
    return;
  }

  checklistArea.style.display = "block";

  const savedChecks =
    JSON.parse(localStorage.getItem("anniversaryChecklist")) || {};

  page.checklist.forEach(function (item, index) {
    const label = document.createElement("label");
    label.classList.add("check-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = savedChecks[index] || false;

    checkbox.addEventListener("change", function () {
      savedChecks[index] = checkbox.checked;
      localStorage.setItem(
        "anniversaryChecklist",
        JSON.stringify(savedChecks)
      );
    });

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(item));

    checklistArea.appendChild(label);
  });
}

function toggleMenu() {
  const pageMenu = document.getElementById("pageMenu");
  pageMenu.classList.toggle("hidden");
}

function renderMenu() {
  const menuList = document.getElementById("menuList");
  menuList.innerHTML = "";

  pages.forEach(function (page, index) {
    const item = document.createElement("button");
    item.classList.add("menu-item");
    item.textContent = page.title || `第 ${index + 1} 頁`;

    if (index === currentPage) {
      item.classList.add("active-menu-item");
    }

    item.addEventListener("click", function () {
      currentPage = index;
      renderPage();
      document.getElementById("pageMenu").classList.add("hidden");
    });

    menuList.appendChild(item);
  });
}

/* 電腦鍵盤左右鍵切頁 */
document.addEventListener("keydown", function (event) {
  if (document.getElementById("storyPage").classList.contains("hidden")) {
    return;
  }

  if (event.key === "ArrowRight") {
    nextPage();
  }

  if (event.key === "ArrowLeft") {
    prevPage();
  }
});
/* 電腦鍵盤左右鍵切頁 */

/* 密碼頁按 Enter 登入 */
document.getElementById("passwordInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkPassword();
  }
});
/* 密碼頁按 Enter 登入 */
