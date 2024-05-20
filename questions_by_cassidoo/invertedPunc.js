function add_punctuation(str) {
  str = str.split(" ");
  let first_string = str[0].split("");
  first_string.unshift("¿");
  first_string = first_string.join("");
  str = [first_string, ...str.slice(1)].join(" ");
  
  return str; 
}

function fix_inverted_punctuation(sentence) {
  const regex = /(?<=[?!])\s+(?=[¡¿A-Z])/;
  let new_sentence = sentence.split(regex);
  new_sentence = new_sentence.map((element) => {
    if (element.includes("?") && element[0] !== "¿") {
      element = add_punctuation(element);
    } else if (element.includes("!") && element[0] !== "¡") {
      element = add_punctuation(element);
    } 

    return element;
  });

  return new_sentence.join(" ");
}

function main() {
  sentence_1 = "Feliz cumpleaños!";
  sentence_2 = "Ella ya se graduó de la universidad? ¡No!";

  fix_sentence_1 = fix_inverted_punctuation(sentence_1);
  fix_sentence_2 = fix_inverted_punctuation(sentence_2);

  console.log(fix_sentence_1);
  console.log(fix_sentence_2);
}

main();
