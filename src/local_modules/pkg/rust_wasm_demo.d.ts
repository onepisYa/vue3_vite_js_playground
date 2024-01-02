/* tslint:disable */
/* eslint-disable */
/**
* @param {string} name
*/
export function greet(name: string): void;
/**
* @param {number} n
* @returns {number}
*/
export function fibonacci(n: number): number;
/**
*/
export class Game {
  free(): void;
/**
* @returns {Game}
*/
  static new(): Game;
/**
* @param {number} elapsed_milliseconds
*/
  tick(elapsed_milliseconds: number): void;
/**
* @param {CanvasRenderingContext2D} ctx
*/
  render(ctx: CanvasRenderingContext2D): void;
/**
* @returns {number}
*/
  width(): number;
/**
* @returns {number}
*/
  height(): number;
/**
* @param {number} x
* @param {number} y
*/
  click(x: number, y: number): void;
}
