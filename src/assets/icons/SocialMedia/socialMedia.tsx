import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

interface SocialMedia {
  [key: string]: React.ReactNode;
}

export const socialMedia: SocialMedia = {
  instagram: <InstagramIcon />,
  facebook: <FacebookIcon />,
  telegram: <TelegramIcon />,
  whatsAppIcon: <WhatsAppIcon />,
};
