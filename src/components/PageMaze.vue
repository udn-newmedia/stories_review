<template>
  <div
    class="page-maze-container"
    :style="{
      backgroundColor: colorScheme[currentCategory - 1],
    }"
  >
    <CoverPage :isLeaveCover="isLeaveCover" />
    <div
      class="page-maze"
      :style="{transform: computeTranslate}"
    >
      <Page
        v-for="(item, index) in mazeData"
        :key="index"
        :pageInfo="item"
        :id="index"
        :eggsCollection="eggsCollection"
        :colorScheme="colorScheme"
      />
    </div>
    <CollectionEggsBar :mazeMapFlag="mazeMapFlag" :currentId="currentId" :colorScheme="colorScheme" :pageInfo="mazeData[currentId]" />
    <div
      :class="{
        'page-maze-map': true,
        'page-maze-map--active': mazeMapFlag,
      }"
    >
      <MazeMap 
        :mazeData="mazeData"
        :colorScheme="colorScheme"
        :currentId="currentId"
        :mazeMapFlag="mazeMapFlag"
      />
    </div>
    <DirController
      :mazeMapFlag="mazeMapFlag"
      :mazeIndexTable="mazeIndexTable"
      :currentCategory="currentCategory"
    />
    <AwardHint
      v-if="mazeData[currentId].award"
    />
  </div>
</template>

<script>
import EventBus from '@/eventBus';
import AwardHint from "./AwardHint";
import CoverPage from "./CoverPage";
import DirController from "./DirController";
import MazeMap from "./MazeMap";
import Page from "./Page";
import CollectionEggsBar from "./eggs/CollectionEggsBar";

