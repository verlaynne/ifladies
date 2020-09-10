let tempo = 2000, // tempo de rotação
    currentImageIndex = 0; // imagem atual
    images = document.querySelectorAll("#carrossel img") // variável recebe todas as imagens que estiverem no seletor
    maxImg = images.length; // variável recebe o número máximo de imagens

function nextImg(){ // função para trocar as imagens
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++
    if(currentImageIndex >= maxImg){
        currentImageIndex = 0
    }
        
    images[currentImageIndex].classList.add("selected")
}

function iniciar(){ // função que inicia o carrossel
    setInterval(() => {
        // troca de imagem
        nextImg()
    }, tempo)

}

window.addEventListener("load", iniciar) 