<template>
  <div
    :class="{
      'page': true,
      'page--disabled': !ON_THIS_PAGE
    }"
    :style="{
      left: pagePosition[0],
      top: pagePosition[1],
      backgroundColor: colorScheme[pageInfo.category - 1],
    }"
  >
    <CollectionEggsBar />
    <!-- 觀察室 -->
    <div 
      v-if="pageInfo.egg.flag && pageInfo.egg.observatory.flag"
      class="page-content page-content--observatory"
    >
      <ObservatoryEggPage 
        :id="id"
        :pageInfo="pageInfo"
        :eggsCollection="eggsCollection"
      >
        <!-- 紙本921信 -->
        <slot v-if="pageInfo.key === 'ae_3'">
          <p>921地震專題的「<router-link :to="`/0/${8 + 1}`">寫一封信給921</router-link>」推出後，有317位讀者在網頁上分享921經歷，甚至有讀者在漸漸被遺忘的信紙、稿紙上寫下一行行對921的回憶、郵寄到聯合報，在數位時代，用紙本傳遞著手機沒辦法給予的溫度。</p>
        </slot>
        <!-- 選舉題 -->
        <slot v-if="pageInfo.key === 'u_5'">
          <p>那些年，我們沒有出的專題：這回總統大選，因幾位潛在總統候選人遲遲未表態是否參選，新媒體中心做了韓蔡柯（柯P）和韓蔡郭（郭董）專題備戰，而老宋宣佈參選後，中心又是一陣人仰馬翻，很想問到底是誰偷吃了鳳梨（新聞太旺）！</p>
        </slot>
        <!-- 兩岸通婚 -->
        <slot v-if="pageInfo.key === 'h_6'">
          <p>你以為<router-link :to="`/0/${8 + 1}`">兩岸婚姻</router-link>對數減少後，大家就對兩岸婚姻沒興趣了嗎？錯！兩岸婚姻專題在台灣和大陸「今日頭條」都引起熱烈討論。即使現在願意嫁來台灣的陸女少了，大家還是很愛看兩岸夫妻的相處故事（是在看八點檔嗎 XD）。</p>
        </slot>
      </ObservatoryEggPage>
    </div>

    <!-- 小劇場 -->
    <div 
      v-if="pageInfo.egg.flag && pageInfo.egg.drama.flag"
      class="page-content page-content--drama"
    >
      <DramaEggPage 
        :id="id"
        :pageInfo="pageInfo"
        :eggsCollection="eggsCollection"
      >
        <!-- 欣慈 -->
        <slot v-if="pageInfo.key === 'l_3'">
          <p>還記得到南投縣採訪921地震重建那天，龍眼林協會總幹事<router-link :to="`/0/${8 + 1}`">廖振益</router-link>踩著夾腳拖、熱情招呼，協會在震後為孤老們送餐20年，廖振益的退休老本全砸進去了，但他笑笑的跟我們說：「沒關係啦，我這樣很像『廢物再利用捏』」。</p>
          <p><br></p>
          <p>他的眉毛彎彎很可愛、笑容暖暖的，卻莫名讓人覺得很心酸；臨走前他堅持塞一袋自家種的橘子給我們，那袋橘子沉甸甸，跟採訪完的心情一樣沉重。</p>
          <p><br></p>
          <p>像廖振益這樣災後重建的故事，全台還有好多。製作921專題的半年中，總在想：我們能夠幫上什麼忙呢？</p>
        </slot>
        <!-- 佩蓉 -->
        <slot v-if="pageInfo.key === 't_3'">
          <p>製作<router-link :to="`/0/${8 + 1}`">石虎</router-link>專題時，取得一份苗栗縣石虎路殺地點資料。為了呈現石虎路殺與道路開發的相關性，製作團隊周末加班趕工，花了一番功夫將座標資料轉成可用的格式，用QGIS標在地圖上，再套疊路網圖，找出石虎路殺熱區。當時國內還沒有其他媒體將這份資料完整呈現。</p>
          <p><p></p>
          <p>他的眉毛彎彎很可愛、笑容暖暖的，卻莫名讓人覺得很心酸；臨走前他堅持塞一袋自家種的橘子給我們，那袋橘子沉甸甸，跟採訪完的心情一樣沉重。</p>
        </slot>
        <!-- 若榆 -->
        <slot v-if="pageInfo.key === 'z_3'">
          <p>吼(ノ‵□′)ノ～┴─┴ </p>
          <p><router-link :to="`/0/${8 + 1}`">數位隱私</router-link>都還沒寫完，</p>
          <p>下下下題長官明天要看，</p>
          <p>還好沒日沒夜沒有<router-link :to="`/0/${8 + 1}`">石虎</router-link>畫成豹🐆🐆🐆</p>
          <p><br></p>
          <p>年度專題照片難，首頁封面自己來，</p>
          <p>左手攝影📸，右手寫code⌨️，</p>
          <p>專題滿滿<router-link :to="`/0/${8 + 1}`">天亮之後</router-link>。</p>
          <p>灑花(*￣▽￣)/‧★*"`'*-.,_,.-*'`"*-.,_☆,.-*'`"*-.,_</p>
        </slot>      
        <!-- 藹雯 -->
        <slot v-if="pageInfo.key === 'p_4'">
          <p>製作總統大選互動小遊戲時 是我玩得最開心的時候。</p>
          <p><br></p>
          <p>當初在專案前期聽到「像遊戲一樣的感覺」這句話時，加上專題的內容本身也不那麼嚴肅 多了一點惡搞的空間，我就已經決定: 無論如何 我都要用復古的像素風格 也就是俗稱的「8bit」來製作，也很幸運的，我真的能把我升級了好一陣子的8bit技能術派上用場了。</p>
        </slot>
        <!-- 心慈 -->
        <slot v-if="pageInfo.key === 'm_5'">
          <p>製作<router-link :to="`/0/${8 + 1}`">石虎</router-link>專題時，內容多次提到路殺熱區在省道、縣道，但光看文字很難聯想這些路殺有多嚴重。收到苗栗石虎陸殺紀錄後，結合點座標位置與路線地圖，才看到路殺的全貌，並把狀況呈顯給讀者瞭解。</p>
        </slot>
        <!-- 瑋琳 -->
        <slot v-if="pageInfo.key === 'q_6'">
          <p>今年很特別的是從視覺設計跨界到PM，以視覺的角度發動<router-link :to="`/0/${8 + 1}`">酒駕插畫</router-link>專題。</p>
          <p><br></p>
          <p>很不一樣的是採訪現場除了問問題，腦中也得同時勾勒出受訪者描述的畫面，不停思考故事與插畫要如何串接，每一圖也都要和家屬來回確認，像是受害者生前穿的衣服款式、餐桌的座位、事故當下場景等。</p>
          <p><br></p>
          <p>採訪當下心情很沉重，面對家屬的眼淚，也常會不忍再繼續提問。插畫並非新的技術，但卻能帶給讀者更多想像空間，希望能用視覺的力量，為受害者家屬說出一些愛與傷痛吧。</p>
        </slot>
        <!-- 汶均 -->
        <slot v-if="pageInfo.key === 'w_6'">
          <p>去南韓採訪<router-link :to="`/0/${8 + 1}`">能源轉型</router-link>專題時，一度以為自己回不來了。</p>
          <p><br></p>
          <p>殺到離首爾3小時的新萬金採訪具環保爭議的綠能開發案，遭到南韓政府旗下開發公司阻撓我們採訪環保派學者（後來還聽說當地很多黑道...）</p>
          <p><br></p>
          <p>在地處偏遠的異地，只能再三確認飯店房門已上鎖、採訪筆記已備份，躺在漆黑的房間內，祈求自己能活過今晚。</p>
        </slot>
      </DramaEggPage>
    </div>

    <!-- 迷宮地圖 -->
    <div 
      v-if="pageInfo.egg.flag && pageInfo.egg.maze.flag"
      class="page-content"
    >    
      <MazeEggPage
        :id="id"
        :pageInfo="pageInfo"
        :eggsCollection="eggsCollection"
      />
    </div>

    <!-- 專題 -->
    <div 
      v-if="!pageInfo.egg.flag && !pageInfo.categoryCover && !pageInfo.editorFlag"
      class="page-content page-content--project"
    >
      <ProjectPage
        :id="id"
        :pageInfo="pageInfo"
      />
    </div>

    <!-- 分類首頁 -->
    <div 
      v-if="!pageInfo.egg.flag && pageInfo.categoryCover && !pageInfo.editorFlag"
      class="page-content"
    >
      <CategoryPage />
    </div>
    <div
      v-if="!pageInfo.egg.flag && !pageInfo.categoryCover && pageInfo.editorFlag"
      class=".page-content page-content--editor"
    >
      <EditorPage />
    </div>
    
  </div>
