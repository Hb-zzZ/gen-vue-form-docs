<template>
  <article class="home-page-one-wrapper">
    <section class="main">
      <div>
        <img
          v-if="$frontmatter.heroImage"
          :style="heroImageStyle || {}"
          :src="$withBase($frontmatter.heroImage)"
          alt="hero"
        />
        <h1 v-if="$frontmatter.heroText">{{ $frontmatter.heroText }}</h1>
        <p class="description">{{ $description }}</p>

        <router-link class="btn-about" :to="$frontmatter.actionLink">{{
          $frontmatter.actionText
        }}</router-link>
      </div>
    </section>
    <section
      v-for="(feature, index) in $frontmatter.features"
      :key="index"
      class="wish"
      :class="{ 'deep-bg': index % 2 === 0 }"
    >
      <div v-if="index % 2 === 0" class="wish-inner">
        <div class="text-wrapper">
          <h1>{{ feature.title }}</h1>
          <p class="description" v-html="feature.details" />
        </div>
        <div class="img-wrapper">
          <img :src="$withBase(feature.image)" :alt="feature.title" />
        </div>
      </div>
      <div v-else class="wish-inner">
        <div class="img-wrapper">
          <img :src="$withBase(feature.image)" :alt="feature.title" />
        </div>
        <div class="text-wrapper">
          <h1>{{ feature.title }}</h1>
          <p class="description" v-html="feature.details" />
        </div>
      </div>
    </section>
    <section class="md-content-wrapper">
      <Content />
    </section>
  </article>
</template>

<script>
export default {
  computed: {
    features() {
      return this.$frontmatter.features
    },
    heroImageStyle() {
      return (
        this.$frontmatter.heroImageStyle || {
          maxHeight: '200px',
          margin: '6rem auto 1.5rem'
        }
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-page-one-wrapper {
  padding-top: 3.4rem;

  section {
    &.main {
      display flex
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin: 0 auto;
      width: 100%;
      height: calc(100vh - 3.4rem);
      overflow hidden
      text-align: center;
      background: url('./images/bg.svg') center/cover no-repeat；

      h1 {
        margin-top: 8rem;
      }

      p {
        font-size 20px
        margin-bottom: 2rem;
      }

      .btn-about {
        margin: 2rem 0;
        display: inline-block;
        padding: .6rem 1.2rem;
        border-radius: 0.25rem;
        background: $accentColor;
        color: #fff;
        font-size: 1rem;
      }

      .banner {
        display: block;
        width: 100%;
      }
    }

    &.wish {
      overflow: hidden;

      &.deep-bg  {
        background: var(--code-color);
      }

      .wish-inner {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 2rem;
        max-width: 56rem;
        width: 100%;
        min-height: 25rem;
        display: flex;
        align-items: center;

        > div {
          flex: auto;

          &.img-wrapper {
            max-width: 22rem;

            img {
              display: block;
              width: 100%;
            }
          }

          &.text-wrapper {
            box-sizing: border-box;
            padding: 0 2rem;
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home-page-one-wrapper {
    section {
      padding: 0 2rem;

      &.main {
        height 580px
      }

      &.description {
        h1 {
          margin-top: 5rem;
        }
        .btn-about {
          font-size .9rem
        }
      }

      &.md-content-wrapper {
        padding: 0;
      }

      &.wish {
        .wish-inner {
          display: block;
          padding: 2rem 0;

          .img-wrapper {
            margin: 0 auto;
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-page-one-wrapper {
    section {
      padding: 0 2rem;

      &.main {
        height 580px
      }

      &.description {
        h1 {
          margin-top: 5rem;
        }
        .btn-about {
          font-size .8rem
        }
      }

      &.md-content-wrapper {
        padding: 0;
      }

      &.wish {
        .wish-inner {
          display: block;
          padding: 2rem 0;

          .img-wrapper {
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
