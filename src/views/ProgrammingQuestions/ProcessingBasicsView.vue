<template>
  <div id="contents">
    <div class="pa-3">
      <ContentTitle>
        <template v-slot:jp-title>Processing基本知識</template>
        <template v-slot:title>>Processing Basics</template>
        <template v-slot:info>
          プログラミング体験の問題を解く上で必要となるProcessingの基本知識をまとめました。プログラミング体験の問題に挑戦する前に一読すると問題が解きやすくなります
        </template>
      </ContentTitle>
      <div class="content pa-3 mt-5">
        <div class="item">
          <h2>1. Processingとは</h2>
          <ul class="pl-4">
            <li>アートやデザインができるプログラミング言語</li>
            <li>Javaというプログラミング言語がベースである</li>
            <li>無料で利用することができる</li>
          </ul>
        </div>
        <div class="item">
          <div class="min-item">
            <h2>2. 図形を描く</h2>
            Processingでは、絵を描くキャンバスのサイズを決めてから、図形を描く命令を出します。<br />
            それでは実際に図形を描いてみます。
          </div>
          <div class="min-item">
            <h3>2-1. 円を描く</h3>
            円を描くには以下のコードを書いて実行します。
            <div class="code-box">
              <pre>
<code>
  size(250, 250); <span class="small">//キャンバスのサイズ</span>
  <span class="small">//円を描く命令</span>
  ellipse(125, 125, 100, 100);</code>
    </pre>
            </div>
            <code>ellipse()</code
            >は円や楕円を描くことができる関数で、()の中に「中心のx座標、
            中心のy座標、幅、高さ」の順番で値を指定すると描くことができます。
            実際に上記のコードを実行すと以下のような円が表示されます。
          </div>

          <div class="min-item">
            <div class="canvas" id="canvas2-1"></div>
          </div>
          <div>
            <h3>2-2. 長方形を描く</h3>
            長方形を描くには以下のコードを書いて実行します。

            <div class="min-item">
              <div class="code-box">
                <pre>
<code>
  size(250, 250); <span class="small">//キャンバスのサイズ</span>
  <span class="small">//長方形を描く命令</span>
  rect(75, 75, 100, 100);</code>
    </pre>
              </div>
              <code>rect()</code
              >は長方形を描くことができる関数で、()の中に「左上のx座標、左上のy座標、幅、高さ」の順番で値を指定すると描くことができます。
              実際に上記のコードを実行すと以下のような正方形が表示されます。
            </div>
            <div class="min-item">
              <div class="canvas" id="canvas2-2"></div>
            </div>
            上記以外にも、点を描く<code>point()</code>、線を描く<code>line()</code>、三角形を描く<code>triangle()</code>などの関数があります。
          </div>
        </div>
        <div class="item">
          <h2>3. 変数</h2>
          <div class="min-item">
            <h3>3-1. 変数の宣言</h3>
            変数とは、プログラムの中で値を保存しておく箱のようなもののことです。中に入れた値は、使うことはもちろん、値を変更することもできます。
          </div>
          <div class="min-item">
            2-1で学んだ円を、今回は変数を使って描いてみましょう。
            コードは以下のようになります。

            <div class="code-box">
              <pre>
<code>
  size(250, 250);
  int x = 125;    <span class="small">//中心のx座標の変数</span>
  int y = 125;    <span class="small">//中心のy座標の変数</span>
  int d = 100;    <span class="small">//半径</span>
  ellipse(x, y, d, d);</code>
    </pre>
            </div>
            このコードを実行すると、2-1と同じ結果が得られます。
          </div>
          <div class="min-item">
            <h3>3-2. 演算子</h3>
            宣言した変数の値を変更するには演算子という「<code>+, -, *, /</code
            >」のような記号を使用します。<br />
            実際に使用した例が以下になります。
            <div class="code-box">
              <pre>
