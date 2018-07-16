<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#nav-collapse"
          aria-expanded="false"
        >

          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="#" class="navbar-brand">Vue.js 2</a>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><router-link to="/" >{{ $t('navigation.cinema') }}</router-link></li>
          <li><router-link to="/profile" >{{ $t('navigation.my_account') }}</router-link></li>
          <li><router-link to="/bookings" >{{ $t('navigation.bookings') }}</router-link></li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/login"></router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  
</style>