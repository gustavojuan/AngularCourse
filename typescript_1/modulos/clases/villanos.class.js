"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Villanos = /** @class */ (function () {
    function Villanos(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    Villanos.prototype.imprimirPlan = function () {
        console.log(this.nombre + " - " + this.plan);
    };
    return Villanos;
}());
exports.Villanos = Villanos;
