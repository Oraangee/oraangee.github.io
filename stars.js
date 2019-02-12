var additionalStars, canvas, context, drawStar, height, i, initialStars, ref, stars, timedStars, width;

$(function() {
  width = screen.width;
  height = screen.height;
  stars = 1;
  additionalStars = Math.round((width * height));
  initialStars = Math.round((width * height));

  console.log(initialStars);

  canvas = $('#stars');
  context = canvas[0].getContext("2d");

  context.canvas.width = width;
  context.canvas.height = height;

  drawStar = function(color) {
    var min, x, y;
    context.fillStyle = color;
    min = 15;
    x = Math.random() * (width - min) + min;
    y = Math.random() * (height - min) + min;
    return context.fillRect(x, y, 2, 2);
  };


  timedStars = function() {
    if (stars < additionalStars) {
      drawStar('#7fff00');
      return stars++;
    }
  };

  setInterval(timedStars, 1);
});