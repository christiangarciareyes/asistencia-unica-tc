<template>
<div class="container-login200">
<div class="super_container">
    <header class="header d-flex flex-row">
      <div class="header_content d-flex flex-row align-items-center">
        <div class="logo_container">
          <div class="logo">
            <img :src="image" alt="escudo" class="m-r-10">
            <span>Llaqtayuqta yanapanapaq lika</span>
          </div>
        </div>
      </div>
      <div class="header_side d-flex flex-row justify-content-center align-items-center">
        <span>TRIBUNAL CONSTITUCIONAL</span>
      </div>
    </header>
	<div class="home">
		<div class="home_content">
			<h1 style="text-transform: uppercase">{{$route.name}}</h1>
		</div>
	</div>
  </div>
</div>
</template>

<script>

export default{
  props: {
    image: {
      default: require('@/assets/img/logo.png')
    }
  }
}
</script>