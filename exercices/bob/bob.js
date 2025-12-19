//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let chars = Array.from(message) //décomposer la phrase en un tableau
  if(message === message.toUpperCase() && !/[a-z]/.test(message) && /[A-Z]/.test(message) && message.trim().length > 0){
    if(chars[chars.length - 1] == '?'){
      return "Calm down, I know what I'm doing!"
    }
    else{
      return "Whoa, chill out!";
    }
  }
  else if(message.trim().endsWith("?")){
    return "Sure."
  }
  else if(message.trim().length == 0){
    return "Fine. Be that way!"
  }
  else{
    return "Whatever."
  }

};
