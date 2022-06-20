// fukcja robota
// fukcja dodawania imienia składająca się z dwóch dużych liter i trzech liczb
// fukcja resetowania imienia

const reservedRobotTags: string[] = [];

const createRobot = () => {
  return {
    name: '',
  };
};

const createRobotName = () => {
  const words = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
  ];
  const firstWord = words[Math.floor(Math.random() * 26)].toUpperCase();
  const secendWord = words[Math.floor(Math.random() * 26)].toUpperCase();
  const number = Math.floor(Math.random() * (999 - 100));
  const robotTag = `${firstWord}${secendWord}${number}`;
  if (reservedRobotTags.includes(robotTag)) {
    createRobotName();
  } else {
    reservedRobotTags.push(robotTag);
    return robotTag;
  }
};

const robot = createRobot();

robot.name = createRobotName();
console.log(robot);
type Robot = {
  name: string;
};
const resetRobotName = (name: Robot) => {
  return (name.name = '');
};

const releasesName = () => {
  while (reservedRobotTags.length) {
    reservedRobotTags.shift();
  }
};
releasesName();
resetRobotName(robot);
console.log(reservedRobotTags);
