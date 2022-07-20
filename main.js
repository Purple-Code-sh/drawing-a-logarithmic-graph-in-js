const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth-window.innerWidth*0.03
canvas.height = window.innerHeight-window.innerHeight*0.03;


const ctx = canvas.getContext("2d");

const cartesianPlane = new CartesianPlane(250,canvas.width,canvas.height);

cartesianPlane.draw(ctx);