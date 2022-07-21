class CartesianPlane {
    constructor(axes_Length, canvas_width, canvas_height){
        this.axes_Length = axes_Length;
        this.canvas_width_center = canvas_width/2;
        this.canvas_height_center = canvas_height/2;
    }

    draw(ctx){
        
        ctx.strokeStyle = 'plum';
        ctx.lineWidth = 1;
        
        ctx.beginPath();

        //Drawing X axis
        ctx.moveTo(this.canvas_width_center-this.axes_Length, this.canvas_height_center);
        ctx.lineTo(this.canvas_width_center+this.axes_Length, this.canvas_height_center);

        //Drawing Y axis
        ctx.moveTo(this.canvas_width_center, this.canvas_height_center-this.axes_Length);
        ctx.lineTo(this.canvas_width_center, this.canvas_height_center+this.axes_Length);

        ctx.stroke();

    }
}