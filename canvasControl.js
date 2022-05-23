class Canvas{
    constructor(id){
        this.c = document.getElementById(id);
        this.ctx = c.getContext("2d");
    }
    draw_line(colour,x1,y1,x2,y2){
        this.ctx.fillstyle = colour;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke()
    }
    draw_polygon(colour,positions){
        this.ctx.moveTo(positions[0][0],positions[0][1])
        for (i=1;i<positions.length;i++){
            this.ctx.lineTo(positions[i][0],positions[i][1])
        }
        this.ctx.stroke()
    }
    draw_rect(colour,positions)
}