</template>

<script>
import EventBus from '@/eventBus';
import CategoryPage from "@/components/CategoryPage";
import DramaEggPage from "@/components/eggs/DramaEggPage";
import EditorPage from "@/components/EditorPage";
import MazeEggPage from "@/components/eggs/MazeEggPage";
import ObservatoryEggPage from "@/components/eggs/ObservatoryEggPage";
import ProjectPage from "@/components/ProjectPage";
import CollectionEggsBar from "./eggs/CollectionEggsBar"

export default {
  name: "Page",
  components: {
    CategoryPage,
    DramaEggPage,
    EditorPage,
    MazeEggPage,
    ObservatoryEggPage,
    ProjectPage,
    CollectionEggsBar
  },
  props: {
    pageInfo: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    colorScheme: {
      type: Array,
    },
    eggsCollection: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    isMob() {
      return window.innerWidth < 769 ? true : false;
    },
    ON_THIS_PAGE() {
      return (this.$route.params.x - 1) === this.pageInfo.x && +this.$route.params.y === this.pageInfo.y;
    },
    pagePosition() {
      return [(this.pageInfo.x + 1) * 100 + '%', this.pageInfo.y * 100 + 'vh'];
    },
  },
  watch: {
    ON_THIS_PAGE: {
      handler(value) {
        if (value) this.updatedCurrentId();
      },
    }
  },
  methods: {
    updatedCurrentId() {
      EventBus.$emit('UPDATE_CURRENTID', this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  position: absolute;
  height: 100vh;
  width: 100%;
  // color: #ffffff;
  text-align: center;
  h1 {
    color: #000000;
  }
}
.page--disabled {
  animation: page-disabled-animation 1.5s ease-in-out forwards;
  @keyframes page-disabled-animation {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
}
.page-content {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.page-content--observatory {
  height: 60%;
  border: 2px red solid;
  @media screen and (min-width: 769px) {
    width: 80%;
    height: 100%;
  }
}
.page-content--drama {
  height: 65%;
  border: 2px red solid;
  @media screen and (min-width: 769px) {
    width: 80%;
    height: 100%;
  }
}
.page-content--project {
  height: 70%;
  border: 2px red solid;
  @media screen and (min-width: 769px) {
    height: 100%;
  }
}
</style>