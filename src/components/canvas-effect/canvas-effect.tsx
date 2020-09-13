import React from "react";
import "canvas-effect.scss";

interface CanvasState {
	canvasHeight: number;
	canvasWidth: number;
}

export class CanvasEffect extends React.Component<{}, CanvasState> {
	canvas?: HTMLCanvasElement | null;
	ctx?: CanvasRenderingContext2D | null;

	dotPositions: Array<{x: number, y: number, velX: number, velY: number}>;

	velX = 1;
	velY = 1;
	dotSize = 4;
	dotRadius = 60;
	update?: any;

	constructor(props: any){
		super(props);

		this.dotPositions = [];
		this.drawFrame = this.drawFrame.bind(this);
		this.handleResize = this.handleResize.bind(this);

		this.state = {
			canvasHeight: 200,
			canvasWidth: window.innerWidth,
		};
	}

	componentDidMount() {
		if (this.canvas){
			this.ctx = this.canvas.getContext("2d");

			for (let i = 0; i < this.state.canvasWidth / 18; i++){
				this.dotPositions.push({
					x: Math.floor(Math.random() * this.canvas.width),
					y: Math.floor(Math.random() * this.canvas.height),
					velX: Math.random() > 0.50 ? Math.random() * this.velX : 0 - (Math.random() * this.velX),
					velY: Math.random() > 0.50 ? Math.random() * this.velY : 0 - (Math.random() * this.velY),
				});
			}

			this.update = setInterval(this.drawFrame, 16);
			window.addEventListener("resize", () => this.handleResize());
		}
	}

	handleResize(){
		this.setState({
			canvasHeight: 200,
			canvasWidth: window.innerWidth,
		});
		this.clearCanvas();
	}

	clearCanvas(){
		if (this.ctx && this.canvas){
			this.ctx.clearRect(0, 0, this.canvas.width ?? 100, this.canvas.height ?? 100);

			clearInterval(this.update);
			this.dotPositions = [];

			for (let i = 0; i < this.state.canvasWidth / 18; i++){
				this.dotPositions.push({
					x: Math.floor(Math.random() * this.canvas.width),
					y: Math.floor(Math.random() * this.canvas.height),
					velX: Math.random() > 0.50 ? Math.random() * this.velX : 0 - (Math.random() * this.velX),
					velY: Math.random() > 0.50 ? Math.random() * this.velY : 0 - (Math.random() * this.velY),
				});
			}

			this.update = setInterval(this.drawFrame, 16);
		}
	}

	drawFrame(){
		if (this.ctx && this.canvas){
			this.ctx.clearRect(0, 0, this.canvas.width ?? 100, this.canvas.height ?? 100);

			for (const dot of this.dotPositions){
				// Change X value
				dot.x += dot.velX;
				dot.y += dot.velY;

				if (dot.x + this.dotSize >= this.canvas.width){
					dot.x = this.canvas.width - this.dotSize;
					dot.velX = 0 - this.velX;
				}
				else if (dot.x - this.dotSize <= 0){
					dot.x = 0 + this.dotSize;
					dot.velX = Math.abs(this.velX);
				}

				if (dot.y + this.dotSize >= this.canvas.height){
					dot.y = this.canvas.height - this.dotSize;
					dot.velY = 0 - dot.velY;
				}
				else if (dot.y - this.dotSize <= 0){
					dot.y = 0 + this.dotSize;
					dot.velY = Math.abs(dot.velY);
				}

				this.ctx.fillStyle = "rgba(195, 203, 213, 0)";
				this.ctx.strokeStyle = "rgba(0, 0, 0, 0)";

				this.ctx.beginPath();
				this.ctx.arc(dot.x, dot.y, this.dotSize / 2, 0, 2 * Math.PI, false);
				this.ctx.fill();
				this.ctx.stroke();

				for (const otherDot of this.dotPositions){
					const xPow = Math.pow(Math.abs(dot.x - otherDot.x), 2);
					const yPow = Math.pow(Math.abs(dot.y - otherDot.y), 2);
					const radius = Math.sqrt(xPow + yPow);
					if (radius <= this.dotRadius){
						this.ctx.fillStyle = "rgba(0, 0, 0, 0)";
						this.ctx.strokeStyle = `rgba(195, 203, 213, ${((this.dotRadius - radius) / this.dotRadius)})`;
						this.ctx.lineWidth = 2;

						this.ctx.beginPath();
						this.ctx.moveTo(dot.x, dot.y);
						this.ctx.lineTo(otherDot.x, otherDot.y);
						this.ctx.stroke();
					}
				}
			}
		}
	}

	render(){
		return (
			<canvas className="circle-canvas" ref={(canvas) => this.canvas = canvas} height={this.state.canvasHeight} width={this.state.canvasWidth} />
		);
	}
}
