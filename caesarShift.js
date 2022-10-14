var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//var code = "WKH HDVLHVW PHWKRG RI HQFLSKHULQJ D WHAW PHVVDJH LV WR UHSODFH HDFK FKDUDFWHU EB DQRWKHU XVLQJ D ILAHG UXOH, VR IRU HADPSOH HYHUB OHWWHU D PDB EH UHSODFHG EB G, DQG HYHUB OHWWHU E EB WKH OHWWHU H DQG VR RQ.";
// var code = "WIVHLVETPRERCPJZJTRESVLJVUFEFKYVIKPGVJFWTZGYVIJKFFSLKZKZJEFKLJLRCCPRJJZDGCVRJZKZJNZKYJYZWKTZGYVIJDREPFWKYVJVFKYVITZGYVIJNZCCRGGVRIYVIVZEKYVEVOKWVNDFEKYJ";

var code = "WXTK FL YKTGD, BM PTL ZKXTM FXXMBGZ RHN TGW B TF IEXTLXW MH TVVXIM MAX VHGMKTVM MH BGOXLMBZTMX MAX LMKTGZX VBKVNFLMTGVXL TM VNEIXIXK VHNGMR UTGD. TL WBLVNLLXW, B PBEE GXXW YNEE TVVXLL MH MAX UTGD MKTGLTVMBHG KXVHKWL, MAX VNKKXGM TGW KXVXGM LMTYY YBEXL, TGW TGR LNKOXBEETGVX YHHMTZX MATM RHN VTG IKHOBWX, XBMAXK YKHF MAX UTGD, MAX LMKXXML HNMLBWX HK YKHF GXBZAUHNKAHHW LMHKXL. B XQTFBGXW MAX UHQ MATM RHN YHNGW HG MAX YEHHK HY MAX OTNEM TGW GXXW MH VHKKXVM RHN HG HGX MABGZ. BM PTL GHM XFIMR. MAX BGLBWX HY MAX EBW ATW T LAXXM HY OXEENF ITIXK EBZAMER YBQXW MH BM TGW PAXG B KXFHOXW MATM B YHNGW GBGX VABGXLX VATKTVMXKL BGLVKBUXW BG T LJNTKX ITMMXKG HG MAX KXOXKLX. B MKTVXW MAXF HGMH MAX TMMTVAXW VHOXK LAXXM TGW PHNEW UX ZKTMXYNE BY RHN VHNEW TLD MAX UTGD HYYBVBTEL PAXMAXK MAXR KXVHZGBLX MAXF. BM BL IHLLBUEX MATM MAX ITIXK PTL ZENXW BG PAXG MAX UHQ PTL FTWX, BM PTL VXKMTBGER BGMXGWXW MH EHHD EBDX MATM, UNM ZBOXG MAX TULXGVX HY TGR HMAXK VENXL TM MABL IHBGM B MABGD BM BL PHKMA VAXVDBGZ BY MABL VHNEW ATOX TGR LBZGBYBVTGVX. RHN VTG VHGMTVM FX TM MAX KV; B PBEE UX FHOBGZ MAXKX MABL TYMXKGHHG TGW MAXR TKX XQIXVMBGZ T VTEE YKHF RHN MH TKKTGZX MAX XQIXGLXL YTVBEBMR MATM RHN HYYXKXW. B EHHD YHKPTKW MH RHNK KXIER. CTWX VBYKTK"

var shift = 3;

function caesarShift(shiftAmount, codeText) {
    var splitCode = codeText.split("");

    var newCode = [];

    var i, ii, iii;

    for (x = 0; x < splitCode.length; x++) {
        if (alphabets.includes(splitCode[x].toLowerCase())) {
            i = alphabets.indexOf(splitCode[x].toLowerCase());
            ii = i + shiftAmount;

            if (ii < 0) {
                ii += 26;
            } else if (ii > 26) {
                ii -= 26;
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



for(i = 1; i < 26; i++) {
    shift = i;

    console.log(caesarShift(shift, code));
    console.log("")
}