import React from "react";

// Import components
import { Jumbotron } from "../../../components/Jumbotron/Jumbotron";
import { FormulaCarousel } from "../../../components/FormulaCarousel/FormulaCarousel";
import { CardDeck } from "../../../components/CardDeck/CardDeck";

// Import images
import image1 from "../../../assets/img/season-introduction/AstonMartinSafetyCar.jpg";
import image2 from "../../../assets/img/season-introduction/mcl.jpg";
import image3 from "../../../assets/img/season-introduction/MercedesSafetyCar.jpg";
import image4 from "../../../assets/img/Regulation.jpg";
import image5 from "../../../assets/img/Summary.jpg";
import image6 from "../../../assets/img/Changes.jpg";

export const SeasonIntroduction = () => {
  const images = [image1, image2, image3];

  const paragraphs = [
    "It is recognised by the Fédération Internationale de l'Automobile (FIA), the governing body of international motorsport, as the highest class of competition for open-wheel racing cars. The championship was contested over twenty-two Grands Prix, which were held around the world, and ended earlier than in recent years to avoid overlapping with the FIFA World Cup.",
    "Drivers and teams competed for the titles of World Drivers Champion and World Constructors Champion, respectively. The 2022 championship saw the introduction of significant changes to the sport's technical regulations. These changes had been intended to be introduced in 2021, but were delayed until 2022 in response to the COVID-19 pandemic. Max Verstappen, who was the reigning Drivers Champion, claimed his second title at the Japanese Grand Prix, while his team, Red Bull Racing, achieved their fifth World Constructor Championship, and first since 2013, at the following United States Grand Prix. Mercedes were the reigning Constructors Champion.",
    "This was the final season for four-time World Champion Sebastian Vettel. Seven-time World Champion Lewis Hamilton endured a difficult season with Mercedes, failing to secure either a pole position or Grand Prix win during the season, the first time either occurrence had happened in his Formula One career since it began in 2007.",
  ];

  const cardInfo = [
    {
      image: image4,
      title: "Regulation changes",
      description:
        "The 2022 F1 season will see the introduction of a new generation of cars, designed to improve the quality of racing and allow closer battles on track. In addition to the technical changes, the 2022 season will also see some changes in the sporting regulations, such as a frozen power unit development, a sliding scale of aerodynamic testing based on the constructors’ standings, and a return to a two-part pre-season test.",
      link: "/Home/RegulationChanges",
    },
    {
      image: image5,
      title: "Season summary",
      description:
        "Max Verstappen won his second consecutive World Drivers Championship driving for Red Bull Racing. Charles Leclerc finished runner-up, driving for Ferrari. Sergio Pérez was third, driving for Red Bull Racing. Red Bull Racing won their fifth World Constructors Championship.",
      link: "/Home/SeasonSummary",
    },
    {
      image: image6,
      title: "Team, driver and mid-season changes",
      description:
        "Honda initially stated that they would not supply power units beyond 2021. Kimi Räikkönen retired following the conclusion of the 2021 championship. Ahead of the Bahrain Grand Prix, Sebastian Vettel tested positive for coronavirus...",
      link: "/Home/SeasonChanges",
    },
  ];

  return (
    <div>
      <Jumbotron
        title={"Season introduction"}
        description={
          "The 2022 FIA Formula One World Championship was a motor racing championship for Formula One cars, which was the 73rd running of the Formula One World Championship."
        }
      />

      <FormulaCarousel images={images} />

      {paragraphs.map((paragraph, index) => (
        <p
          style={{
            borderBottom: "2px solid #ddd",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
          key={index}
        >
          {paragraph}
        </p>
      ))}

      <CardDeck cardInfo={cardInfo} />
    </div>
  );
};
