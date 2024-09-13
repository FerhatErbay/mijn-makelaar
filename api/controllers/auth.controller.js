import Gebruiker from "../models/gebruiker.js";
import bcryptjs from "bcryptjs";

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
