import mongoose from "mongoose";

const gebruikerSchema = mongoose.Schema(
  {
    gebruikernaam: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    wachtwoord: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Gebruiker = mongoose.model("Gebruiker", gebruikerSchema);

export default Gebruiker;
