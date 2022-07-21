class LogarithmicGraph {
    constructor(size_of_graph,canvas_width, canvas_height){
        this.size_n = size_of_graph;
        this.canvas_width_center = canvas_width/2;
        this.canvas_height_center = canvas_height/2;

        this.radio = 0;
        this.angle = 0;
        this.x_distance = 0;
        this.y_distance = 0;
    }

    draw(context){
        context.strokeStyle = 'purple';
        context.lineWidth = 1;
        context.beginPath();
        
        //The counter is set in 0.01 to get more curve quality.
        for (let n = 1; n <= this.size_n; n=n+0.01) {
            
            // go to the last coordinates
            context.moveTo(this.canvas_width_center+this.x_distance, this.canvas_height_center+this.y_distance);
            
            this.angle = Math.atan(Math.exp(n)/n) * (180/Math.PI)
            this.radio = Math.sqrt((n*n)+Math.exp(2*n))

            //reducing the radio size
            this.radio = this.radio/8
            
            this.x_distance = this.radio*Math.cos(this.angle)*(180/Math.PI);
            this.y_distance = this.radio*Math.sin(this.angle)*(180/Math.PI);

            // print a line to the previous and the new coordinates
            context.lineTo(this.canvas_width_center+this.x_distance, this.canvas_height_center+this.y_distance)

            context.stroke()
        }
    }
}