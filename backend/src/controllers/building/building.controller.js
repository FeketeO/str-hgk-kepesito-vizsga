/**
 * @TODO : controller elkészítése, mely kapcsolódik a megfelelő service osztályhoz
 *
 * Kezelje a http-error üzeneteket:
 * - hiányos értékek @update műveletkor: BadREquest => 'Missing field'
 * - ha valamiért nem tudta a server frissíteni a building entitást:
 *  InternalServerError => 'Could not updated building'
 *
 * A szerver a megfelelő válaszokat küldje el a kliens felé
 */


const express = require('express');
const createError = require('http-errors');

const buildingService = require('./building.service');


exports.updateBuilding = (req, res, next) => {
    const id = req.params.id;
    const { name, floors } = req.body;
    if (!name || !floors ) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        name: name,
        floors: floors,
    };
    return buildingService.update(req.params.id, update)
        .then(building => {
            res.json(building);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};


exports.getAllBuildingWithClassrooms = ('/', (req, res, next) => {
    return controller.findAll(req, res, next);
  });