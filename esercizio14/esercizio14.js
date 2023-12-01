"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getOneById = exports.getAll = void 0;
var Joi = require("joi");
var planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];
var planetSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
});
var getAll = function (req, res) {
    res.status(200).json(planets);
};
exports.getAll = getAll;
var getOneById = function (req, res) {
    var id = req.params.id;
    var getAPlanet = planets.find(function (p) { return p.id === Number(id); });
    res.status(200).json(getAPlanet);
};
exports.getOneById = getOneById;
var create = function (req, res) {
    var _a = req.body, id = _a.id, name = _a.name;
    var newPlanet = { id: id, name: name };
    var validationNewPlanet = planetSchema.validate(newPlanet);
    if (validationNewPlanet.error) {
        return res
            .status(400)
            .json({ msg: validationNewPlanet.error.details[0].message });
    }
    else {
        planets = __spreadArray(__spreadArray([], planets, true), [newPlanet], false);
        res.status(201).json({ msg: "New planet created!" });
    }
};
exports.create = create;
var updateById = function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
    var validationUpdate = planetSchema.validate({ id: Number(id), name: name });
    if (validationUpdate.error) {
        return res
            .status(400)
            .json({ msg: validationUpdate.error.details[0].message });
    }
    else {
        planets = planets.map(function (p) { return (p.id === Number(id) ? __assign(__assign({}, p), { name: name }) : p); });
        res.status(200).json(planets);
    }
};
exports.updateById = updateById;
var deleteById = function (req, res) {
    var id = req.params.id;
    planets = planets.filter(function (p) { return p.id !== Number(id); });
    res.status(200).json({ msg: "planet deleted!" });
};
exports.deleteById = deleteById;