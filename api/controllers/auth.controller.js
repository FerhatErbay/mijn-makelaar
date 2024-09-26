import Gebruiker from "../models/gebruiker.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { gebruikernaam, email, wachtwoord } = req.body;
  const hashedWachtwoord = bcryptjs.hashSync(wachtwoord, 10);
  const nieuweGebruiker = new Gebruiker({
    gebruikernaam,
    email,
    wachtwoord: hashedWachtwoord,
  });
  try {
    await nieuweGebruiker.save();
    res.status(201).json("Gebruiker succesvol aangemaakt!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, wachtwoord } = req.body;
  try {
    const geldigeGebruiker = await Gebruiker.findOne({ email });
    if (!geldigeGebruiker)
      return next(errorHandler(404, "Gebruiker niet gevonden!"));
    const geldigeWachtwoord = bcryptjs.compareSync(
      wachtwoord,
      geldigeGebruiker.wachtwoord
    );
    if (!geldigeWachtwoord)
      return next(errorHandler(401, "Ongeldig wachtwoord!"));
    const token = jwt.sign(
      { id: geldigeGebruiker._id },
      process.env.JWT_SECRET
    );
    const { wachtwoord: wacht, ...rest } = geldigeGebruiker._doc;
    res.cookie("token", token, { httpOnly: true }).status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
