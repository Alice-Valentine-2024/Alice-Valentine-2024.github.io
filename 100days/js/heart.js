function heartWith(body) {
    this.body = body;
    this.init = function() {
        this.monitor();
    };
    this.monitor = function() {
        var that = this;
        document.onmousemove = function(event) {
            if (Math.random() < 0.1) { // 10% chance to create a heart
                var heart = document.createElement("div");
                heart.className = "heart-with";
                var x = event.clientX, y = event.clientY;
                heart.style.left = x + "px";
                heart.style.top = y + "px";
                var size = Math.random() * 100;
                heart.style.width = size + "px";
                heart.style.height = size + "px";
                that.body.appendChild(heart);

                setTimeout(function() {
                    heart.remove();
                }, 2000);
            }
        }
    };

    this.init();
}
