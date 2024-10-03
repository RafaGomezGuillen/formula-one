import React from "react";
import "./SeasonSummary.css";

// Import components
import { Jumbotron } from "../../../components/Jumbotron/Jumbotron";

// Import images
import round0 from "../../../assets/img/rounds/Round0.jpg";
import round1 from "../../../assets/img/rounds/Round1.jpg";
import round2 from "../../../assets/img/rounds/Round2.jpg";
import round3 from "../../../assets/img/rounds/Round3.jpg";
import round4 from "../../../assets/img/rounds/Round4.jpg";
import round5 from "../../../assets/img/rounds/Round5.jpg";
import round6 from "../../../assets/img/rounds/Round6.jpg";
import round7 from "../../../assets/img/rounds/Round7.jpg";
import round8 from "../../../assets/img/rounds/Round8.jpg";
import round9 from "../../../assets/img/rounds/Round9.jpg";
import round10 from "../../../assets/img/rounds/Round10.jpg";
import round11 from "../../../assets/img/rounds/Round11.jpg";
import round12 from "../../../assets/img/rounds/Round12.jpg";
import round13 from "../../../assets/img/rounds/Round13.jpg";
import round14 from "../../../assets/img/rounds/Round14.jpg";
import round15 from "../../../assets/img/rounds/Round15.jpg";
import round16 from "../../../assets/img/rounds/Round16.jpg";
import round17 from "../../../assets/img/rounds/Round17.jpg";
import round18 from "../../../assets/img/rounds/Round18.jpg";
import round19 from "../../../assets/img/rounds/Round19.jpg";
import round20 from "../../../assets/img/rounds/Round20.jpg";
import round21 from "../../../assets/img/rounds/Round21.jpg";
import round22 from "../../../assets/img/rounds/Round22.jpg";

