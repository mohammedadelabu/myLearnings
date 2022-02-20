function parseCSV(input, separator, quote) {
  separator = separator || ',';
  quote = quote || '"';
  
  // Create your implementation here
    let separatorOne = '\x1D';
    let separatorTwo = '\x1E';
    let separatorThree = '\x1F';
    let newSeparatorOne = new RegExp(separatorOne, 'g');
    let newSeparatorTwo = new RegExp(separatorTwo, 'g');
    let newSeparatorThree = new RegExp(separatorThree, 'g');
    let newField = new RegExp('(?<=(^|[' + separator + '\\n]))"(|[\\s\\S]+?(?<![^"]"))"(?=($|[' + separator + '\\n]))', 'g');
    let array = [];
    input.replace(/\r/g, '').replace(/\n+$/, '').replace(newField, (match, word1, word2) => {
        return word2.replace(/\n/g, separatorOne).replace(/""/g, separatorTwo).replace(/,/g, separatorThree);
    }).split(/\n/).forEach(function(line) {
        let newRow = line.split(separator).map((line) => {
            return line.replace(newSeparatorOne, quote).replace(newSeparatorTwo, '"').replace(newSeparatorThree, ',');
        });
        array.push(newRow);
    });
    return array;
}


console.log(parseCSV(("1,2,3\n4,5,6", ",", "\""), [["1", "2", "3"], ["4", "5", "6"]]))
console.log(parseCSV(("1\t2\t3\n4\t5\t6", "\t", "\""), [["1", "2", "3"], ["4", "5", "6"]])


function parseCV(input, separator, quote) {
    separator = separator || ',';
    quote = quote || '"';
    
    // Create your implementation here
      var nSep = '\x1D';
      var qSep = '\x1E';
      var cSep = '\x1F';
      var nSepRe = new RegExp(nSep, 'g');
      var qSepRe = new RegExp(qSep, 'g');
      var cSepRe = new RegExp(cSep, 'g');
      var fieldRe = new RegExp('(?<=(^|[' + separator + '\\n]))"(|[\\s\\S]+?(?<![^"]"))"(?=($|[' + separator + '\\n]))', 'g');
      var grid = [];
      input.replace(/\r/g, '').replace(/\n+$/, '').replace(fieldRe, function(match, p1, p2) {
          return p2.replace(/\n/g, nSep).replace(/""/g, qSep).replace(/,/g, cSep);
      }).split(/\n/).forEach(function(line) {
          var row = line.split(separator).map(function(cell) {
              return cell.replace(nSepRe, quote).replace(qSepRe, '"').replace(cSepRe, ',');
          });
          grid.push(row);
      });
      return grid;
  }
  