import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MeetCupid from "./components/MeetCupid";
import GirlPitch from "./components/GirlPitch";
import Onboard from "./components/Onboard";
import CupidXMarkMaybe from "./components/CupidXMarkMaybe";
import MeetCupid2 from "./components/MeetCupid2";
import GirlMatchLearn from "./components/GirlMatchLearn";
import GirlPitch2 from "./components/GirlPitch2";
import CupidXSamanthaYes from "./components/CupidXSamanthaYes";
import Train from "./components/Train";
import GirlPitch3 from "./components/GirlPitch3";
import CupidXSamanthaNo from "./components/CupidXSamanthaNo";
import Teach from "./components/Teach";
import CupidXMarkYes from "./components/CupidXMarkYes";
import GuyMatchLearn from "./components/GuyMatchLearn";
import GuyPitch2 from "./components/GuyPitch2";
import GuySalesPitch from "./components/GuySalesPitch";
import CupidXSamanthaMaybe from "./components/CupidXSamanthaMaybe";
import GuyPitch3 from "./components/GuyPitch3";
import GuyPitch4 from "./components/GuyPitch4";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/meet-cupid-2">
          <MeetCupid {...meetCupidData} />
        </Route>
        <Route path="/girl-pitch">
          <GirlPitch
            img_2880="/img/img-2880@2x.png"
            img_2879="/img/img-2879@2x.png"
            img_2881="/img/img-2881@2x.png"
            sheLikesPsychedeli="She likes psychedelics, often talks about cryptocurrency and has at least a D size breast"
            hardNo="Hard No"
            setMeUp="Set me up"
            aaaand="aaaand?"
          />
        </Route>
        <Route path="/:path(|onboard)">
          <Onboard
            spotIllustration="/img/spot-illustration@2x.png"
            title="The matchmaker that knows who goes"
            findSomeone="Find someone"
          />
        </Route>
        <Route path="/cupid-x-mark-maybe">
          <CupidXMarkMaybe {...cupidXMarkMaybeData} />
        </Route>
        <Route path="/meet-cupid">
          <MeetCupid2 {...meetCupid2Data} />
        </Route>
        <Route path="/girl-match-learn">
          <GirlMatchLearn
            weFeelGoodAboutThisOne={
              <React.Fragment>
                We feel good <br />
                about this one...
              </React.Fragment>
            }
            why="Why?"
            profile2Props={girlMatchLearnData.profile2Props}
          />
        </Route>
        <Route path="/girl-pitch-2">
          <GirlPitch2 {...girlPitch2Data} />
        </Route>
        <Route path="/cupid-x-samantha-yes">
          <CupidXSamanthaYes {...cupidXSamanthaYesData} />
        </Route>
        <Route path="/train">
          <Train {...trainData} />
        </Route>
        <Route path="/girl-pitch-3">
          <GirlPitch3 {...girlPitch3Data} />
        </Route>
        <Route path="/cupid-x-samantha-no">
          <CupidXSamanthaNo {...cupidXSamanthaNoData} />
        </Route>
        <Route path="/teach">
          <Teach
            title="Teach Cupid"
            weKnowWhatYouLik="We know what you like, now let’s who they need to like"
            img_8A9A6D94Da1912="/img/img-8a9a6d94da19-1-2@2x.png"
            analyzeMe="Analyze Me"
            slides1Props={teachData.slides1Props}
            slides2Props={teachData.slides2Props}
          />
        </Route>
        <Route path="/cupid-x-mark-yes">
          <CupidXMarkYes {...cupidXMarkYesData} />
        </Route>
        <Route path="/guy-match-learn">
          <GuyMatchLearn
            overlapGroup="/img/replace-image-2@2x.png"
            icon_Instagram="/img/icon-instagram@2x.png"
            ceoDataing="CEO, DatAIng"
            weFeelGoodAboutThisOne={
              <React.Fragment>
                We feel good <br />
                about this one...
              </React.Fragment>
            }
            why="Why?"
            nameProps={guyMatchLearnData.nameProps}
          />
        </Route>
        <Route path="/guy-pitch-2">
          <GuyPitch2
            img_E5Bc852Bcd6711="/img/img-e5bc852bcd67-1-1@2x.png"
            img_Bc8Cc7511Abb11="/img/img-bc8cc7511abb-1-1@2x.png"
            img_Bcc2F5Edad9F11="/img/img-bcc2f5edad9f-1-1@2x.png"
            hesHadSomePretty={
              <React.Fragment>
                He’s had some pretty neat work experiences!
                <br />
                You can hear him in action on his podcast
              </React.Fragment>
            }
            hardNo="Hard No"
            setMeUp="Set me up"
            aaaand="aaaand?"
          />
        </Route>
        <Route path="/guy-sales-pitch">
          <GuySalesPitch
            img_28841="/img/img-2884-1@2x.png"
            overlapGroup4="/img/img-6521-1@2x.png"
            hesDoingVeryWell={
              <React.Fragment>
                He’s doing very well for himself in the stock market.
                <br />
                <br />
                He also has over 10,000 twitter followers to match
              </React.Fragment>
            }
            hardNo="Hard No"
            setMeUp="Set me up"
            aaaand="aaaand?"
          />
        </Route>
        <Route path="/cupid-x-samantha-maybe">
          <CupidXSamanthaMaybe {...cupidXSamanthaMaybeData} />
        </Route>
        <Route path="/guy-pitch-3">
          <GuyPitch3 {...guyPitch3Data} />
        </Route>
        <Route path="/guy-pitch-4">
          <GuyPitch4 {...guyPitch4Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const x11Data = {
    wowYouUberEatsALot: "Wow you uber eats a lot!",
    youreTop01OnO: "You’re top .01% on Overwatch in DATaiNG!",
};

const group41Data = {
    overlapGroupContainer: "/img/map@2x.png",
    profilePicture: "/img/profile-1@2x.png",
};

const meetCupidData = {
    profilePicture: "/img/profile@2x.png",
    cupidAi: "Cupid AI",
    armenian2535Rav: "Armenian, 25-35, Raves, smart, near glendale, cool car, 6’ 5” minimum, 6 pack, wants kids someday, 1k+ followers on twitter, job with potential, educated at a top 50 college, smart with money",
    text1: "08:37",
    weFoundAMatch3M: "We found a match 3 miles away who is only 5’ 11” and doesnt have a 6 pack, but fits all other criteria would you like to see him?",
    spanText1: <React.Fragment>Great we’re try and set you up and update you in this thread<br /></React.Fragment>,
    spanText2: "Cupid X Mark",
    toolBar: "/img/tool-bar@2x.png",
    x1Props: x11Data,
    group4Props: group41Data,
};

const x91Data = {
    yeahICouldBeConv: "Yeah I could be convinced if he’s that invested",
    text4: "08:41",
};

const x62Data = {
    className: "x6-1",
};

const cupidXMarkMaybeData = {
    ehhIdkHesNotReallyMyType: "Ehh idk he’s not really my type....",
    text3: "08:41",
    sorrySarahHasntBe: "Sorry sarah hasnt been online or seen our message yet",
    heySamanthaIThin: "Hey Samantha! I think I found you a pretty good match!",
    hesGotAPrettySw: "He’s got a pretty sweet ride, and likes to spend time with little cousins who have been a great “test drive” for him ;)",
    bg: "/img/bg@2x.png",
    heSeemsReallyInte: "He seems really interested, what if you took you somewhere you’ve been wanting to go?",
    damn: "Damn!",
    areYouAvailableTonightAt930Pm: "Are you available tonight at 9:30 pm?",
    yesImExcited: "Yes, im excited",
    greatHesTakingY: "Great! He’s taking you to Bourbon Steakhouse, pickup @ 9:30",
    map: "/img/map-1@2x.png",
    x9Props: x91Data,
    x6Props: x62Data,
};

const x12Data = {
    wowYouUberEatsALot: "Wow you play a lot of fortnite!",
    youreTop01OnO: "Your income puts you in the top 1% of users",
    className: "x1-1",
};

const x52Data = {
    className: "x5-1",
};

const x63Data = {
    className: "x6-2",
};

const meetCupid2Data = {
    profilePicture1: "/img/profile@2x.png",
    cupidAi: "Cupid AI",
    text8: "08:37",
    unvaxxedArmenian: "Unvaxxed, Armenian, 19, Raves, smart, near glendale, likes aliens and conspiracy theories, star wars, legos cars, libertarian, does psychedelics, likes Bitcoin, DD+ breast, thin",
    weFoundAMatch3M: "We found a match 3 miles away who is vaxxed or 300 who has D breast, which would you like to see?",
    unvaxxedRemoveVaxxedFromMatchPool: "Unvaxxed, remove vaxxed from match pool",
    text7: "08:41",
    overlapGroup7: "/img/map-2@2x.png",
    overlapGroup1: "/img/rectangle-106@2x.png",
    profilePicture2: "/img/profile-4@2x.png",
    view: "View",
    text9: "08:40",
    spanText1: <React.Fragment>Great we’re try and set you up and update you in this thread<br /></React.Fragment>,
    spanText2: "Cupid X Samantha",
    toolBar: "/img/tool-bar-1@2x.png",
    x1Props: x12Data,
    x5Props: x52Data,
    x6Props: x63Data,
};

const name1Data = {
    samantha18: "Samantha, 18",
};

const profile21Data = {
    nameProps: name1Data,
};

const girlMatchLearnData = {
    profile2Props: profile21Data,
};

const x92Data = {
    yeahICouldBeConv: "She’s incredible, can you set up a date for us?",
    text4: "08:41",
    className: "x9-1",
};

const x93Data = {
    yeahICouldBeConv: "Let’s do it! I’ll pick her up this saturday at 9?",
    text4: "09:41",
    className: "x10",
};

const x64Data = {
    className: "x6-3",
};

const cupidXSamanthaYesData = {
    noButIAmAt930Pm: "No, but I am at 9:30pm",
    text10: "08:41",
    sorrySarahHasntBe1: "Sorry sarah hasnt been online or seen our message yet",
    sorrySarahHasntBe2: "Sorry sarah hasnt been online or seen our message yet",
    name: "Sarah just started chatting with me! I’ll give it my best shot",
    sheDecidedToLearnMoreAboutYou: "She decided to learn more about you!",
    sheSaidShesInter: "She said she’s interested! I’m going to set up a 2 minute chat",
    areYouAvailableTonightAt9Pm: "Are you available tonight at 9pm?",
    howDidTheIntroGo: "How did the intro go?",
    youBothLikeCars: "You both like cars, what do you think about going to K1 Go-Karts? You can pick up Samantha on your way there",
    shesConfirmedDet: "She’s confirmed! Details are in your calendar. Lmk how it goes!",
    howWasTheBigDay: "How was the big day?",
    sheDoesTooImOnIt: "She does too! I’m on it ;)",
    amazingIdLoveToSeeHerAgain: "Amazing, i’d love to see her again",
    map: "/img/map-3@2x.png",
    greatShellJoinTh: "Great she’ll join this link at 9:30 for an AR intro",
    overlapGroup1: "/img/map-4@2x.png",
    joinNow: "Join Now",
    text13: "09:25",
    ar1: "/img/ar-1@2x.png",
    group1897: "/img/vision-1@2x.png",
    x91Props: x92Data,
    x92Props: x93Data,
    x6Props: x64Data,
};

const name2Data = {
    samantha18: "Samantha, 18",
};

const profile22Data = {
    className: "profile-5",
    nameProps: name2Data,
};

const trainData = {
    showUsWhatYoureLookingFor: "Show us what you’re looking for",
    appearance: "Appearance",
    number1: "9",
    compatability: "Compatability",
    number2: "3",
    overallInterestLevel: "Overall Interest Level",
    number3: "2",
    group1899: "/img/group-1899.png",
    profile2Props: profile22Data,
};

const profile32Data = {
    className: "profile-7",
};

const x41Data = {
    damnYeahLetsFindSomeoneWithA: "Damn yeah let’s find someone with a",
};

const x65Data = {
    className: "x6-4",
};

const cupidXSamanthaNoData = {
    sorrySarahHasntBe: "Sorry sarah hasnt been online or seen our message yet",
    sorrySamanthaHasnt: "Sorry Samantha hasnt been online or seen our message yet",
    name: "Samantha just started chatting with me! I’ll give it my best shot",
    sheDecidedToLearnMoreAboutYou: "She decided to learn more about you!",
    sheSaidShesNotI: "She said she’s not interested unfortunately",
    sheSaidSheItWas: "She said she it was due to distance, but we have noticed in the past she almost exclusively dates african american men over 6’ 5”",
    shouldIFindYouSo: "Should I find you someone else like her?",
    profile3Props: profile32Data,
    x4Props: x41Data,
    x6Props: x65Data,
};

const slides2Data = {
    className: "slides-1",
};

const slides3Data = {
    className: "slides-2",
};

const teachData = {
    slides1Props: slides2Data,
    slides2Props: slides3Data,
};

const profile4Data = {
    className: "profile-2",
};

const x421Data = {
    wowHeIsCuteOkayIllBite: "Wow he is cute.. okay i’ll bite....",
};

const x94Data = {
    yeahICouldBeConv: "Could we set up a VR Coffee before a date?",
    text4: "08:41",
    className: "x9-2",
};

const iconPin3Data = {
    className: "icon_pin-2",
};

const group42Data = {
    overlapGroupContainer: "/img/map@2x.png",
    profilePicture: "/img/profile-1@2x.png",
    className: "group-3",
};

const x102Data = {
    className: "x10-2",
};

const x66Data = {
    className: "x6-5",
};

const cupidXMarkYesData = {
    sorrySarahHasntBe: "Sorry sarah hasnt been online or seen our message yet",
    heySamanthaIThin: "Hey Samantha! I think I found you a pretty good match!",
    hesGotAPrettySw: "He’s got a pretty sweet ride, and likes to spend time with little cousins who have been a great “test drive” for him ;)",
    bg: "/img/bg@2x.png",
    imSoGladYoureInterested: "I’m so glad you’re interested!",
    areYouAvailableTonightAt930Pm: "Are you available tonight at 9:30 pm?",
    yesIAm: "Yes I am!",
    okayImDown: "Okay I’m down",
    soooHowWasTheDateWhoWon: "Sooo how was the date? Who won?",
    name: "Mark likes you! He wants to take you Go-Karting this Saturday, pickup @ 9",
    map: "/img/map-7@2x.png",
    profilePicture1: "/img/profile-4@2x.png",
    profilePicture2: "/img/profile-1@2x.png",
    profileProps: profile4Data,
    x42Props: x421Data,
    x9Props: x94Data,
    iconPinProps: iconPin3Data,
    group4Props: group42Data,
    x10Props: x102Data,
    x6Props: x66Data,
};

const name3Data = {
    samantha18: "Mark, 28",
    className: "name-4",
};

const guyMatchLearnData = {
    nameProps: name3Data,
};

const profile33Data = {
    className: "profile-8",
};

const x43Data = {
    damnYeahLetsFindSomeoneWithA: "She’s literally perfect, i’ll fly us to paris if need be",
    className: "x4-5",
};

const x112Data = {
    className: "x11-1",
};

const x67Data = {
    className: "x6-6",
};

const cupidXSamanthaMaybeData = {
    sorrySarahHasntBe: "Sorry sarah hasnt been online or seen our message yet",
    sorrySamanthaHasnt: "Sorry Samantha hasnt been online or seen our message yet",
    name: "Samantha just started chatting with me! I’ll give it my best shot",
    sheDecidedToLearnMoreAboutYou: "She decided to learn more about you!",
    sheSeemsToBeOnT: "She seems to be on the fence i’m still chatting with her",
    itSeemsSheMightB: "It seems she might be interested if it’s a really fancy date, at a restaurant that will likely cost over $500. Should I propose a date at Bourbon Steakhouse?",
    illGetItDone: "I’ll get it done",
    x930Tonight: "9:30 Tonight?",
    letsDoIt: "Let’s do it!",
    text20: "08:41",
    greatYoureTaking: "Great! You’re taking her to Bourbon Steakhouse (Reserved), pickup @ 9:30.",
    map: "/img/map-8@2x.png",
    profile3Props: profile33Data,
    x4Props: x43Data,
    x11Props: x112Data,
    x6Props: x67Data,
};

const x422Data = {
    wowHeIsCuteOkayIllBite: "Does he like to Rave?",
    className: "x4-7",
};

const x423Data = {
    wowHeIsCuteOkayIllBite: "Does he listen to Savant?",
    className: "x7-2",
};

const guyPitch4Data = {
    thatsAllIveGot: "That’s all i’ve got prepared, but maybe I can answer a question you might have?",
    yepHesBeenToCo: "Yep! He’s been to Coachella, Ultra, EDC, and a few others.",
    bg: "/img/bg-2@2x.png",
    yesHeLastStreame: "Yes! He last streamed his music 2 days ago",
    hisFavoriteSongTh: <React.Fragment>His favorite song this month is<br />Pirate Bay - Remix (876 plays)</React.Fragment>,
    keSbjfa1: "/img/ke-sbjfa-1@2x.png",
    typeYourMessages: "Type your messages ...",
    hardNo: "Hard No",
    setMeUp: "Set me up",
    aaaand: "aaaand?",
    x421Props: x422Data,
    x422Props: x423Data,
};

const girlPitch2Data = {
    overwatch2MercySigmaBeeSkins11: "/img/overwatch-2-mercy-sigma-bee-skins-1-1@2x.png",
    over2: "/img/over-2@2x.png",
    over1: "/img/over-1@2x.png",
    map: "/img/map-5@2x.png",
    youBothWentToThe: <React.Fragment>You both went to the Glendale car show, AlienCon and Disneyland in June <br /><br />You’d be a good team as Sigma and Mercy in competitive Overwatch.</React.Fragment>,
    hardNo: "Hard No",
    setMeUp: "Set me up",
    aaaand: "aaaand?",
};

const girlPitch3Data = {
    img_0609Abd7055511: "/img/img-0609abd70555-1-1@2x.png",
    img_Ebbe9E59289911: "/img/img-ebbe9e592899-1-1@2x.png",
    group2: "/img/sol-price-chart-2023-1@2x.png",
    profilePicture1: "/img/profile-7@2x.png",
    profilePicture2: "/img/profile-8@2x.png",
    tooBadMercyCant: <React.Fragment>Too bad mercy can’t heal the damage done on both your Solana bags in 2021.<br /><br />You both recently watched Antman and listened to the No Agenda Podcasts</React.Fragment>,
    hardNo: "Hard No",
    setMeUp: "Set me up",
    aaaand: "aaaand?",
};

const guyPitch3Data = {
    img_0609Abd7055511: "/img/img-0609abd70555-1-1@2x.png",
    img_Ebbe9E59289911: "/img/img-ebbe9e592899-1-1-1@2x.png",
    overwatch2MercySigmaBeeSkins11: "/img/overwatch-2-mercy-sigma-bee-skins-1-1-1@2x.png",
    over2: "/img/over-2-1@2x.png",
    over1: "/img/over-1-1@2x.png",
    whenHeIsntWorkin: <React.Fragment>When he isn’t working, reM4RKab1e might be on your Overwatch team as Sigma.<br /><br />You both recently watched Antman and listened to the No Agenda Podcasts</React.Fragment>,
    hardNo: "Hard No",
    setMeUp: "Set me up",
    aaaand: "aaaand?",
};

