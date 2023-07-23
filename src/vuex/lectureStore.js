import { store } from "./index";
import lectureImg2 from "/src/assets/lectures/情報メディア学基礎.svg";
import lectureImg3 from "/src/assets/lectures/インタラクティブメディアとデザイン.svg";
import lectureImg4 from "/src/assets/lectures/データペースプログラミング演習.svg";
import lectureImg5 from "/src/assets/lectures/コンピュータプログラミングⅠ・II.svg";
import lectureImg6 from "/src/assets/lectures/CGモデリングおよび演習.svg";
import lectureImg7 from "/src/assets/lectures/CGレンダリングおよび演習.svg";
export default {
  namespaced: true,
  state: {
    lecture: {
      lecture_2: {
        cardTitle: "情報メディア学基礎",
        mordalTitle: "情報メディア学基礎",
        year_of_enrollment: "学部1年次科目",
        professor: [
          {
            name: "複数",
            type: "",
          },
        ],
        info: "毎週担当講師が変わり、情報メディア学科の専門分野について学ぶ必修科目です。\nこの動画では増田 英孝教授が「インターネットWeb検索のしくみ」について説明しています。",
        links: [
          {
            name: "▶︎ 増田英孝教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/cdl/",
          },
        ],
        img: lectureImg2,
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/O9LH8l20j0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      lecture_3: {
        cardTitle: "インタラクティブメディア\nとデザイン",
        mordalTitle: "インタラクティブメディアとデザイン",
        year_of_enrollment: "学部3年次科目",
        professor: [
          {
            name: "井ノ上 寛人 ",
            type: "助教",
          },
        ],
        info: "デザインの基礎を学ぶとともに、HTML、CSS、JavaScript、Node.jsなどのWebフロントエンドに関する技術を学ぶ科目です。\nこの動画では講義の概要や具体的なデザイン技術の基礎について説明しています。",
        links: [
          {
            name: "▶︎ 井ノ上寛人助教（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/mal-2/",
          },
        ],
        img: lectureImg3,
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/Ez9wRBnN8U0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      lecture_4: {
        cardTitle: "データペースプログラミング演習",
        mordalTitle: "データペースプログラミング演習",
        year_of_enrollment: "学部3年次科目",
        professor: [
          {
            name: "増田 英孝 ",
            type: "教授",
          },
        ],
        info: "SQL文を使ってデータベースの基礎や管理方法、アプリケーションとの連携方法などを学ぶ科目です。\nこの動画では表の作成、データの挿入、参照、上書き、削除の方法などを説明しています。",
        links: [
          {
            name: "▶︎ 増田英孝教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/cdl/",
          },
        ],
        img: lectureImg4,
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/CVE7cIjXaFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      lecture_5: {
        cardTitle: "コンピュータプログラミング\nⅠ・II",
        mordalTitle: "コンピュータプログラミングⅠ・II",
        year_of_enrollment: "学部1年次科目",
        professor: [
          {
            name: "複数",
            type: "",
          },
        ],
        info: "Processingというプログラミング言語、開発環境を用いてプログラミングの基礎を学ぶ必修科目です。\nこの動画では、井ノ上 寛人助教が魚を泳がせる演習課題の概要を説明しています。",
        links: [
          {
            name: "▶︎ 井ノ上寛人助教（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/mal-2/",
          },
        ],
        img: lectureImg5,
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/ahl2cBoKmp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      lecture_6: {
        cardTitle: "CGモデリングおよび演習",
        mordalTitle: "CGモデリングおよび演習",
        year_of_enrollment: "学部3年次科目",
        professor: [
          {
            name: "池田 雄介 ",
            type: "教授",
          },
          {
            name: "森谷 友昭 ",
            type: "准教授",
          },
        ],
        info: "CGの基礎となる平面図形および三次元立体をコンピュータ内で表現するモデリング技術を、講義と演習を通じて学ぶ科目です。\nこの動画では森谷 友昭准教授が行列計算を使った移動の方法について説明しています。",
        links: [
          {
            name: "▶︎ 池田雄介教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/acl/",
          },
          {
            name: "▶︎ 森谷友昭准教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/igl/",
          },
        ],
        img: lectureImg6,
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/zQoGV9dGmac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      lecture_7: {
        cardTitle: "CGレンダリングおよび演習",
        mordalTitle: "CGレンダリングおよび演習",
        year_of_enrollment: "学部3年次科目",
        professor: [
          {
            name: "高橋 時市郎 ",
            type: "教授",
          },
          {
            name: "森谷 友昭 ",
            type: "准教授",
          },
        ],
        info: "講義では画像生成（レンダリング）技術の理論とアルゴリズムを学び、演習で代表的なレンダリング技術であるZ-buffer法および光線追跡法を用いたプログラミングを学ぶ科目です。\nこの動画では森谷 友昭准教授がShaderを使って球体に光や影をレンダリングする方法を説明しています。",
        links: [
          {
            name: "▶︎ 高橋時市郎教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/vcl/",
          },
          {
            name: "▶︎ 森谷友昭准教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/igl/",
          },
        ],
        img: lectureImg7,
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/U0LuPqCInJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
    },
  },
  getters: {
    getAllLecturesData(state) {
      return state.lecture;
    },
  },
};
