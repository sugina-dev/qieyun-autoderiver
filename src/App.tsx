import tingle from "tingle.js";
import "purecss/build/pure.css";
import "tingle.js/src/tingle.css";
import "./App.css";

import Main from "./Main";

const modalAbout = new tingle.modal({ closeLabel: "" });
modalAbout.setContent(`
<h2>關於</h2>
<p>切韻音系自動推導器（下稱「本頁面」）由 <a href="https://nk2028.shn.hk/">Ngiox Khyen 2028 項目</a>開發。我們開發有關語言學的項目，尤其是有關歷史漢語語音學，異體字和日語語言學的項目。</p>
<p>歡迎加入 QQ 音韻學答疑羣（羣號 526333751）和 Telegram 更新頻道（<a href="https://t.me/nk2028">@nk2028</a>）。</p>
<p>本頁面原始碼公開於 <a href="https://github.com/nk2028/qieyun-autoderiver">GitHub</a>。</p>

<h2>私隱權政策</h2>
<p>本頁面是一項開放原始碼的網絡服務。作為本頁面的開發者，我們對閣下的私隱非常重視。本頁面的開發者不會透過本頁面收集閣下的任何資料。</p>
<p>下面將具體介紹本頁面能在何種程度上保障閣下的私隱權。</p>
<b>閣下鍵入的內容</b>
<p>本頁面的開發者不會收集閣下在本頁面中鍵入的任何內容。任何與閣下鍵入的內容相關的運算全部在閣下的系統中完成。本頁面不會將包括待標註的文本、標註結果在內的任何資料傳送至任何伺服器。</p>
<b>閣下的其他資料</b>
<p>本頁面使用的內容託管於以下站點：GitHub Pages、jsDelivr、Google Fonts、cdnjs。在閣下訪問本頁面時，閣下的瀏覽器將與這些站點交互。本頁面的開發者並不能讀取閣下訪問這些站點時產生的資料，亦無法控制這些站點如何使用閣下訪問時產生的資料。</p>
`);

function App() {
  return (
    <div className="tingle-content-wrapper">
      <header>
        <nav>
          <h1>
            <span onClick={() => modalAbout.open()}>切韻音系自動推導器</span>
          </h1>
        </nav>
      </header>
      <Main />
    </div>
  );
}

export default App;
