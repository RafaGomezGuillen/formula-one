import React from "react";
import "./RegulationChanges.css";

// Import components
import { Jumbotron } from "../../../components/Jumbotron/Jumbotron";
import { CardDeck } from "../../../components/CardDeck/CardDeck";

// Import images
import image1 from "../../../assets/img/regulation-changes/RaceDirector.jpeg";
import image2 from "../../../assets/img/regulation-changes/Changes1.jpg";
import image3 from "../../../assets/img/regulation-changes/Changes2.jpg";
import image4 from "../../../assets/img/regulation-changes/Porpoising.jpg";
import image5 from "../../../assets/img/regulation-changes/PowerUnit.jpg";
import image6 from "../../../assets/img/regulation-changes/Tyre.jpg";
import image7 from "../../../assets/img/Introduction.jpg";
import image8 from "../../../assets/img/Summary.jpg";
import image9 from "../../../assets/img/Changes.jpg";

export const RegulationChanges = () => {
  const regulations = [
    {
      image: image1,
      title: "Race direction",
      description:
        "Michael Masi, who had served as race director since the death of Charlie Whiting in 2019, was removed from the role of race director after an inquiry into the 2021 Abu Dhabi Grand Prix. As part of a restructuring of race control, Masi was replaced by former DTM race director Niels Wittich and World Endurance Championship race director Eduardo Freitas. The pair assumed the role on an alternating basis. Herbie Blash, Whiting's former deputy, was appointed as permanent senior advisor to the race director. The FIA also introduced a new virtual race control system, much like the video assistant referee in football, as well as a ban on team communications that lobby race officials. Radio between teams and FIA officials also is no longer broadcast on television in order to protect race officials. Unlapping procedures were reassessed by the Formula One Sporting Advisory Committee following the controversy of the 2021 Abu Dhabi Grand Prix and presented prior to the start of the season. Prior to the United States Grand Prix, the FIA abandoned the idea of rotating race directors, leaving Niels Wittich as the sole serving race director for the final four rounds of the championship. The rotation policy was not met with favourable reviews from drivers, as well as being in response to criticism of Eduardo Freitas's performance as race director at the Japanese Grand Prix.",
    },
    {
      image: image2,
      title: "Technical regulations",
      description:
        "The 2022 World Championship saw an overhaul of the technical regulations. These changes had been planned for introduction in 2021, with teams developing their cars throughout 2020. The introduction of the regulations was delayed until the 2022 championship in response to the COVID-19 pandemic.Once the delay was announced, teams were banned from carrying out any development of their 2022 cars during the 2020 calendar year. Prior to the season, the FIA said it anticipated that the car performance deficit between the fastest and slowest teams on the grid would be cut by half when compared to 2021. Drivers were consulted on developing the new technical regulations, that were deliberately written to be restrictive so as to prevent teams from developing radical designs that limited the ability of drivers to overtake. The FIA created a specialist Working Group, or committee of engineers, tasked with identifying and closing loopholes in the regulations before their publication. The elimination of loopholes will, in theory, stop one team from having a dominant car, and in turn allow for closer competition throughout the field while improving the aesthetics of the cars. This philosophy was a major aim of the new regulations. Red Bull car designer Adrian Newey noted that the regulation changes were the most significant in Formula One since the 1983 season.",
    },
    {
      image: image3,
      title: "Race direction",
      description:
        "The technical regulations for the 2022 Formula One season reintroduced the use of ground effects, with the aim of reducing turbulent air in the wake of cars and enabling closer racing. The simplification of bodywork makes the underside of the car the primary source of aerodynamic grip. The elimination of bargeboards and changes to the front wing and endplates have further reduced aerodynamic complexity. The rear wings are wider and mounted higher, with restrictions on the use of exhaust gases for generating downforce. The number of aerodynamic upgrades teams can introduce has been restricted to reduce costs. In 2021, a sliding scale system was introduced to regulate aerodynamic testing, with less successful teams given more time for testing. This system was trialled in 2021 and will be formalized for the 2022 championship.",
    },
    {
      image: image4,
      title: "Mid-season aerodynamics directive",
      description:
        "The reintroduction of ground effects in Formula One has caused some cars to run lower to the ground in order to gain maximum speed and benefits from the effect. However, when airflow under the car is interrupted, cars can experience an aerodynamic stall and lift from the track surface, known as 'porpoising'. Teams with low-riding cars can also experience 'bottoming out', where the car's floor scrapes the track surface. Several drivers complained of nerve issues and back pain as a result of these problems, leading to the FIA introducing a technical directive to prevent cars from porpoising and bottoming out to an unsafe level from the Belgian Grand Prix onwards. The changes address the flexibility of the plank underneath a car.",
    },
    {
      image: image5,
      title: "Power units",
      description:
        "In 2017, discussions began on changing the 2022 engine regulations, which were finalized in May 2018. The changes involved removing the MGU-H to simplify the engine technology and raising the maximum rev limit by 3,000 rpm. Additionally, engine suppliers would be required to make individual engine components universally compatible to allow teams to source from multiple suppliers. However, as no new power unit suppliers committed to the sport in 2022, existing suppliers proposed to retain the current power unit formula to reduce development costs. The quota system of power unit components was also continued in 2022, with teams receiving a limited number of individual components that can be used before incurring a penalty.",
    },
    {
      image: image6,
      title: "Tyres",
      description:
        "For the 2022 season, the wheel diameter in Formula One was increased from 13 inches to 18 inches, a change that was tested in the Formula 2 Championship in 2020. Initially, the use of tyre warmers was set to be banned, but the decision was reversed after opposition from Pirelli, the official tyre supplier. Instead, the temperature of the tyre blankets was reduced, and they will become a standardised piece of equipment, with all teams required to use the same product. Additionally, BBS became the official supplier of rims to all Formula One teams for a four-year period starting in 2022.",
    },
  ];

  const cardInfo = [
    {
      image: image7,
      title: "Season introduction",
      description:
        "The 2022 Formula One Championship was a motor racing competition for Formula One cars, which was the 73rd edition of the Formula One World Championship. The championship saw the introduction of significant changes to the sport’s technical regulations, which had been planned for 2021, but were delayed until 2022 due to the COVID-19 pandemic.",
      link: "/Home/SeasonIntroduction",
    },
    {
      image: image8,
      title: "Season summary",
      description:
        "Max Verstappen won his second consecutive World Drivers Championship driving for Red Bull Racing. Charles Leclerc finished runner-up, driving for Ferrari. Sergio Pérez was third, driving for Red Bull Racing. Red Bull Racing won their fifth World Constructors Championship.",
      link: "/Home/SeasonSummary",
    },
    {
      image: image9,
      title: "Team, driver and mid-season changes",
      description:
        "Honda initially stated that they would not supply power units beyond 2021. Kimi Räikkönen retired following the conclusion of the 2021 championship. Ahead of the Bahrain Grand Prix, Sebastian Vettel tested positive for coronavirus...",
      link: "/Home/SeasonChanges",
    },
  ];

  return (
    <div>
      <Jumbotron
        title={"Regulation changes"}
        description={
          "The 2022 F1 season will see the introduction of a new generation of cars, designed to improve the quality of racing and allow closer battles on track. In addition to the technical changes, the 2022 season will also see some changes in the sporting regulations, such as a frozen power unit development, a sliding scale of aerodynamic testing based on the constructors’ standings, and a return to a two-part pre-season test."
        }
      />

      <section className="regulation-changes-container">
        {regulations.map((regulation, index) => (
          <div key={index} className="regulation-changes-content">
            <img src={regulation.image} alt={regulation.title} />
            <h2>{regulation.title}</h2>
            <p>{regulation.description}</p>
          </div>
        ))}
      </section>

      <CardDeck cardInfo={cardInfo} />
    </div>
  );
};
