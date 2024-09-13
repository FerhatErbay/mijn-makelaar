import Gebruiker from "../models/gebruiker.js";

export const signup = async (req, res) => {
  const { gebruikernaam, email, wachtwoord } = req.body;
  const nieuweGebruiker = new Gebruiker({ gebruikernaam, email, wachtwoord });
  await nieuweGebruiker.save();
  res.status(201).json("Gebruiker succesvol aangemaakt!");
};
