<template>
  <section id="about-me">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>
      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
      <v-responsive class="mx-auto mb-3" width="400">
        <v-row justify="center">
          <v-col v-for="socialLink in socialLinks" :key="socialLink.key">
            <a
              :href="socialLink.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-avatar size="50" tile
                ><img :src="'/image/devicons/' + socialLink.icon + '.svg'" />
              </v-avatar>
            </a>
          </v-col>
        </v-row>
      </v-responsive>
      <v-responsive class="mx-auto title font-weight-light" max-width="720">
        こんにちは！Kozukaと申します。フロントエンジニアとして都内企業でお仕事しています。
        プログラミングはもちろん、イラスト・デザイン・動画作成・作曲演奏、モデリング料理イベント運営…etc
        興味を持ったらまず触ってみる！をモットーに、色々な分野のことを常に吸収し続ける「超」雑食系エンジニアです。
        技術のちからでたくさんの人を幸せにすることを夢見て、日々を楽しみながら研鑽しています。
      </v-responsive>
      <v-responsive class="mx-auto mb-8" max-width="600" min-width="300">
        <v-row justify="center">
          <v-col>
            <v-img class="mb-12" src="/image/me.png" />
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          key: '1',
          name: 'twitter',
          link: 'https://twitter.com/kozuka_accd',
          icon: 'twitter',
        },
        {
          key: '2',
          name: 'github',
          link: 'https://github.com/kozukaccd',
          icon: 'github',
        },
        {
          key: '3',
          name: 'facebook',
          link: 'https://www.facebook.com/toma.kozuka/',
          icon: 'facebook',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
