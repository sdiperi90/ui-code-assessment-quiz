import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

export const sampleQuestions = [
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?",
    correct_answer: "Rad Mobile",
    incorrect_answers: ["Sonic The Hedgehog", "Super Mario 64", "Mega Man"]
  },
  {
    category: "Science & Nature",
    type: "boolean",
    difficulty: "easy",
    question: "Igneous rocks are formed by excessive heat and pressure.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    correct_answer: "HTC",
    incorrect_answers: ["Oculus", "Google", "Razer"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "The idea of Socialism was articulated and advanced by whom?",
    correct_answer: "Karl Marx",
    incorrect_answers: ["Vladimir Lenin", "Joseph Stalin", "Vladimir Putin"]
  },
  {
    category: "Animals",
    type: "text",
    difficulty: "medium",
    question: "What color/colour is a polar bear&#039;s skin?",
    correct_answer: "Black"
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "If a &quot;360 no-scope&quot; is one full rotation before shooting, how many rotations would a &quot;1080 no-scope&quot; be?",
    correct_answer: "3",
    incorrect_answers: ["4", "2", "5"]
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "hard",
    question: "How many zeptometres are inside one femtometre?",
    correct_answer: "1,000,000",
    incorrect_answers: ["10", "1,000,000,000", "1000"]
  },
  {
    category: "Science: Mathematics",
    type: "boolean",
    difficulty: "easy",
    question: "The &#039;Squaring the Circle&#039; problem is solvable.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  }
];
