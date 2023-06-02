import { store } from "./index";
import labo01Img from "/src/assets/labs/情報セキュリティ.svg";
import labo02Img from "/src/assets/labs/計算言語学.svg";
import labo03Img from "/src/assets/labs/ビジュアルコンピューティング.svg";
import labo04Img from "/src/assets/labs/ビジュアルコンピューティング.svg";
import labo05Img from "/src/assets/labs/メディア応用.svg";
import labo06Img from "/src/assets/labs/メディア応用.svg";
import labo07Img from "/src/assets/labs/音響コミュニケーション.svg";
import labo08Img from "/src/assets/labs/インタラクティブグラフィックス.svg";
import labo09Img from "/src/assets/labs/実空間コンピューティング.svg";
import labo10Img from "/src/assets/labs/Web工学.svg";
import labo11Img from "/src/assets/labs/知的メディア.svg";
import labo12Img from "/src/assets/labs/知的計算システム.svg";

export default {
  namespaced: true,
  state: {
    labo: {
      labo_1: {
        eventType: "終日開催",
        display: true,
        cardTitle: "情報セキュリティ研究室",
        title: "情報セキュリティ研究室",
        professor: {
          name: "寺田 真敏 ",
          type: "教授",
        },
        tags: ["ネットワークセキュリティ", "暗号応用", "機械学習"],
        place: "1号館4階演習室",
        info: "インターネットの進展に伴いセキュリティが重要な課題になっています。安全を守るだけでなく新しいインターネット応用を実現するために、暗号、不正侵入・攻撃防御技術、機械学習による検知技術、無線LAN・IoTセキュリティ、ITリスク評価技術等の研究を行っています。",
        theme: [
          "表層情報を用いたマルウェア検知精度を維持する機械学習モデル更新手法の検討",
          "ブロックチェーンを活用した更新履歴検証が可能なGitサーバー運用手法の提案",
        ],
        placeOfEmployment: [
          "NTTコミュニケーションズ",
          "NEC",
          "ソフトバンク",
          "ラック",
          "東京電力ホールディングス",
        ],
        links: [
          {
            name: "▶︎ 寺田真敏教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/isl1/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "background-image: url(" + labo01Img + ")",
      },
      labo_2: {
        eventType: "終日開催",
        display: true,
        cardTitle: "計算言語学研究室",
        title: "計算言語学研究室",
        professor: {
          name: "大野 誠寛 ",
          type: "教授",
        },
        tags: ["自然言語処理", "話し言葉処理", "人工知能"],
        place: "1号館4階演習室",
        info: "我々は、文書やWeb、人とのコミュニケーション等を通じて、様々な情報を獲得し、整理し、発信しています。このような知的活動を行うには、言葉が必要不可欠といえます。本研究室では、大量の言語情報を活用・処理し、人の知的活動を計算機によって支援する技術の開発を目指しています。",
        theme: ["話し言葉の構文解析に関する研究", "テキスト整形に関する研究"],
        placeOfEmployment: [
          "NTTコミュニケーションズ",
          "ドコモ・システムズ",
          "NTTデータソフィア",
          "DTS",
          "日本ビジネスシステムズ",
        ],
        links: [
          {
            name: "▶︎ 大野誠寛教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/cll/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "background-image: url(" + labo02Img + ")",
      },
      labo_3: {
        eventType: "終日開催",
        display: true,
        cardTitle: "ビジュアルコンピューティング\n研究室",
        title: "ビジュアルコンピューティング研究室",
        professor: {
          name: "高橋 時市郎 ",
          type: "教授",
        },
        tags: ["コンピュータグラフィックス", "VR", "AR"],
        place: "1号館5階メディアラボ",
        info: "ヒトの視力を超える8Kスーパーハイビジョン。超高解像度・超高精細な8KCG映像をつくる技術と、臨場感にあふれるVR(仮想現実感)/AR(拡張現実感)技術の研究を進めています。実写画像を印象派風絵画に変換する技術や、自動車や自転車のVR運転シミュレータを開発しています。",
        theme: [
          "8Kスーパーハイビジョン映像の高速処理の研究",
          "VR災害体験シミュレーション技術に関する研究",
        ],
        placeOfEmployment: [
          "日立製作所",
          "凸版印刷",
          "スクウェア・エニックス",
          "コーエーテクモホールディングス",
          "富士通",
        ],
        links: [
          {
            name: "▶︎ 高橋時市郎教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/vcl/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "background-image: url(" + labo03Img + ")",
      },
      labo_4: {
        eventType: "終日開催",
        display: true,
        cardTitle: "(ビジュアルコンピューティング\n研究室)",
        title: "(ビジュアルコンピューティング研究室)",
        professor: {
          name: "小玉 周平 ",
          type: "助教",
        },
        tags: ["コンピュータグラフィックス", "ユーザインタフェース"],
        place: "1号館5階メディアラボ",
        info: "どのようにコンピュータを使うと人々の暮らしをより豊かにできるかをテーマに研究を行っています。例えば、コンピュータグラフィックス（CG）とユーザインタフェースをうまく組みあせて、絵画やイラスト、アニメ制作など人々の創作活動を支援する技術の開発をしています。また、CG技術によるメイクアップ支援やラテアート作成支援などの研究も行っています。",
        theme: [
          "ランダムな半径の円を敷き詰める高速サンプリング法とその絵画風画像生成への応用",
          "アイラインの厚さによる二重瞼の目の大きさ錯視効果",
        ],
        placeOfEmployment: ["-"],
        links: [
          {
            name: "▶︎ 小玉周平助教（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/vcl-2/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "background-image: url(" + labo04Img + ")",
      },
      labo_5: {
        eventType: "終日開催",
        display: true,
        cardTitle: "メディア応用研究室",
        title: "メディア応用研究室",
        professor: {
          name: "鉄谷 信二 ",
          type: "教授",
        },
        tags: ["映像表現", "視覚心理"],
        place: "1号館5階メディアラボ",
        info: "画像・映像に対する視覚心理の観点から、大画面表示における臨場感表示の研究、見慣れているコンテンツに対しての違和感と記憶の評価、錯視画像における見え方の研究、2D・3Dコンテンツ表示の心理的影響、眼の動きの視線情報からのコンテンツ評価等の研究テーマを進めています。",
        theme: [
          "仮想空間バスケットボールの跳躍運動の感覚に関する研究",
          "VR空間での歩行時および跳躍時の移動感覚に関する研究",
        ],
        placeOfEmployment: [
          "NTTテクノクロスサービス",
          "NTTデータ・アイ",
          "NECソリューションイノベータ",
          "NTTデータ・フィナンシャル・ソリューションズ",
          "ソルクシーズ",
        ],
        links: [
          {
            name: "▶︎ 鉄谷信二教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/mal/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "background-image: url(" + labo05Img + ")",
      },
      labo_6: {
        eventType: "終日開催",
        display: true,
        cardTitle: "(メディア応用研究室)",
        title: "(メディア応用研究室)",
        professor: {
          name: "井ノ上 寛人 ",
          type: "助教",
        },
        tags: ["感性工学", "ゲームUI／UXデザイン"],
        place: "1号館4階演習室",
        info: "ヒトのあいまいな感性や知覚情報処理の特徴を観測し、データ解析の結果から科学的再現性がある法則を導き出してUI/UXの向上に応用しようとする感性工学（Kansei / Affective Engineering）に関する研究に取り組んでいます。",
        theme: [
          "三人称視点3DCGゲームの感性的な印象を高めるカメラの制御方法と障害物の表示方法に関する検討",
          "有彩色マスクの感性的な効用に関する基礎的検討",
        ],
        placeOfEmployment: [
          "カプコン",
          "グリー",
          "サイバーエージェント",
          "DMM.com",
          "日本電気（NEC）",
        ],
        links: [
          {
            name: "▶︎ 井ノ上寛人助教（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/mal-2/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "background-image: url(" + labo06Img + ")",
      },
      labo_7: {
        eventType: "終日開催",
        display: true,
        cardTitle: "音響コミュニケーション研究室",
        title: "音響コミュニケーション研究室",
        professor: {
          name: "池田 雄介 ",
          type: "教授",
        },
        tags: ["音響工学", "MR", "信号処理"],
        place: "1号館4階演習室",
        info: "我々の生活や文化にとって音は重要ですが、その理解や制御は必ずしも簡単ではありません。そこで、MR(複合現実技術)を用いた音場の可視化や音のVR技術である音場合成/再現技術、そしてそれらを支える音響計測技術等、音をより良く知り、自由に創り出す技術の研究等を行っています。",
        theme: [
          "複合現実技術を用いた音場の可視化",
          "物理モデルを用いた音場情報の推定",
        ],
        placeOfEmployment: ["KORG", "綜合警備保障(ALSOK)"],
        links: [
          {
            name: "▶︎ 池田雄介教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/acl/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "background-image: url(" + labo07Img + ")",
      },
      labo_8: {
        eventType: "終日開催",
        display: true,
        cardTitle: "インタラクティブグラフィックス\n研究室",
        title: "インタラクティブグラフィックス研究室",
        professor: {
          name: "森谷 友昭 ",
          type: "准教授",
        },
        tags: ["コンピュータアニメーション", "ゲームグラフィックス", "VR"],
        place: "1号館5階メディアラボ",
        info: "ビデオゲームやVR/AR(仮想現実/拡張現実)に必要なリアルタイムコンピュータグラフィックスの新たな活用方法や、表現方法を日々研究しています。また、エンターテインメント分野だけではなく、時間経過による建物の外観の変化シミュレーションなど実用的な研究も行っています。",
        theme: [
          "スケッチインタフェースによる3Dモデル毛皮生成手法",
          "高精細映像に対応したVTuber用3DCGモデルの制作",
        ],
        placeOfEmployment: [
          "キヤノンITソリューションズ",
          "凸版印刷",
          "株式会社アトラス",
          "プラチナゲームズ",
          "サイバーエージェント",
        ],
        links: [
          {
            name: "▶︎ 森谷友昭准教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/igl/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "background-image: url(" + labo08Img + ")",
      },
      labo_9: {
        eventType: "終日開催",
        display: true,
        cardTitle: "実空間コンピューティング研究室",
        title: "実空間コンピューティング研究室",
        professor: {
          name: "岩井 将行 ",
          type: "教授",
        },
        tags: ["IoT", "ウエラブルシステム"],
        place: "1号館4階演習室／5階メディアラボ",
        info: "環境情報や生体情報を取得活用するIoTを始め、ビッグデータ、画像処理、xR、機械学習システムの応用の研究を行っています。無線センサを用いた防災・環境・生体モニタリング、ウェアラブル技術、高精細位置情報、空間スキャン、人間行動解析、映像解析、ブラウザ技術、可視化技術など。",
        theme: [
          "水難事故被害抑止を目的とした水位による河川の危険エリア侵入の検知と通知システム",
          "文学研究者のためのテキストマイニングWEBアプリケーションの開発",
        ],
        placeOfEmployment: [
          "ヤフー",
          "サイバーエージェント",
          "ドワンゴ",
          "Excite",
          "ソフトバンク",
        ],
        links: [
          {
            name: "▶︎ 岩井将行教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/cps/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "background-image: url(" + labo09Img + ")",
      },
      labo_10: {
        eventType: "終日開催",
        display: false,
        cardTitle: "Web工学研究室",
        title: "Web工学研究室",
        professor: {
          name: "増田 英孝 ",
          type: "教授",
        },
        tags: ["インターネット", "情報推薦"],
        place: "1号館4階演習室",
        info: "インターネットでは、ブログやTwitter、Wikipediaのように参加者自身がコンテンツを作成・公開していくことができます。このような大量のコンテンツの中から、利用者が必要としている情報を抽出・推薦・分類・統合して活用するための研究を行っています。",
        theme: [
          "主端末作業に関する支援情報表示が可能な補助端末連携システム",
          "テーマパークにおけるコラージュ画像を用いた撮影場所推薦",
        ],
        placeOfEmployment: [
          "ドコモ・システムズ",
          "日立システムズ",
          "NTTデータ・アイ",
          "キヤノンITソリューションズ",
          "テプコシステムズ",
        ],
        links: [
          {
            name: "▶︎ 増田英孝教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/cdl/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "background-image: url(" + labo10Img + ")",
      },
      labo_11: {
        eventType: "終日開催",
        display: false,
        cardTitle: "知的メディア研究グループ",
        title: "知的メディア研究グループ",
        professor: {
          name: "山田 剛一 ",
          type: "講師",
        },
        tags: ["自然言語処理", "人工知能"],
        place: "",
        info: "Twitter, Instagram に代表されるソーシャルメディアは、人々の日々の思いを反映する巨大な情報源です。そこで話される内容やユーザ同士の関係を分析することで、世論の動向から友達関係の深さまで、幅広い情報を得ることができます。これらの情報を活用することで、自社製品の評判を知りたい企業から、円滑なコミュニケーションを求めるユーザまで、幅広く支援をすることができます。本研究グループでは、ソーシャルメディアの分析とユーザ支援のための知的システムの研究・開発をしています。",
        theme: [
          "レビューテキストを用いた宿泊施設比較のための依存構造解析を用いたアスペクト階層の構築",
          "大規模イベントにおける現地ツイートを用いた混雑状況可視化システムの提案",
        ],
        placeOfEmployment: ["-"],
        links: [
          {
            name: "▶︎ 山田剛一講師（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/cll_lecturer/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "background-image: url(" + labo11Img + ")",
      },
      labo_12: {
        eventType: "終日開催",
        display: true,
        cardTitle: "知的計算システム研究室",
        title: "知的計算システム研究室",
        professor: {
          name: "中島 克人 ",
          type: "教授",
        },
        tags: ["映像・画像認識", "画像処理"],
        place: "1号館4階演習室",
        info: "リアルタイム性が要求される映像中の物体認識や、非常に手間のかかるイラスト画の自動生成など、映像・画像処理を中心にコンピュータをますます賢くするための研究に取り組んでいます。",
        theme: ["大衆の動作解析", "カメラ画像による視線推定とその応用"],
        placeOfEmployment: [
          "NEC",
          "日本ユニシス",
          "NECネッツエスアイ",
          "NTTテクノクロス",
          "日立社会情報サービス",
        ],
        links: [
          {
            name: "▶︎ 中島克人教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/cal/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "background-image: url(" + labo12Img + ")",
      },
    },
  },
  getters: {
    getAllLabsData(state) {
      return state.labo;
    },
  },
};
