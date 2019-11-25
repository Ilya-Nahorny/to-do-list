function parallax(event) {
    this.querySelectorAll('.layer').forEach(function(layer){
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${event.clientX*speed/1000}px)` + `translateY(${event.clientY*speed/1000}px)`


    });
}

document.addEventListener('mousemove', parallax);