export default {
  name: "PageMaze",
  components: {
    AwardHint,
    CoverPage,
    DirController,
    MazeMap,
    Page,
    CollectionEggsBar
  },
  data() {
    return {
      mazeData: {
        0: {
          x: 0,
          y: 0,
          key: 'c_3',
          title: '製作有23個分頁的\n超級大專題',
          cover: {
            mob: require('@/assets/category/title01_mob.png'),
            pc: require('@/assets/category/title01.png')
          },
          coverSize: {
            mob: {
              width: 300,
              height: 518,
            },
            pc: {
              width: 1011,
              height: 492,
            }
          },
          description: '',
          category: 1,
          categoryCover: true,
          egg: {
            flag: false,
          },
        },
        1: {
          x: 1,
          y: 0,
          key: 'd_3',
          title: '天亮之後\n921地震廿周年',
          cover: require('@/assets/project_cover/d_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        2: {
          x: 2,
          y: 0,
          key: 'e_3',
          title: '地圖迷宮',
          category: 5,
          egg: {
            flag: true,
            collected: false,
            skin: require('@/assets/eggs/E_3.svg'),
            drama: {},
            observatory: {},
            maze: {
              flag: true,
            }
          },
        },
        3: {
          x: 3,
          y: 0,
          key: 'f_3',
          title: '921地震廿年系列人物一\n地震孤兒長大了',
          cover: require('@/assets/project_cover/f_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/people/children/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        4: {
          x: 4,
          y: 0,
          key: 'g_3',
          title: '921地震廿年系列人物二\n忘不了沒救出的人',
          cover: require('@/assets/project_cover/g_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/people/ke/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        5: {
          x: 5,
          y: 0,
          key: 'h_3',
          title: '921地震廿年系列人物三\n震出回家的路',
          cover: require('@/assets/project_cover/h_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/people/lin/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        6: {
          x: 6,
          y: 0,
          key: 'i_3',
          title: '921地震廿年系列人物四\n地不搖了人生餘震才開始',
          cover: require('@/assets/project_cover/i_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/people/hsieh/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        7: {
          x: 7,
          y: 0,
          key: 'j_3',
          title: '921地震廿年系列人物五\n自己的村民自己救',
          cover: require('@/assets/project_cover/j_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/people/qiu/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        8: {
          x: 8,
          y: 0,
          key: 'k_3',
          title: '921地震廿年系列人物六\n內褲村長救廿七命',
          cover: require('@/assets/project_cover/k_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/people/liao/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        9: {
          x: 9,
          y: 0,
          key: 'l_3',
          title: '新媒小劇場',
          category: 5,
          egg: {
            flag: true,
            collected: false,
            skin: require('@/assets/eggs/L_3.svg'),
            drama: {
              flag: true,
              job: '數位內容製作',
              name: '洪欣慈',
              profile: {
                mob: 'https://p3.udn.com.tw/stories_review/drama/profile/mob/hong_mob.mp4',
                pc: 'https://p3.udn.com.tw/stories_review/drama/profile/pc/hong.mp4',
              }
            },
            observatory: {},
            maze: {}
          },
        },
        10: {
          x: 10,
          y: 0,
          key: 'm_3',
          title: '921大地震廿周年\n重建與重生',
          cover: require('@/assets/project_cover/m_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/rebuild/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        11: {
          x: 11,
          y: 0,
          key: 'n_3',
          title: '921地震災區重建故事一\n小村變生態城\n不依賴「英明領導人」',
          cover: require('@/assets/project_cover/n_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/rebuild/liao/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        12: {
          x: 12,
          y: 0,
          key: 'o_3',
          title: '921地震災區重建故事一\n小村變生態城\n不依賴「英明領導人」',
          cover: require('@/assets/project_cover/o_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/rebuild/huang/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        13: {
          x: 13,
          y: 0,
          key: 'p_3',
          title: '921地震災區重建故事三\n用淚水走過20年\n打造老人幸福桃花源',
          cover: require('@/assets/project_cover/p_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/rebuild/tzu/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        14: {
          x: 14,
          y: 0,
          key: 'q_3',
          title: '921地震災區重建故事四\n推動偏鄉閱讀\n無名英雄支撐台灣',
          cover: require('@/assets/project_cover/q_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/rebuild/cheng/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        15: {
          x: 15,
          y: 0,
          key: 'r_3',
          title: '921地震災區重建故事五\n災後的天空\n太平藍站上巴黎',
          cover: require('@/assets/project_cover/r_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/rebuild/yeh/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        16: {
          x: 16,
          y: 0,
          key: 's_3',
          title: '921地震災區重建故事六\n921讓民力崛起',
          cover: require('@/assets/project_cover/s_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/rebuild/hsieh/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        17: {
          x: 17,
          y: 0,
          key: 't_3',
          title: '新媒小劇場',
          category: 5,
          egg: {
            flag: true,
            collected: false,
            skin: require('@/assets/eggs/T_3.svg'),
            drama: {
              flag: true,
              job: '數位內容製作',
              name: '蔡佩蓉',
              profile: {
                mob: 'https://p3.udn.com.tw/stories_review/drama/profile/mob/tsai_mob.mp4',
                pc: 'https://p3.udn.com.tw/stories_review/drama/profile/pc/tsai.mp4',
              }
            },
            observatory: {},
            maze: {}
          },
        },
        18: {
          x: 18,
          y: 0,
          key: 'u_3',
          title: '【調查報導】\n建築耐震補強20年仍牛步\n下次地震怎麼辦？',
          cover: require('@/assets/project_cover/u_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/live/#/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        19: {
          x: 19,
          y: 0,
          key: 'v_3',
          title: '【建築耐震總體檢1】\n公共建築耐震補強\n行政院掛蛋',
          cover: require('@/assets/project_cover/v_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/live/#/public_building',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        20: {
          x: 20,
          y: 0,
          key: 'w_3',
          title: '【建築耐震總體檢2】\n近斷層老舊建築\n5萬棟暗藏風險',
          cover: require('@/assets/project_cover/w_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/live/#/damaged_building',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        21: {
          x: 21,
          y: 0,
          key: 'x_3',
          title: '【建築耐震總體檢3】\n私有建築補強卡關\n防災成空談',
          cover: require('@/assets/project_cover/x_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/live/#/earthquake_resistance',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        22: {
          x: 22,
          y: 0,
          key: 'y_3',
          title: '921再震一次\n台灣準備好了嗎？',
          cover: require('@/assets/project_cover/y_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/resilientcity/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        23: {
          x: 23,
          y: 0,
          key: 'z_3',
          title: '新媒小劇場',
          category: 5,
          egg: {
            flag: true,
            collected: false,
            skin: require('@/assets/eggs/Z_3.svg'),
            drama: {
              flag: true,
              job: '工程師',
              name: '楊若榆',
              profile: {
                mob: "https://p3.udn.com.tw/stories_review/drama/profile/mob/yang_mob.mp4",
                pc: "https://p3.udn.com.tw/stories_review/drama/profile/pc/yang.mp4",
              }
            },
            observatory: {},
            maze: {}
          },
        },
        24: {
          x: 24,
          y: 0,
          key: 'aa_3',
          title: '【921地震廿周年】\n斷層旁住滿人',
          cover: require('@/assets/project_cover/aa_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/resilientcity/fault/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        25: {
          x: 25,
          y: 0,
          key: 'ab_3',
          title: '【921地震廿周年】\n救災時忙表單',
          cover: require('@/assets/project_cover/ab_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/resilientcity/response/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        26: {
          x: 26,
          y: 0,
          key: 'ac_3',
          title: '【921地震廿周年】\n你家耐震嗎？',
          cover: require('@/assets/project_cover/ac_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/safehome/#/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        27: {
          x: 27,
          y: 0,
          key: 'ad_3',
          title: '【921地震廿周年】\n寫一封信給921',
          cover: require('@/assets/project_cover/ad_3.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/921/memory/#/',
          create: '2019.09.16',
          category: 1,
          award: false,
          egg: {
            flag: false,
          },
        },
        28: {
          x: 28,
          y: 0,
          key: 'ae_3',
          title: '新媒觀察室 紙本921信',
          category: 5,
          egg: {
            flag: true,
            collected: false,
            skin: require('@/assets/eggs/AE_3.svg'),
            drama: {},
            observatory: {
              flag: true,
              pics: {
                mob: [
                  require('@/assets/observatory/AE_3_pic01_mob.jpg'),
                  require('@/assets/observatory/AE_3_pic02_mob.jpg'),
                ],
                pc: [
                  require('@/assets/observatory/AE_3_pic01.jpg'),
                  require('@/assets/observatory/AE_3_pic02.jpg'),
                ],
              },
            },
            maze: {}
          },
        },
        29: {
          x: 0,
          y: 1,
          key: 'c_4',
          title: '原來調查報導可以這樣玩！',
          cover: {
            mob: require('@/assets/category/title02_mob.png'),
            pc: require('@/assets/category/title02.png')
          },
          coverSize: {
            mob: {
              width: 371,
              height: 427,
            },
            pc: {
              width: 1003,
              height: 481,
            }
          },
          description: '',
          category: 2,
          categoryCover: true,
          egg: {
            flag: false,
          },
        },
        30: {
          x: 1,
          y: 1,
          key: 'd_4',
          title: '農場動物的眼淚\n餐桌美味背後的飼養悲歌',
          cover: require('@/assets/project_cover/d_4.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/animal_welfare/',
          create: '2019.09.26',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        31: {
          x: 2,
          y: 1,
          key: 'e_4',
          title: '格子籠雞的悲鳴：\nA4空間活一生\n牠們淪為產蛋機器',
          cover: require('@/assets/project_cover/e_4.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/animal_welfare/hen/',
          create: '2019.09.26',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        32: {
          x: 3,
          y: 1,
          key: 'f_4',
          title: '囚禁牢籠的母豬：\n鐵欄圈出的世界\n牠們連翻身都無法',
          cover: require('@/assets/project_cover/f_4.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/animal_welfare/pig/',
          create: '2019.09.26',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        33: {
          x: 4,
          y: 1,
          key: 'g_4',
          title: '消瘦見骨的乳牛：\n天氣好熱吃不下\n牠們還被壓榨產乳',
          cover: require('@/assets/project_cover/g_4.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/animal_welfare/cow/',
          create: '2019.09.26',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        34: {
          x: 5,
          y: 1,
          key: 'h_4',
          title: '消費者該怎麼做：\n蛋農轉型好難？\n消費市場是靠山',
          cover: require('@/assets/project_cover/h_4.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/animal_welfare/solution/#/',
          create: '2019.09.26',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        35: {
          x: 6,
          y: 1,
          key: 'i_4',
          title: '消費者該怎麼做：\n沒土地、缺資金\n誰來推動動物福利轉型',
          cover: require('@/assets/project_cover/i_4.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/animal_welfare/solution/#/01',
          create: '2019.09.26',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        36: {
          x: 7,
          y: 1,
          key: 'j_4',
          title: '消費者該怎麼做：\n牛隻友善生產指南出爐\n產業呼籲接地氣',
          cover: require('@/assets/project_cover/j_4.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/animal_welfare/solution/#/02',
          create: '2019.09.26',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        37: {
          x: 8,
          y: 1,
          key: 'k_4',
          title: '消費者該怎麼做：\n身為消費者\n我該如何支持友善飼養',
          cover: require('@/assets/project_cover/k_4.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/animal_welfare/solution/#/03',
          create: '2019.09.26',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        38: {
          x: 9,
          y: 1,
          key: 'l_4',
          title: '揭開白色巨塔謊言\n你的手術醫材是二手貨',
          cover: require('@/assets/project_cover/l_4.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/medical_material/#/',
          create: '2019.05.09',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        39: {
          x: 10,
          y: 1,
          key: 'm_4',
          title: '揭開白色巨塔謊言\n醫院重複使用10次',
          cover: require('@/assets/project_cover/m_4.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/medical_material/#/2',
          create: '2019.05.09',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        40: {
          x: 11,
          y: 1,
          key: 'n_4',
          title: '揭開白色巨塔謊言\n病患恐有感染風險',
          cover: require('@/assets/project_cover/n_4.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/medical_material/#/3',
          create: '2019.05.09',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        41: {
          x: 12,
          y: 1,
          key: 'o_4',
          title: '揭開白色巨塔謊言\n術前你該如何自保',
          cover: require('@/assets/project_cover/o_4.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/medical_material/#/end',
          create: '2019.05.09',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        42: {
          x: 13,
          y: 1,
          key: 'p_4',
          title: '新媒小劇場',
          category: 5,
          egg: {
            flag: true,
            collected: false,
            skin: require('@/assets/eggs/P_4.svg'),
            drama: {
              flag: true,
              job: '動畫師',
              name: '許藹雯',
              profile: {
                mob: 'https://p3.udn.com.tw/stories_review/drama/profile/mob/hsu2_mob.mp4',
                pc: 'https://p3.udn.com.tw/stories_review/drama/profile/pc/hsu2.mp4',
              }
            },
            observatory: {},
            maze: {}
          },
        },
        43: {
          x: 14,
          y: 1,
          key: 'q_4',
          title: '消失的紙餐盒\n回收一場空？',
          cover: require('@/assets/project_cover/q_4.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/recycle/',
          create: '2019.06.05',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        44: {
          x: 15,
          y: 1,
          key: 'r_4',
          title: '政府管理失能\n後果百姓承擔？',
          cover: require('@/assets/project_cover/r_4.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/recycle/government/',
          create: '2019.06.05',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        45: {
          x: 16,
          y: 1,
          key: 's_4',
          title: '減用餐盒飲料杯\n不只自備這條路',
          cover: require('@/assets/project_cover/s_4.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/recycle/reduction/',
          create: '2019.06.05',
          category: 2,
          award: false,
          egg: {
            flag: false,
          },
        },
        46: {
          x: 0,
          y: 2,
          key: 'c_5',
          title: '最酷最炫的資料呈現\n都在這裡',
          cover: {
            mob: require('@/assets/category/title03_mob.png'),
            pc: require('@/assets/category/title03.png')
          },
          coverSize: {
            mob: {
              width: 392,
              height: 477,
            },
            pc: {
              width: 1129,
              height: 503,
            }
          },
          description: '',
          category: 3,
          categoryCover: true,
          egg: {
            flag: false,
          },
        },
        47: {
          x: 1,
          y: 2,
          key: 'd_5',
          title: '迷宮地圖',
          category: 5,
          egg: {
            flag: true,
            collected: false,
            skin: require('@/assets/eggs/D_5.svg'),
            drama: {},
            observatory: {},
            maze: {
              flag: true,
            }
          },
        },
        48: {
          x: 2,
          y: 2,
          key: 'e_5',
          title: '當寶島變熱島\n高溫會殺人',
          cover: require('@/assets/project_cover/e_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect/',
          create: '2019.06.18',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        49: {
          x: 3,
          y: 2,
          key: 'f_5',
          title: '當寶島變熱島\n幫都市退燒',
          cover: require('@/assets/project_cover/f_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_taiwan/',
          create: '2019.06.18',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        50: {
          x: 4,
          y: 2,
          key: 'g_5',
          title: '當寶島變熱島\n新加坡用綠化降溫',
          cover: require('@/assets/project_cover/g_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_abroad/',
          create: '2019.06.18',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        51: {
          x: 5,
          y: 2,
          key: 'h_5',
          title: '誰殺了石虎\n路殺、官僚殺\n血跡斑斑的保育悲歌',
          cover: require('@/assets/project_cover/h_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/leopardcat/index.html',
          create: '2019.03.28',
          category: 3,
          award: true,
          egg: {
            flag: false,
          },
        },
        52: {
          x: 6,
          y: 2,
          key: 'i_5',
          title: '誰殺了石虎之一\n馬路變墳場\n8年75隻石虎遭路殺',
          cover: require('@/assets/project_cover/i_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic1/',
          create: '2019.03.28',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        53: {
          x: 7,
          y: 2,
          key: 'j_5',
          title: '誰殺了石虎之二\n毀棲地蓋公園\n官僚式前瞻計畫殺石虎',
          cover: require('@/assets/project_cover/j_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic2/',
          create: '2019.03.28',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        54: {
          x: 8,
          y: 2,
          key: 'k_5',
          title: '誰殺了石虎之三\n開發案圍攻\n「像插在石虎心臟的刀」',
          cover: require('@/assets/project_cover/k_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic3/',
          create: '2019.03.28',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        55: {
          x: 9,
          y: 2,
          key: 'l_5',
          title: '誰殺了石虎之四\n設動物生態廊道\n給石虎一條安全回家的路',
          cover: require('@/assets/project_cover/l_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic4/',
          create: '2019.03.28',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        56: {
          x: 10,
          y: 2,
          key: 'm_5',
          title: '新媒小劇場',
          category: 5,
          egg: {
            flag: true,
            collected: false,
            skin: require('@/assets/eggs/M_5.svg'),
            drama: {
              flag: true,
              job: '視覺設計師',
              name: '張心慈',
              profile: {
                mob: 'https://p3.udn.com.tw/stories_review/drama/profile/mob/chang_mob.mp4',
                pc: 'https://p3.udn.com.tw/stories_review/drama/profile/pc/chang.mp4',
              }
            },
            observatory: {},
            maze: {}
          },
        },
        57: {
          x: 11,
          y: 2,
          key: 'n_5',
          title: '2020 總統大選 韓蔡對決\n初選分析',
          cover: require('@/assets/project_cover/n_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/han_tsai/#/',
          create: '2019.07.15',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        58: {
          x: 12,
          y: 2,
          key: 'o_5',
          title: '2020 總統大選 韓蔡對決',
          cover: require('@/assets/project_cover/o_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/han_tsai/#/pk',
          create: '2019.07.15',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        59: {
          x: 13,
          y: 2,
          key: 'p_5',
          title: '2020 總統大選 韓蔡對決\n民調趨勢',
          cover: require('@/assets/project_cover/p_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/han_tsai/#/poll',
          create: '2019.07.15',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        60: {
          x: 14,
          y: 2,
          key: 'q_5',
          title: '長榮罷工 你該知道的事\n旅客權益',
          cover: require('@/assets/project_cover/q_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/EVA_strike/#/',
          create: '2019.06.21',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        61: {
          x: 15,
          y: 2,
          key: 'r_5',
          title: '長榮罷工 你該知道的事\n為何罷工',
          cover: require('@/assets/project_cover/r_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/EVA_strike/#/QA/',
          create: '2019.06.21',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        62: {
          x: 16,
          y: 2,
          key: 's_5',
          title: '長榮罷工 你該知道的事\n空服人生',
          cover: require('@/assets/project_cover/s_5.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/EVA_strike/#/flightattendants/',
          create: '2019.06.21',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        63: {
          x: 17,
          y: 2,
          key: 't_5',
          title: '人進來 票進來\n北漂南漂都有利綠營？',
          cover: require('@/assets/project_cover/t_5.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/election2020/population/',
          create: '2019.11.26',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        64: {
          x: 18,
          y: 2,
          key: 'u_5',
          title: '新媒觀察室 選舉題',
          category: 5,
          egg: {
            flag: true,
            collected: false,
            skin: require('@/assets/eggs/U_5.svg'),
            drama: {},
            observatory: {
              flag: true,
              pics: {
                mob: [
                  require('@/assets/observatory/U_5_pic_mob.jpg'),
                ],
                pc: [
                  require('@/assets/observatory/U_5_pic.jpg'),
                ],
              },
            },
            maze: {}
          },
        },
        65: {
          x: 19,
          y: 2,
          key: 'v_5',
          title: '綁樁動員 老招無效\n誰能吸引搖擺移入人口？',
          cover: require('@/assets/project_cover/v_5.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/election2020/population/analysis/',
          create: '2019.11.26',
          category: 3,
          award: false,
          egg: {
            flag: false,
          },
        },
        66: {
          x: 0,
          y: 3,
          key: 'c_6',
          title: '用視覺亮點打造\n讓人忘不了的專題',
          cover: {
            mob: require('@/assets/category/title04_mob.png'),
            pc: require('@/assets/category/title04.png')
          },
          coverSize: {
            mob: {
              width: 363,
              height: 562,
            },
            pc: {
              width: 1128,
              height: 428,
            }
          },
          description: '',
          category: 4,
          award: false,
          categoryCover: true,
          egg: {
            flag: false,
          },
        },
        67: {
          x: 1,
          y: 3,
          key: 'd_6',
          title: '愛冷卻了？兩岸婚姻大退潮',
          cover: require('@/assets/project_cover/d_6.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/marriage/data/',
          create: '2019.10.07',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        68: {
          x: 2,
          y: 3,
          key: 'e_6',
          title: '三段兩岸婚姻的告白',
          cover: require('@/assets/project_cover/e_6.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/marriage/story/',
          create: '2019.10.07',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        69: {
          x: 3,
          y: 3,
          key: 'f_6',
          title: '四個兩岸婚姻的考驗',
          cover: require('@/assets/project_cover/f_6.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/marriage/issue/',
          create: '2019.10.07',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        70: {
          x: 4,
          y: 3,
          key: 'g_6',
          title: '兩岸同志何時能婚？',
          cover: require('@/assets/project_cover/g_6.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/marriage/same-sex/',
          create: '2019.10.07',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        71: {
          x: 5,
          y: 3,
          key: 'h_6',
          title: '新媒觀察室 兩岸通婚',
          category: 5,
          egg: {
            flag: true,
            collected: false,
            skin: require('@/assets/eggs/H_6.svg'),
            drama: {},
            observatory: {
              flag: true,
              pics: {
                mob: [
                  require('@/assets/observatory/H_6_pic_mob.jpg'),
                ],
                pc: [
                  require('@/assets/observatory/H_6_pic.jpg'),
                ],
              },
            },
            maze: {}
          },
        },
        72: {
          x: 6,
          y: 3,
          key: 'i_6',
          title: '【來不及說再見】\n被酒駕撞碎的生命故事',
          cover: require('@/assets/project_cover/i_6.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/DUI_victim_stories/',
          create: '2019.05.09',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        73: {
          x: 7,
          y: 3,
          key: 'j_6',
          title: '【來不及說再見】\n好想再幫妳做便當',
          cover: require('@/assets/project_cover/j_6.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/DUI_victim_stories/tzu/',
          create: '2019.05.09',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        74: {
          x: 8,
          y: 3,
          key: 'k_6',
          title: '【來不及說再見】\n他的法式甜點夢',
          cover: require('@/assets/project_cover/k_6.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/DUI_victim_stories/pang/',
          create: '2019.05.09',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        75: {
          x: 9,
          y: 3,
          key: 'l_6',
          title: '【來不及說再見】\n永遠的小公主',
          cover: require('@/assets/project_cover/l_6.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/DUI_victim_stories/yun/',
          create: '2019.05.09',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        76: {
          x: 10,
          y: 3,
          key: 'm_6',
          title: '【來不及說再見】\n等你開口叫媽媽',
          cover: require('@/assets/project_cover/m_6.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/DUI_victim_stories/hao/',
          create: '2019.05.09',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        77: {
          x: 11,
          y: 3,
          key: 'n_6',
          title: '【來不及說再見】\n我的黃金右腳',
          cover: require('@/assets/project_cover/n_6.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/DUI_victim_stories/hung/',
          create: '2019.05.09',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        78: {
          x: 12,
          y: 3,
          key: 'o_6',
          title: '【來不及說再見】\n打擊酒駕：持續的戰役',
          cover: require('@/assets/project_cover/o_6.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/DUI_victim_stories/law_amendment/',
          create: '2019.05.09',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        79: {
          x: 13,
          y: 3,
          key: 'p_6',
          title: '【來不及說再見】\n寫實插畫風格\n描繪酒駕受害者生命故事',
          cover: require('@/assets/project_cover/p_6.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/DUI_victim_stories/behind_the_scenes/',
          create: '2019.05.14',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        80: {
          x: 14,
          y: 3,
          key: 'q_6',
          title: '新媒小劇場',
          category: 5,
          egg: {
            flag: true,
            collected: false,
            skin: require('@/assets/eggs/Q_6.svg'),
            drama: {
              flag: true,
              job: '視覺設計師',
              name: '許瑋琳',
              profile: {
                mob: 'https://p3.udn.com.tw/stories_review/drama/profile/mob/hsu1_mob.mp4',
                pc: 'https://p3.udn.com.tw/stories_review/drama/profile/pc/hsu1.mp4',
              }
            },
            observatory: {},
            maze: {}
          },
        },
        81: {
          x: 15,
          y: 3,
          key: 'r_6',
          title: '按讚、打卡、看影音\n你的數位隱私保障了嗎！\n數位隱私變商品',
          cover: require('@/assets/project_cover/r_6.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/digital_privacy/',
          create: '2019.03.25',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        82: {
          x: 16,
          y: 3,
          key: 's_6',
          title: '數位人權誰來把關！\n政府就是洩漏個資的兇手',
          cover: require('@/assets/project_cover/s_6.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/digital_privacy/government/',
          create: '2019.03.25',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        83: {
          x: 17,
          y: 3,
          key: 't_6',
          title: '你是網路透明人嗎？\n測驗你的隱私危險指數',
          cover: require('@/assets/project_cover/t_6.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/digital_privacy/quiz/',
          create: '2019.03.25',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        84: {
          x: 18,
          y: 3,
          key: 'u_6',
          title: '福島的重生\n從核災縣變綠能大縣',
          cover: require('@/assets/project_cover/u_6.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/global_energy_transition/Japan/',
          create: '2019.10.14',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        85: {
          x: 19,
          y: 3,
          key: 'v_6',
          title: '南韓再生能源中心\n落腳新萬金',
          cover: require('@/assets/project_cover/v_6.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/global_energy_transition/South_Korea/#article',
          create: '2019.10.14',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        86: {
          x: 20,
          y: 3,
          key: 'w_6',
          title: '新媒小劇場',
          category: 5,
          egg: {
            flag: true,
            collected: false,
            skin: require('@/assets/eggs/W_6.svg'),
            drama: {
              flag: true,
              job: '數位內容製作',
              name: '謝汶均',
              profile: {
                mob: 'https://p3.udn.com.tw/stories_review/drama/profile/mob/hsieh_mob.mp4',
                pc: 'https://p3.udn.com.tw/stories_review/drama/profile/pc/hsieh.mp4',
              }
            },
            observatory: {},
            maze: {}
          },
        },
        87: {
          x: 21,
          y: 3,
          key: 'x_6',
          title: '德國人最無法忍受的事\n別讓燃煤壞了啤酒',
          cover: require('@/assets/project_cover/x_6.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/global_energy_transition/Germany/#article',
          create: '2019.10.14',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        88: {
          x: 22,
          y: 3,
          key: 'y_6',
          title: '一場零碳排的綠色革命\n荷蘭用風力開火車',
          cover: require('@/assets/project_cover/y_6.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/global_energy_transition/The_Netherlands/#article',
          create: '2019.10.14',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        89: {
          x: 23,
          y: 3,
          key: 'z_6',
          title: '英國地方創生典範\n風電觀光潮正夯！',
          cover: require('@/assets/project_cover/z_6.jpg'),
          description: '',
          url: 'https://udn.com/newmedia/2019/global_energy_transition/United_Kingdom/#article',
          create: '2019.10.14',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        90: {
          x: 24,
          y: 3,
          key: 'aa_6',
          title: '比監視器更可怕\n誰在偷看你的個資？',
          cover: require('@/assets/project_cover/aa_6.jpg'),
          description: '',
          url: 'https://udn.com/upf/newmedia/2019_data/security/',
          create: '2019.01.30',
          category: 4,
          award: false,
          egg: {
            flag: false,
          },
        },
        91: {
          x: 0,
          y: 4,
          key: 'c_7',
          title: '製作團隊',
          cover: '',
          category: 6,
          description: '',
          editorFlag: true,
          egg: {
            flag: false,
          },
        },
      },
      mazeIndexTable: [
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0],
        [7, 0],
        [8, 0],
        [9, 0],
        [10, 0],
        [11, 0],
        [12, 0],
        [13, 0],
        [14, 0],
        [15, 0],
        [16, 0],
        [17, 0],
        [18, 0],
        [19, 0],
        [20, 0],
        [21, 0],
        [22, 0],
        [23, 0],
        [24, 0],
        [25, 0],
        [26, 0],
        [27, 0],
        [28, 0],
        [29, 0],
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],
        [6, 1],
        [7, 1],
        [8, 1],
        [9, 1],
        [10, 1],
        [11, 1],
        [12, 1],
        [13, 1],
        [14, 1],
        [15, 1],
        [16, 1],
        [17, 1],
        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 2],
        [6, 2],
        [7, 2],
        [8, 2],
        [9, 2],
        [10, 2],
        [11, 2],
        [12, 2],
        [13, 2],
        [14, 2],
        [15, 2],
        [16, 2],
        [17, 2],
        [18, 2],
        [19, 2],
        [20, 2],
        [1, 3],
        [2, 3],
        [3, 3],
        [4, 3],
        [5, 3],
        [6, 3],
        [7, 3],
        [8, 3],
        [9, 3],
        [10, 3],
        [11, 3],
        [12, 3],
        [13, 3],
        [14, 3],
        [15, 3],
        [16, 3],
        [17, 3],
        [18, 3],
        [19, 3],
        [20, 3],
        [21, 3],
        [22, 3],
        [23, 3],
        [24, 3],
        [25, 3],
        [1, 4],
      ],
      eggsCollection: 0,
      colorScheme: [
        '#40de7b',
        '#f45b74',
        '#fa6b46',
        '#a2c4fd',
        '#3d3657',
        '#ffffff',
      ],
      currentId: '0',
      mazeMapFlag: false,
    };
  },
  computed: {
    computeTranslate() {
      return (
        "translate(" +
        this.$store.state.x * -100 +
        "%, " +
        this.$store.state.y * -100 +
        "vh)"
      );
    },
    currentCategory() {
      return this.isLeaveCover === false ? 6 : this.mazeData[this.currentId].category;
    },
    isLeaveCover() {
      return this.$store.state.x > 0;
    }
  },
  mounted() {
    EventBus.$on('UPDATE_COLLECTED', (payload) => {
      if (!this.mazeData[payload].egg.collected) {
        this.mazeData[payload].egg.collected = true;
        this.eggsCollection++;
      }
    });
    EventBus.$on('UPDATE_CURRENTID', (payload) => {
      this.currentId = payload;
    });
    EventBus.$on('UPDATE_MAZEMAP_FLAG', (payload) => {
      this.mazeMapFlag = payload;
    });
  },
};
</script>

<style lang="scss" scoped>
.page-maze-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  text-align: center;
  transition: 0.666s ease-in-out;
  .page-maze {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.666s ease-in-out;
  }
  .page-maze-map {
    visibility: hidden;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #3d3657;
    opacity: 0;
    transition: 0.666s ease-in-out;
  }
  .page-maze-map--active {
    visibility: visible;
    pointer-events: auto;
    position: fixed;
    z-index: 500;
    background: #3d3657;
    opacity: 1;
  }
}
</style>