<template>
  <b-container>
    <b-row>
    <b-row v-for="r in recipes_list" :key="r.id">
      <b-col >
        <PreviewPersonal class="recipePreview" :recipe="r" />
      </b-col>
      <br>
    </b-row>
    </b-row>
  </b-container>
</template>

<script>
import PreviewPersonal from "../components/PreviewPersonal.vue";
export default {
  name: "RecipePreviewList",
  components: {
    PreviewPersonal
  },
  props: {
    // title: {
    //   type: String,
    //   required: true
    // }
    recipes_list: [],

  },
  data() {
    return {
    };
  },
  // mounted() {
  //   this.updateRecipes();
  // },
  // methods: {
  //   async updateRecipes() {
  //     try {
  //       const response = await this.axios.get(
  //       //   //this.$root.store.server_domain + "/recipes/random",
  //         process.env.VUE_APP_ROOT_API+ "/users/myRecipes",
  //       //   // "https://test-for-3-2.herokuapp.com/recipes/random"
  //       );

  //       // // console.log(response);
  //       const recipes = response.data;
  //       this.recipes = [];
  //       this.recipes.push(...recipes);

  //       this.recipes= this.recipes_list;
  //       console.log(this.recipes);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }


};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
 
 
}
</style>
