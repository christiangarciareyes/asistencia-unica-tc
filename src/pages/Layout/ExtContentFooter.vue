<template>
  <footer class="footer">
    <div class="container">
        <nav>
            <ul>
              <li style="letter-spacing: 1px; color: #FFB606">
                <router-link :to="{path:'/'}">PORTADA</router-link>
              </li>
            </ul>
        </nav>
        <div style="letter-spacing: 1px" class="copyright text-center">
          &copy; 2019 <a href="https://www.tc.gob.pe" target="_blank" style="color: #FFB606">Tribunal Constitucional del Perú </a><i class="fa fa-university"></i> - Desarrollado por OTI
        </div>
    </div>
  </footer>
</template>