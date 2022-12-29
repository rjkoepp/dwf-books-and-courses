// the default export must be an object whose key values are
// 1-dimensional arrays comprised of objects that possess AT LEAST
// "id" and "title" property values; author, time, and link property values are optional
// property names of the default export object may be chosen at will
const bibItems = {
  printMaterials: [
    {
      id: "SK2020",
      title: "Algorithm Design Manual",
      author: "Steven Skiena",
      time: "2020",
      link: "https://www.amazon.com/Algorithm-Design-Manual-Computer-Science/dp/3030542556",
    },
  ],
  cProgrammingLanguage: [
    {
      id: "KR1988",
      title: "C Programming Language (2nd Edition)",
      author: "Brian W. Kernighan and Dennis Ritchie",
      time: "1988",
      link: "https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628",
    },
    {
      id: "KRA1988",
      title: "The C Answer Book: Solutions to the Exercises in 'The C Programming Language' (2nd Edition)",
      author: "Clovis L. Tondo and Scott E. Gimpel",
      time: "1988",
      link: "https://www.amazon.com/Answer-Book-Solutions-Exercises-Programming/dp/0131096532",
    },
  ],
}

export default bibItems;
