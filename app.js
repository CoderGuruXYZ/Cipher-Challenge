var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//var code = "WKH HDVLHVW PHWKRG RI HQFLSKHULQJ D WHAW PHVVDJH LV WR UHSODFH HDFK FKDUDFWHU EB DQRWKHU XVLQJ D ILAHG UXOH, VR IRU HADPSOH HYHUB OHWWHU D PDB EH UHSODFHG EB G, DQG HYHUB OHWWHU E EB WKH OHWWHU H DQG VR RQ.";
var code = "WIVHLVETPRERCPJZJTRESVLJVUFEFKYVIKPGVJFWTZGYVIJKFFSLKZKZJEFKLJLRCCPRJJZDGCVRJZKZJNZKYJYZWKTZGYVIJDREPFWKYVJVFKYVITZGYVIJNZCCRGGVRIYVIVZEKYVEVOKWVNDFEKYJ";

var shift = 1;

function codeBreak(shiftAmount, codeText) {
    var splitCode = codeText.split("");

    var newCode = [];

    var i, ii, iii;

    for (x = 0; x < splitCode.length; x++) {
        if (alphabets.includes(splitCode[x].toLowerCase())) {
            i = alphabets.indexOf(splitCode[x].toLowerCase());
            ii = i + shiftAmount;

            if (ii < 0) {
                ii += 26;
            } else if (ii > 25) {
                ii -= 25;
            }

            if (splitCode[x] == splitCode[x].toLowerCase()) {
                iii = alphabets[ii].toLowerCase();
            } else {
                iii = alphabets[ii].toUpperCase();
            }
        } else {
            iii = splitCode[x];
        }

        newCode.push(iii);
    }

    var finalCode = newCode.join("");

    return finalCode;
}

console.log(codeBreak(shift, code));