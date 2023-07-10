import { store } from "./index";

export default {
  namespaced: true,
  state: {
    recq: {
      recq_1: {
        ques: "なぜ電大に入学されたのですか？受験当時に抱いた志望動機と入学後の印象に、何かギャップはありましたか？",
        ans: "",
        links: [],
      },
      recq_2: {
        ques: "一番ためになった授業やおすすめの授業と、その授業の担当の先生のお名前を教えて下さい。また、おすすめする理由も教えて下さい。",
        ans: "",
        links: [],
      },
      recq_3: {
        ques: "どの授業が難しかったですか？どのような点で苦労しましたか？",
        ans: "",
        links: [],
      },
      recq_4: {
        ques: "部活やサークルに入っていますか？おすすめの部活やサークルがあればその名前を教えて下さい。",
        ans: "",
        links: [],
      },
      recq_5: {
        ques: "就職先や大学院進学といった卒業後の進路について、いつ頃に意識し、どのように目標を定めたのですか？何がきっかけでその進路を目指すことにしたのですか？",
        ans: "",
        links: [],
      },
      recq_6: {
        ques: "就職活動について、電大の卒業生（リクルーター）や大学（学生支援センター／キャリア支援）、先生から、何かサポートを受けていますか？ 受けたサポートがあれば教えて下さい。",
        ans: "",
        links: [],
      },
      recq_7: {
        ques: "私の将来の夢は〇〇〇〇なのですが、この目標を達成するためにはどのような取り組みをすればよいと思いますか？私にこの学校、この学科は向いていると思いますか？",
        ans: "",
        links: [],
      },
      recq_8: {
        ques: "なぜこの研究室（〇〇先生の研究グループ）に入ろうと思ったのですか？先生の雰囲気を教えて下さい。",
        ans: "",
        links: [],
      },
      recq_9: {
        ques: "研究室への配属はどのように決まるのですか？希望すれば入れるものなのですか？",
        ans: "",
        links: [],
      },
      recq_10: {
        ques: "大学や学科の選択において，何を確認するのが最も重要だと思いますか？",
        ans: "",
        links: [],
      },
    },
    faq: {
      faq_1: {
        ques: "他大学の似たような学科との違いを教えてください。",
        ans: "弊学科の他大学と異なる特徴の一つとして、科目ユニット制カリキュラムが挙げられます。カリキュラムにコースや専攻を設けるのではなく、ユニットという単位で専門科目群を分類しており、学生は興味に応じてさまざまな専門科目を履修することができます。ユニット専門科目をまとめて履修すると、その分野の知識や技術を効率よく体系的に学ぶことができ、複数のユニットに属する科目を受講すると、「セキュリティに強いWebフロントエンドエンジニア」や、「3DCG技術に精通したIoTエンジニア」、「ゲームも開発できるネットワークエンジニア」など、個性豊かな専門家を目指すことができます。詳しいユニットの分類や配当科目については、下記リンク先をご参照ください。",
        links: [
          {
            name: "▶︎ カリキュラム（情報メディア学科公式サイト）",
            url: "https://www.im.dendai.ac.jp/curriculum/",
          },
        ],
      },
      faq_2: {
        ques: "他の情報系学科との違いを教えてください。",
        ans: "情報系の中でも、工学部情報通信工学科は「電波、光ファイバー、電子回路」などの通信部分を主に取り扱い、未来科学部情報メディア学科は「3DCG、Webアプリケーション、情報セキュリティ」など情報コンテンツの中身を、システムデザイン工学部情報システム工学科は「AI、機械学習、データサイエンス」など近年注目されつつある分野を中心に学びます。情報メディア学科は中でもプログラミングに力を入れています。｢化学実験｣や｢物理実験｣といった実習講義は必修ではなく、プログラミングを行う演習科目を重視しており、2・3年次から多く選択履修することができます。履修可能な科目は下記リンク先をご参照ください。また、どのような講義であるか、感想などが気になる場合には是非本学学生にお尋ねください。",
        links: [
          {
            name: "▶︎ カリキュラム（情報メディア学科公式サイト）",
            url: "https://www.im.dendai.ac.jp/curriculum/",
          },
        ],
      },
      faq_3: {
        ques: "講義でわからないことがあった場合はどうしていますか？プログラミング初心者なので、ついていけるか不安です。",
        ans: "東京電機大学の講義では、講義の円滑化を図るために補佐として大学院生がつきます。わからないことがあってもその場ですぐに質問することができます。また、大学には「学習サポートセンター」が設置されています。大学専任教員や高等学校の先生を経験しているスタッフに、質問や学習方法の相談ができます。",
        links: [],
      },
      faq_4: {
        ques: "入学にあたってパソコンの所持は必須ですか？購入する必要はありますか？",
        ans: "情報メディア学科の学生は、1人1台パソコンを所持することが必須となっています。必要に応じて入学試験合格通知後に大学生協から送付される学科推奨パソコンをご購入いただくか、ご自身で必要スペックを満たしているパソコンを入学までに準備していただきます。",
        links: [],
      },

      faq_5: {
        ques: "数学や理科、英語は授業で使いますか？",
        ans: "必修の基礎科目として配当されているので、使います。詳細は大学案内をご確認下さい。また、必修のコンピュータプログラミングI/IIにおいて、高校までに習う「数学II」や「物理」の力学を使うほか、英語で書かれたエラーメッセージやマニュアル（ドキュメント）の読解を求められることがあります。",
        links: [],
      },

      faq_6: {
        ques: "筆記試験の教科と範囲はどこですか？筆記試験の過去問題などはいただけますか？",
        ans: "試験の内容は入試形態によって異なります。「入学者選抜要項」や「一般選抜過去問題集」をご確認下さい（一般選抜の過去問題集は資料配布コーナーにて配布しております）。また、入試に関するご質問は、入試センター、または本日開催の入試ガイダンスにてお尋ねください。",
        links: [
          {
            name: "▶︎ タイムスケジュール",
            url: "/#time-schedule",
          },
        ],
      },
      faq_7: {
        ques: "就職先は例えばどこがありますか？就職先の業種や割合を教えてください。",
        ans: "東京電機大学の就職内定率は98.7%です。情報メディア学科の主な就職先の業種や割合、年度ごとの主な就職先は下記リンク先をご参照ください。研究室ごとの主な就職先は本ウェブサイトの｢研究室公開｣ページの研究室詳細をご参照ください。携わりたい職種がある場合には、是非下記情報をもとに研究室展示場所に赴き、どのようなことに取り組んでいたのか本学学生にお尋ねください。",
        links: [
          {
            name: "▶︎ 就職実績（東京電機大学公式サイト）",
            url: "https://www.dendai.ac.jp/about/career/support/job.html",
          },
          {
            name: "▶︎ 就職先（情報メディア学科公式サイト）",
            url: "https://www.im.dendai.ac.jp/qualif/#career",
          },
          {
            name: "▶︎ 研究室公開",
            url: "/labs",
          },
        ],
      },
      faq_8: {
        ques: "この学科で取得できる資格はなんですか？資格をとるためにどんなサポートがありますか？",
        ans: "情報メディア学科では目指す資格として｢情報処理技術者国家試験(基本／応用)｣、｢CG-ARTS検定｣、｢CAD利用技術者試験｣、｢教員免許状｣を掲げています。3年次には｢情報技術基礎および演習｣が必修科目となっており、この講義では基本情報技術者試験の対策が行われます。",
        links: [
          {
            name: "▶︎ 資格と就職先（情報メディア学科公式サイト）",
            url: "https://www.im.dendai.ac.jp/qualif/",
          },
          {
            name: "▶︎ 教職課程（東京電機大学公式サイト）",
            url: "https://www.dendai.ac.jp/about/campuslife/kyoushoku/tokyo_senju.html",
          },
          {
            name: "▶︎ カリキュラム（情報メディア学科公式サイト）",
            url: "https://www.im.dendai.ac.jp/curriculum/",
          },
        ],
      },
      faq_9: {
        ques: "この学科に入ればゲーム会社に就職できますか？ゲームを作れるようになりますか？",
        ans: "2022年3月卒業実績における情報メディア学科の「ゲーム開発/インターネットサービス」業界への就職割合は5%です。1年次必修科目の「コンピュータプログラミングI/II」の最終課題でProcessing（Java）を用いたゲーム作りを、3年時選択科目の「ーーーーーーーーーーー」でゲーム制作エンジンUnityを用いた作品作りを行いますが、これらの経験でゲーム会社に就職することは難しいです。就職した学生の多くは、「ソフトウェア研究会」というサークルに所属し、チームでゲーム作りに取り組んだり、ゲームやCGに関連する研究室に所属して、より専門的な知識や技術を身につけています。是非研究室展示場所に足を運び、どのようなことに取り組んできたのか学生に直接尋ねてみてください。",
        links: [
          {
            name: "▶︎ 就職実績（東京電機大学公式サイト）",
            url: "https://www.dendai.ac.jp/about/career/support/job.html",
          },
          {
            name: "▶︎ 研究室公開",
            url: "/labs",
          },
        ],
      },
      faq_10: {
        ques: "忙しさはどのくらいですか？一週間のスケジュール例を教えてください。",
        ans: "",
        links: [],
      },
    },
  },
  getters: {
    getAllRecommendQuestionsData(state) {
      return state.recq;
    },
    getAllFAQData(state) {
      return state.faq;
    },
  },
};
