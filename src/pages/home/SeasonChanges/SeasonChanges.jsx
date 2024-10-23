import React from "react";

// Import components
import { Jumbotron } from "../../../components/Jumbotron/Jumbotron";
import { FormulaCarousel } from "../../../components/FormulaCarousel/FormulaCarousel";
import { CardDeck } from "../../../components/CardDeck/CardDeck";

// Import images
import image1 from "../../../assets/img/season-changes/Magnussen.jpg";
import image2 from "../../../assets/img/season-changes/Mazepin.jpeg";
import image3 from "../../../assets/img/season-changes/Raikkonen.jpeg";
import image4 from "../../../assets/img/season-changes/Zhou.jpg";
import image5 from "../../../assets/img/season-changes/Nyck.jpg";
import image6 from "../../../assets/img/Summary.jpg";
import image7 from "../../../assets/img/Regulation.jpg";
import image8 from "../../../assets/img/Introduction.jpg";

export const SeasonChanges = () => {
  const images = [image1, image2, image3, image4, image5];

  const paragraphs = [
    {
      title: "Team changes",
      description:
        "Honda initially stated that they would not supply power units beyond 2021. The company had provided power units to Scuderia AlphaTauri (previously called Scuderia Toro Rosso) since 2018 and to Red Bull Racing since 2019. Initially, Red Bull Racing planned to take over Honda's engine programme and manage it in-house, under a new division called Red Bull Powertrains. The decision was made after lobbying the other nine teams to negotiate an engine development freeze until 2025. Red Bull Racing acknowledged that they would have left the championship if the engine development freeze had not been agreed to as they could not develop a brand new engine, and both Red Bull Racing and Renault were unwilling to resume their former partnership. Honda later agreed to continue supplying Red Bull Racing and AlphaTauri for 2023 with engines for this season, which were rebadged to Red Bull Powertrains. In addition to the assembly and maintenance of the engines, Honda continued to provide Red Bull Racing and AlphaTauri with technical and operational oversight during race weekends.",
    },
    {
      title: "Driver changes",
      description:
        "Kimi Räikkönen retired following the conclusion of the 2021 championship; Räikkönen won 21 races, and the 2007 World Drivers' Championship across a 19 season Formula career. Räikkönen's seat at Alfa Romeo was filled by Valtteri Bottas, who left Mercedes after 5 seasons. George Russell replaced Bottas, vacating the seat that he had held for the past 3 seasons at Williams. Russell was replaced by former Red Bull Racing driver Alex Albon. Zhou Guanyu, who finished third in the 2021 Formula 2 Championship, joined Alfa Romeo, in place of Antonio Giovinazzi, who had been at the team since 2019. Zhou became the first Chinese driver to compete in Formula One. Nikita Mazepin was originally contracted to compete for Haas, as part of a multi-year contract that started in 2021. Following the Russian invasion of Ukraine and the resultant cancellation of Uralkali's title sponsorship of Haas, his contract was terminated. He was replaced by Kevin Magnussen, who had last competed in 2020 with the same team.",
    },
    {
      title: "Mid-season changes",
      description:
        "Ahead of the Bahrain Grand Prix, Sebastian Vettel tested positive for coronavirus. He was replaced at the event, and the subsequent Saudi Arabian Grand Prix by Aston Martin by reserve driver Nico Hülkenberg, who last raced at the 2020 Eifel Grand Prix, driving for former team Racing Point. During the Italian Grand Prix weekend, Alex Albon suffered from appendicitis. He was replaced at Williams by the Mercedes reserve driver 2020–21 Formula E and 2019 Formula 2 Champion Nyck de Vries, who made his Formula One race debut.",
    },
  ];

  const cardInfo = [
    {
      image: image6,
      title: "Season summary",
      description:
        "Max Verstappen won his second consecutive World Drivers Championship driving for Red Bull Racing. Charles Leclerc finished runner-up, driving for Ferrari. Sergio Pérez was third, driving for Red Bull Racing. Red Bull Racing won their fifth World Constructors Championship.",
      link: "/home/SeasonSummary",
    },
    {
      image: image7,
      title: "Regulation changes",
      description:
        "The 2022 F1 season will see the introduction of a new generation of cars, designed to improve the quality of racing and allow closer battles on track. In addition to the technical changes, the 2022 season will also see some changes in the sporting regulations, such as a frozen power unit development, a sliding scale of aerodynamic testing based on the constructors’ standings, and a return to a two-part pre-season test..",
      link: "/home/RegulationChanges",
    },
    {
      image: image8,
      title: "Season introduction",
      description:
        "The 2022 Formula One Championship was a motor racing competition for Formula One cars, which was the 73rd edition of the Formula One World Championship. The championship saw the introduction of significant changes to the sports technical regulations, which had been planned for 2021, but were delayed until 2022 due to the COVID-19 pandemic.",
      link: "/home/SeasonIntroduction",
    },
  ];

  return (
    <div>
      <Jumbotron
        title={"Team, driver and mid-season changes"}
        description={
          "Honda initially stated that they would not supply power units beyond 2021. Kimi Räikkönen retired following the conclusion of the 2021 championship. Ahead of the Bahrain Grand Prix, Sebastian Vettel tested positive for coronavirus..."
        }
      />

      <FormulaCarousel images={images} />

      {paragraphs.map((paragraph, index) => (
        <section
          key={index}
          style={{
            borderBottom: "2px solid #ddd",
            paddingBottom: "10px",
            paddingTop: "10px",
            lineHeight: "1.5",
          }}
        >
          <h2
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {paragraph.title}
          </h2>
          <p>{paragraph.description}</p>
        </section>
      ))}

      <CardDeck cardInfo={cardInfo} />
    </div>
  );
};