export const SeasonSummary = () => {
  const seasonSummaries = [
    {
      image: round0,
      title: "Pre season",
      description:
        "Due to the change in technical regulations, Formula One decided to hold two winter tests at two different tracks to help teams gather more data on their new cars, with Circuit de Barcelona-Catalunya in Montmeló hosting the first on 23–25 February and Bahrain International Circuit in Sakhir hosting the second on 10–12 March. The pre-season test suggested that Ferrari and Red Bull were the two strongest teams, ahead of reigning Constructors' Champion Mercedes.",
    },
    {
      image: round1,
      description:
        "For the season-opening Bahrain Grand Prix, Ferrari's Charles Leclerc took pole position, ahead of Red Bull driver and reigning champion Max Verstappen and Leclerc's teammate Carlos Sainz. AlphaTauri's Pierre Gasly caught fire and retired on lap 46. Leclerc won the Grand Prix ahead of teammate Carlos Sainz Jr., making it a 1–2 finish for Ferrari, with Lewis Hamilton in third. The Red Bull cars of Max Verstappen and Sergio Pérez both retired late in the closing laps with fuel issues, from second and fourth respectively.",
    },
    {
      image: round2,
      description:
        " Pérez took his maiden pole position at the Saudi Arabian Grand Prix, with the two Ferraris second and third ahead of Verstappen. Only 18 drivers started the race, as Yuki Tsunoda's AlphaTauri broke down on the way to the grid after a suspected drivetrain issue, and Schumacher was withdrawn from the event after a crash in qualifying; he would return to racing in the next round. Pérez led the early laps and made a pitstop on lap 16. Williams's Nicholas Latifi hit the wall at the final corner shortly afterwards, the two Ferraris and Verstappen made pitstops during the subsequent safety car, allowing them to gain position on Pérez. Alpine's Fernando Alonso, McLaren's Daniel Ricciardo, and Alfa Romeo's Valtteri Bottas retired after 38 laps due to technical problems. Verstappen won the race after a late overtake on Leclerc, following several laps where they exchanged positions, Sainz finished third ahead of Pérez.",
    },
    {
      image: round3,
      description:
        "Leclerc won the Australian Grand Prix from pole position, set the fastest lap, and led every lap,  getting the first grand slam for Ferrari since Alonso at the 2010 Singapore Grand Prix. Pérez and Mercedes's George Russell took second and third, respectively. Pérez's teammate  Verstappen was running second before he retired on lap 38 due to fuel leaks causing a fire. Sainz spun out on the opening lap at turn 10 and Aston Martin's Sebastian Vettel, who made his season debut after missing the first two races as he tested positive for coronavirus with Nico Hülkenberg taking his place, crashed out in the opening stages at turn 4.Albon, who started last after he was disqualified from qualifying for failing to provide a one-litre fuel sample, finished 10th for Williams, pitting on the last lap after running 57 laps on hard tyres.",
    },
    {
      image: round4,
      description:
        "Verstappen took pole position for the Emilia Romagna Grand Prix sprint. Despite Leclerc overtaking him at the start, Verstappen recovered, using DRS to overtake him and win the sprint, ahead of Leclerc and teammate Pérez.  Verstappen won Sunday's Grand Prix from pole position to achieve the second grand slam of his career, while Pérez finished in second to give Red Bull their first 1–2 finish since the 2016 Malaysian Grand Prix. Leclerc ran in third for the most of the race but spun on lap 53, falling to ninth and promoting McLaren's  Lando Norris to the final podium place. Leclerc would recover to eventually finish in sixth position. The result promoted Red Bull to second in the Constructors' Championship, and Verstappen to second in the Drivers' Championship, with Leclerc's teammate Sainz suffering a second DNF in a row following a lap 1 collision with Daniel Ricciardo.",
    },
    {
      image: round5,
      description:
        "Leclerc led Sainz for a Ferrari front-row lock-out for the first edition of the Miami Grand Prix. Behind them were the Red Bull drivers, Verstappen and Pérez, and Alfa Romeo's Bottas. Stroll and Vettel,  who respectively qualified 10th and 13th, started the race from the pit lane after a fuel temperature issue. At the first corner on the opening lap, Verstappen overtook Sainz for second place and closed in on Leclerc, whom  he passed for the lead on lap 9, as Leclerc struggled with the medium compound tyres. The race was neutralised on lap 41, as Norris  rear right tyre made contact with Gasly front left, triggering a virtual safety car and then a safety car for five laps. Verstappen was pressured by Leclerc at the restart and defended his position to take the win. On lap 52, his teammate Pérez attempted to overtake Sainz into turn 1 but made a mistake and locked up. Vettel and Schumacher collided at lap 53, but no action was taken. Leclerc and Sainz finished second and third, respectively, while Pérez, who had temporarily suffered engine issues that cost him about 30 horsepower, and Russell made up the top five. After the race, Alonso was given two separate five-second penalties and finished outside of points. Magnussen had two separate incidents following the restart with Stroll, retiring  on the last lap.",
    },
    {
      image: round6,
      description:
        " Leclerc took pole position for the Spanish Grand Prix, which he led until being forced to retire on lap 27 due to a turbo and MGU-H failure. Despite DRS issues, Verstappen won the race, with Pérez letting him  by on lap 49, as they were on different strategies; Russell completed the podium. Sainz had a bad start that dropped him from third to fifth, and also spun at turn 4 on lap 7 due to wind gust, followed by Verstappen due to similar issues at the same tun on lap 9, but Sainz recovered from 11th to finish fourth, ahead of Hamilton, who also made a come back from 19th, after suffering a puncture in a racing incident with Magnussen at turn  4 after the start. For the first time in the season, Red Bull led Ferrari in the Constructors' Championship, while the Drivers' Championship standings switched from a 19-point Leclerc lead to a 6-point advantage for Verstappen.",
    },
    {
      image: round7,
      description:
        "Leclerc claimed pole position for the Monaco Grand Prix, in front of Sainz and Pérez.Two formation laps were run, 16 minutes after the scheduled start time. The start was aborted and started 50 minutes later.  Due to a strategy error, Leclerc fell to fourth place behind Verstappen and Sainz, with Pérez leading the race. Ocon and Hamilton made contact on lap 18, the former getting a five-second time penalty. Five laps after Magnussen retired  due to water pressure loss, Schumacher spun near the swimming pool section, splitting his car in two and causing the race to be stopped. The race was won by Pérez, followed by Sainz, Verstappen, Leclerc, and Russell.",
    },
    {
      image: round8,
      description:
        "Leclerc once again claimed pole position for the Azerbaijan Grand Prix, in front of Pérez and Verstappen. Pérez immediately overtook Leclerc in turn 1 and held the lead until lap 15, where Verstappen overtook him. On lap 9, the virtual safety car was deployed after Sainz stopped at turn 4, due to a hydraulic issue. Then, on lap 20, after briefly taking the lead of the race, Leclerc suffered a power unit issue and pulled into the pits. Magnussen and Zhou also retired from the race. Tsunoda was shown the black-and-orange flag for a DRS failure, which was fixed with speed tape, and he dropped to 13th. Williams's Latifi received a ten-second stop and go penalty after for a grid infringement and was later given a five-second time penalty for ignoring blue flags.",
    },
    {
      image: round9,
      description:
        "Verstappen took pole position for the Canadian Grand Prix, which returned to the calendar after a two-year absence, after a wet qualifying session. Alpine's Alonso started second, ahead of Sainz, while Leclerc started from the back of the grid after exceeding his quota of power unit components. Pérez started 13th following a crash in qualifying. Pérez retired on lap 8 with gearbox issues, while technical problems for Schumacher forced him to retire on lap 20. Tsunoda crashed on lap 49, bringing out the safety car and allowing Sainz to close in on Verstappen and chase down the Red Bull driver in the closing stages. Despite this, Verstappen won the race from Sainz and Hamilton, while Leclerc climbed up to 5th. Alonso was given a five-second post-race penalty for making more than one change of direction to defend a position, dropping him down from 7th to 9th.",
    },
    {
      image: round10,
      description:
        "Sainz claimed his first pole position at the British Grand Prix. Verstappen overtook him at turn one,  before the race was red flagged and was restarted with original positions, meaning Sainz started first again.  He kept first position off the second start, before being overtaken by Verstappen several laps in. Verstappen picked up damage to his floor and dropped down to seventh. Sainz was then overtaken by Leclerc. Sainz, Pérez and Hamilton all pitted for new tyres under the safety car. With newer tyres, Leclerc was then overtaken by all three, dropping him down to fourth. Sainz won his first-ever Formula One race.",
    },
    {
      image: round11,
      description:
        'Verstappen qualified on pole and won the second sprint of the championship at the Austrian Grand Prix. He was overtaken three times at various points by Leclerc, who eventually won the race. Sainz was quicker than Verstappen and was on for an "easy one-two," before a power unit issue saw him retire, leaving Verstappen second and promoting Hamilton to third.',
    },
    {
      image: round12,
      description:
        "Max Verstappen won the race with a time of 1:30:02.112 followed by Lewis Hamilton and George Russell. The race took place at Circuit Paul Ricard in Le Castellet on Sunday, July 24th.",
    },
    {
      image: round13,
      description:
        "Russell took his maiden pole position at the Hungarian Grand Prix while Red Bull Racing struggled in qualifying, with Verstappen suffering MGU-K problems and Pérez unable to get a clean lap in Q2 leaving them tenth and eleventh on the grid. Verstappen made a strong recovery drive, working his way up the order with better strategy and pace. Verstappen won from Hamilton, who recovered from seventh, following a DRS failure in qualifying. Russell came third after being passed by Hamilton with five laps to go. Sainz and Leclerc finished fourth and sixth respectively after questionable strategy calls from the Ferrari pit wall.",
    },
    {
      image: round14,
      description:
        "The Belgian Grand Prix was the first race held after the August break, with several drivers taking on additional components and incurring grid penalties for doing so. Sainz started the race from pole; Alonso and Hamilton made contact after a scrap at Les Combes.  Hamilton was forced to retire his car shortly afterwards, and an incursion between Latifi and Bottas on the second lap drew out the safety car. Verstappen made quick work of the cars ahead at the restart, with Pérez following to secure a one-two finish for Red Bull Racing. Sainz rounded out the podium. Leclerc pitted for new soft tyres on the penultimate lap to attempt the fastest lap and incurred a time penalty for speeding in the pit lane, emoting him to sixth after the race.",
    },
    {
      image: round15,
      description:
        "At the Dutch Grand Prix, Verstappen was able to beat Leclerc to pole at his home race. On lap 45, Tsunoda pulled over with an issue on the front-left tyre, however Tsunoda was told to continue, coming in a lap later for a change of tyres and to tighten his seatbelt, which he had loosened when he was preparing to abandon his car on the track. On lap 47, Tsunoda retired with a differential issue. This brought out a virtual safety car, allowing Verstappen to make a pit stop to keep the lead ahead of the two Mercedes. On lap 55, Bottas retired with an engine issue, bringing out a full safety car. Verstappen overtook Hamilton at the restart almost immediately, while Sainz received a five-second penalty for an unsafe release during his pit stop.After Russell made a split-second decision to pit again for faster softs, he overtook Hamilton, who fell to fourth after being overtaken by Leclerc as well. Following the race, a conspiracy theory emerged accusing Red Bull Racing strategist Hannah Schmitz of conspiring with sister team AlphaTauri to ensure a favourable result for Verstappen, after questioning the nature of Tsunoda's retirement. The incident was looked into by race stewards, whose only action was to reprimand Tsunoda for having undone his belts on track.",
    },
    {
      image: round16,
      description:
        "Leclerc took pole at the Italian Grand Prix with Verstappen taking second. He, alongside Sainz and Hamilton, took penalties for replacing components. Verstappen started from seventh, but reached second by lap 5, behind Leclerc who had held successfully defended first position. After Vettel experienced an engine failure on lap 10, Leclerc pitted under the virtual safety car. Verstappen would then lead the race until he pitted on lap 26. Alonso's Alpine would then be retired because of a water pressure issue on lap 31, but was returned to the pit lane to avoid any disruptions to the race. Leclerc made a second pit stop on lap 34, again giving Verstappen the lead. Stroll retired on lap 39 and on lap 47, Ricciardo stopped his car on the side of the track and a safety car was deployed. Verstappen held the position and won under the safety car.",
    },
    {
      image: round17,
      description:
        "The Singapore Grand Prix was the first race wherein Verstappen could win the championship mathematically, needing to outscore Leclerc by 22 points, Pérez by 13 and George Russell by 6. If Verstappen came first with the fastest lap while Leclerc came eighth or lower and Pérez came fourth or lower, or if Verstappen came first without the fastest lap while Leclerc came ninth or lower and Pérez came either fourth without the fastest lap or fifth with, Verstappen would be the champion. Leclerc was on pole after Verstappen abandoned two qualifying laps, the first due to traffic, and the second to ensure there would be enough fuel for the governing body to take a sample at the end of the session, thus avoiding a disqualification from the qualifying session.  Verstappen started in eighth. The race was delayed by over an hour due to thunderstorms. Pérez won the race, followed by Leclerc and Sainz. Verstappen came seventh.",
    },
    {
      image: round18,
      description: `Following Verstappen's failure to secure the championship at the Singapore Grand Prix, several permutations could 
      net him the championship at the following Japanese Grand Prix. He needed to outscore Leclerc by eight points and Pérez by six.
    
      Verstappen would secure pole, in front of Leclerc, Sainz, and Pérez. The race began on time despite poor weather and was 
      red-flagged after two laps following an accident involving Sainz. The deployment of the recovery vehicle during the red flag 
      was criticised; Gasly narrowly missed it in poor weather conditions. Gasly angrily remonstrated that "[he] could have killed 
      [himself]" if he had lost control and hit the vehicle, even at reduced speed.
    
      The race resumed at 16:15 local time behind the safety car. Only twenty-eight laps were completed before the race was curtailed 
      due to it passing the three-hour time limit. Verstappen won by just under 27 seconds, with Leclerc coming second and Pérez coming 
      third. After an investigation involving the latter two in the final lap, Leclerc was handed a five-second penalty, meaning he 
      came third behind Pérez.
    
      As the race was completed, full points were awarded despite the confusion that only partial points were on offer due to the 
      reduced total length of the race. Verstappen was crowned World Champion, having an insurmountable lead of 113 points, with 
      only 112 still available.`,
    },

    {
      image: round19,
      description: `With the Drivers' Championship secured, Red Bull Racing set about securing their first Constructors' Championship since 2013, 
      which they did by outscoring Ferrari by twenty-two points at the United States Grand Prix. Sainz took his third pole position of the 
      season and was spun by George Russell into turn one and forced to retire due to the resulting damage.
    
      Mercedes had a chance at winning after Lewis Hamilton took the lead through a very slow pit stop for Verstappen. Verstappen overturned 
      a four-second gap to retake the lead on lap 50. This race was notable for a collision between Fernando Alonso and Lance Stroll, which 
      sent Alonso airborne.
    
      Alonso continued and finished the race in seventh, only to receive a thirty-second penalty post-race after Haas protested the decision 
      not to show Alonso a black and orange flag due to his right wing mirror dislodging during the race.
    
      This penalty was overturned four days later, as the FIA determined that Haas did not submit their protest within thirty minutes of the 
      race finishing, making the protest inadmissible.`,
    },

    {
      image: round20,
      description: `Verstappen took his sixth pole position and his fourteenth race win of the season at the Mexico City Grand Prix, breaking 
      the record for most wins in a Formula One season, previously held jointly by Michael Schumacher (2004) and Sebastian Vettel (2013).
    
      Daniel Ricciardo made his way from thirteenth to seventh in sixteen laps while also dealing with a ten-second time penalty due to a 
      collision with Yuki Tsunoda.`,
    },

    {
      image: round21,
      description: `The São Paulo Grand Prix was the third and final sprint weekend of the season, meaning qualifying was on Friday, in wet conditions. 
      Kevin Magnussen took the first pole position of his Formula One career, as well as Haas' first.
    
      Magnussen was unable to keep the faster cars at bay during the sprint, and Mercedes were able to lock out the front row for the Grand Prix 
      on Sunday, which they converted into their first one-two finish since the 2020 Emilia Romagna Grand Prix, with Russell taking his first win 
      in Formula One.
    
      The race involved collisions between Magnussen and Ricciardo, Verstappen and Hamilton, and Norris and Leclerc. At the conclusion of the race, 
      Verstappen rejected a team order to let teammate Pérez pass him for sixth place.`,
    },

    {
      image: round22,
      description: `Verstappen took a seventh pole position at the season-ending Abu Dhabi Grand Prix and a fifteenth win on the season, extending the 
      record that he had set in Mexico City. Charles Leclerc held off a faster Sergio Pérez to claim second place, earning Leclerc second in the Drivers' 
      Championship as well.
    
      Two Constructors' Championship places came down to the final race of the season; Mercedes was unable to pass Ferrari for second after Russell 
      finished fifth and Hamilton retired with a gearbox failure, while Aston Martin and Alfa Romeo finished tied on points, with Alfa Romeo claiming 
      sixth on countback.
    
      The race was the final one for Sebastian Vettel, who retired, and for Daniel Ricciardo, Nicholas Latifi, and Mick Schumacher, who were unable 
      to secure a race seat for 2023.`,
    },
  ];

  return (
    <div>
      <Jumbotron
        title={"Season summary"}
        description={
          "Max Verstappen won his second consecutive World Drivers Championship driving for Red Bull Racing. Charles Leclerc finished runner-up, driving for Ferrari. Sergio Pérez was third, driving for Red Bull Racing. Red Bull Racing won their fifth World Constructors Championship."
        }
      />

      {seasonSummaries.map((summary, index) => (
        <div key={index} className="season-summary-content">
          <div>
            <img src={summary.image} alt={summary.title} />
          </div>
          <div>
            {summary.title ? (
              <h2>{summary.title}</h2>
            ) : (
              <h2>{`Round ${index}`}</h2>
            )}

            <p>{summary.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
