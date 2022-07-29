let apiUrl = 'https://daffa07.deppp.my.id/index.php/';
Vue.createApp({
  data() {
    return {
      massage: 'Hi',
      header: {
      },
      articles: [],
      article: null,
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get(apiUrl + 'users/1')
        .then((res) => {
          this.header = res.data;
          this.getArticles();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPortoData() {
      axios
        .get(apiUrl + 'portofolio/1')
        .then((res) => {
          this.porto = res.data;
          this.getArticles();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticles() {
      axios
        .get('article')
        .then((res) => {
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMarkdown() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const articles = urlParams.get('article');
      var converter = new showdown.Converter();
      console.log(articles);
      axios
        .get((src = 'https://raw.githubusercontent.com/DaffaNazhirul/Tugastekweb2022/main/' + articles))
        .then((res) => {
          var html = converter.makeHtml(res.data);
          this.article = html;
          console.log(html);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeMount() {
    this.getHeaderData(), this.getArticles(), this.getMarkdown(), this.getPortoData();
  },
}).mount('#app');
