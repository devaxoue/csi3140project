<template>
  <div id="findrecipe">
    <nav class="navbar">
      <div class="container">
        <a class="header" href="#">
          <h2>
            <i class="ti-medall-alt"></i>
            CookBook
          </h2>
        </a>
        <div class="menu">
          <div class="menu-pages">
            <a href="index.html">
              <i class="ti-home"></i>
              Home
            </a>|
            <a class="active" href="findrecipe.html">
              <i class="ti-search"></i>
              Find a receipe
            </a>|
            <a class="connect" href="signin.html">
              <i class="ti-lock"></i>
              Sign In
            </a>|
            <a href="signup.html">
              <i class="ti-pencil-alt"></i>
              Sign Up
            </a>|
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="transparentbox">
        <h2>
          <i class="ti-search"></i>
        </h2>
        <h2>
          Find A Recipe
        </h2>
        <form class="formtext">
          Recipe Name:
          <br />
          <input type="text" name="Recipe Name" v-model="recipename" />
          <br />Max Preparation Time :
          <br />
          <input type="text" name="preptime" v-model="preptime" />
          <br />Max Cooking Time:
          <br />
          <input type="text" name="cooktime" v-model="cooktime" />
          <br />
          <br />Mandatory Ingrédients :
          <br />
          <input type="text" name="mingredients" v-model="mingredients" />
          <br />
          <br />Forbidden Ingredients :
          <br />
          <input type="text" name="fingredients" v-model="fingredients" />
          <br />
          <br />
          <br />
          <center><a href="recipe.html" class="button"><i class="ti-search"></i>  Search</a></center>
          <br />
          <br />
        </form>
      </div>
    </div>
  </div>
</template>