<code>
  int x = 10; <span class="small">//変数を作成</span>
  x = x + 1;  <span class="small">//"+"は「足す」のでxの値は"11"</span>
  x = x - 1;  <span class="small">//"-"は「引く」のでxの値は"9"</span>
  x = x * 2;  <span class="small">//"*"は「かける」のでxの値は"20"</span>
  x = x / 2;  <span class="small">//"/"は「割る」のでxの値は"5"</span></code>
    </pre>
            </div>
            <h3>3-3. 変数の型</h3>
            変数を作成する際には、変数の型を指定する必要があります。3-1や3-2で<code>int</code>と書かれていたものがそれにあたります。<br />
            ここでは、<code>int</code>型と<code>float</code>型について紹介します。
          </div>
          <div class="min-item">
            <h4>■ <code style="font-weight: var(--bold)">int</code>型</h4>
            <code>int</code>型は、整数のみ入れることができます。<br /><code
              >int</code
            >とは整数を意味する<code>integer</code>の略です。
          </div>
          <h4>■ <code style="font-weight: var(--bold)">float</code>型</h4>
          <code>float</code
          >型は、小数点以下を含めた実数を入れることができます。<br />
          変数の計算において、小数点以下を含めて計算したい場合は<code>float</code>型を使用します。
          <div class="code-box">
            <pre>
<code>
  int x = 0.1;   <span class="small">//型が合っていないため使用不可</span>
  float x = 0.1; <span class="small">//型が合っているため使用可能</span></code>
    </pre>
          </div>
          また、どちらの方も許容できる値の範囲が限られているため、注意する必要があります。
        </div>
        <div class="item">
          <h2>4. 繰り返し処理</h2>
          <div class="min-item">
            プログラミングでは、同じ処理を行うような場合、「繰り返し処理」を行います。<br />
            例えば、円を複数描く際には、<code>ellipse()</code>を何回も書くのではなく、<code>for</code>文と呼ばれる構文を使って、<code>ellipse()</code>は一度書くだけで済ませるように記述します。<br />
            実際にどのようなコードを書くのか紹介します。
          </div>

          <div class="min-item">
            <h3>4-1. <code style="font-weight: var(--bold)">for</code>文</h3>
            for文は、セミコロン (;)
            で区切られた3つの式で繰り返し処理を行う回数を制御します。<br />
            書き方は以下の通りです。
            <div class="code-box">
              <pre>
<code>
  for (int i = 1; i &lt;= 10; i = i + 1) {
    <span class="small">//繰り返し行う処理</span>
  }
</code>
</pre>
            </div>
            3つの式がそれぞれ意味する内容を説明すると、<code>int i = 1</code
            >で変数を宣言して初期値を設定、<code>i &lt;= 10</code
            >で繰り返し処理を行う回数、<code>i = i + 1</code
            >で変数の値を変更しています。<br />
            上記のコードでは、変数<code>i</code>に1ずつ追加され、<code>i</code>が10になるまで<code>for</code>文内の処理が繰り替えされるので、「10回」<code>for</code>文の中に書いた処理が行われることになります。<br />
            （ちなみに、<code>i &lt;= 10</code>を<code>i &lt; 10</code
            >とした場合には<code>i</code>が10になる時は含まれないため、「9回」処理が行われることになります。）
          </div>

          例として、上記の<code>for文</code>で、線を描く<code>line()</code>を使って、10本の線を書いてみます。
          コードは以下のようになります。
          <div class="code-box">
            <pre>
<code>
  size(250, 250);
  int x = 80;
  for(int i = 1; i&lt;10; i++){
    line(x , 80, x , 170);
    x += 10;
  }
</code>
</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from "../../components/ContentTitle.vue";
import p5 from "p5";
import { p5Setup1, p5Setup2 } from "../../js/p5/basics/2-1_circle";
export default {
  name: "ProcessingBasicView",
  components: {
    ContentTitle,
  },
  mounted() {
    new p5(p5Setup1);
    new p5(p5Setup2);
  },
};
</script>

<style scoped>
.content {
  background-color: white;
  min-height: 100dvh;
  border-radius: 0.2rem;
}
.item {
  padding-bottom: 32px;
}
.min-item {
  padding-bottom: 20px;
}
h2 {
  padding-bottom: 16px;
}
h3 {
  padding-bottom: 12px;
}
.code-box {
  background-color: #010440;
  margin: 1rem 0;
}
pre {
  white-space: pre-wrap;
}
code {
  font-family: hack, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  font-style: normal;
  word-wrap: break-word;
}
.code-box code {
  color: #e1e1e1;
}

.canvas {
  display: flex;
  justify-content: center;
  position: relative;
}
</style>
