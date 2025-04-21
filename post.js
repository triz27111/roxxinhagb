'use strict'

// Exemplo de dados dos posts
const posts = [
    {
      usuario: "Usuario_123",
      local: "Manaus - Amazonas",
      imagemPerfil: "img/perfil_usuario.png",
      imagemPost: "img/Sunset_in_Manaus.jpg",
      descricao: "Entre cores e luzes, o sol se despede e a noite chega para nos lembrar que sempre há beleza em cada fim.",
      hashtags: ["#PôrDoSol", "#FimDeTarde", "#BelezaNatural"]
    },
    {
        
    }
  ]
  
  // Função para criar os posts
  function carregarPosts() {
    const container = document.querySelector(".main-content");
  
    posts.forEach(post => {
      const postHTML = `
        <div class="post">
          <div class="post-user">
            <img src="${post.imagemPerfil}" alt="Perfil" />
            <div class="post-user-info">
              <h1>${post.usuario}</h1>
              <p>${post.local}</p>
            </div>
          </div>
          <img src="${post.imagemPost}" alt="Imagem do Post" class="post-image" />
          <div class="post-icons">
            <img src="img/curtidas.png" alt="Curtir" width="24" />
            <img src="img/comentarios.png" alt="Comentar" width="24" />
          </div>
          <p class="post-description">
            <h1>${post.usuario}</h1>
            ${post.descricao}<br>
            <span class="hashtags">${post.hashtags.join(" ")}</span>
          </p>
        </div>
      `;
      container.innerHTML += postHTML;
    });
  }
  
carregarPosts()
  
