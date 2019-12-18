import React from 'react';
import styled from "@emotion/styled";

const Canvas = styled("canvas")`
	position: absolute;
	width: 100vw;
	height: 200px;

	top: 0px;
	left: 0px;
	right: 0px;
`;

export class CanvasEffect extends React.Component {
	canvas?: HTMLCanvasElement | null;
	ctx?: CanvasRenderingContext2D | null;

	dotPositions: Array<{x: number, y: number, velX: number, velY: number}>;

	velX = 0.65;
	velY = 0.75;
	dotSize = 8;
	dotRadius = 70;

	constructor(props: any){
		super(props);

		this.dotPositions = [];
		this.drawFrame = this.drawFrame.bind(this);
	}

	componentDidMount() {
		if (this.canvas){
			this.ctx = this.canvas.getContext("2d");

			for (let i = 0; i < 30; i++){
				this.dotPositions.push({
					x: Math.floor(Math.random() * this.canvas.width),
					y: Math.floor(Math.random() * this.canvas.height),
					velX: Math.random() > 0.50 ? this.velX : 0 - this.velX,
					velY: Math.random() > 0.50 ? this.velY : 0 - this.velY,
				});
			}

			setInterval(this.drawFrame, 16);
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
					dot.velX = this.velX;
				}

				if (dot.y + this.dotSize >= this.canvas.height){
					dot.y = this.canvas.height - this.dotSize;
					dot.velY = 0 - this.velY;
				}
				else if (dot.y - this.dotSize <= 0){
					dot.y = 0 + this.dotSize;
					dot.velY = this.velY;
				}

				this.ctx.fillStyle = "rgb(195, 203, 213)";
				this.ctx.strokeStyle = "";

				this.ctx.beginPath();
				this.ctx.arc(dot.x, dot.y, this.dotSize / 2, 0, 2 * Math.PI, false);
				this.ctx.fill();
				this.ctx.stroke();

				for (const otherDot of this.dotPositions){
					const xPow = Math.pow(Math.abs(dot.x - otherDot.x), 2);
					const yPow = Math.pow(Math.abs(dot.y - otherDot.y), 2);
					const radius = Math.sqrt(xPow + yPow);
					if (radius <= this.dotRadius){
						this.ctx.fillStyle = "";
						this.ctx.strokeStyle = `rgba(195, 203, 213, ${radius / this.dotRadius})`;
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
			<Canvas ref={(canvas) => this.canvas = canvas} height={200} width={window.innerWidth} />
		);
	}
};