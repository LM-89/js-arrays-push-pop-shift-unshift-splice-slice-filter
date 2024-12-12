// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]
 
// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.
 
// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:

// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// let mainArr = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
// console.log(mainArr)
// // 1.1. Pašalinti pirmą masyvo narį.
// let task11 = mainArr.shift(1);
// console.log(task11);
// console.log(mainArr);
// //1.2. Pašalinti paskutinį masyvo narį.
// let task12 = mainArr.pop();
// console.log(task12);
// console.log(mainArr);
// // 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
// let middleElementIndex = Math.floor(mainArr.length / 2);
// console.log(middleElementIndex);
// let task13 = mainArr.splice(10, 1);
// console.log(task13);
// console.log(mainArr);
// // 1.4. Pašalinti priešpaskutinį masyvo narį.
// let oneFromEndIndex = mainArr.at(-2);
// console.log(oneFromEndIndex);
// let task14 = mainArr.splice(-2, 1);
// console.log(mainArr);
// // 1.5. Pašalinti antrą masyvo narį.
// let task15 = mainArr.splice(1, 1);
// console.log(mainArr);
// // 1.6. Pašalinti 7 ir 8 masyvo narius.
// let task16 = mainArr.splice(6, 2);
// console.log(mainArr);
// // 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
// let task17 = mainArr.splice(-6, 3);
// console.log(task17);
// console.log(mainArr);
// // 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
// let task18 = mainArr.splice(2, 1, 888)
// console.log(task18);
// console.log(mainArr);
// // 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
// let task19RemoveAdd = mainArr.splice(9, 1, 33, 789, 6543);
// console.log(task19RemoveAdd); //nurodo kuri iseme
// console.log(mainArr);         //atvaizduoja jau su pridetais 33 789 6543
// // 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
// let task20 = mainArr.splice(-1, 1, 321, 654, 987)
// console.log(mainArr);
// // 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
// let task21 = mainArr.splice(1, 0, 11)
// console.log(mainArr);
// // 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
// let task22 = mainArr.splice(13, 0, 1)
// console.log(mainArr);
// // 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
// let task23 = mainArr.splice(-1, 0, -1)
// console.log(mainArr);
// // 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
// let task24 = mainArr.splice(0, 0, 1, 2, 3)
// console.log(mainArr);
// // 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
// let task25 = mainArr.splice(23, 0, -333, -321, -312)
// console.log(mainArr);
// // 1.16. Į masyvo vidurį pridėti skaičių 0.
// let newMiddleElementIndex = Math.floor(mainArr.length / 2);
// console.log(newMiddleElementIndex);
// let task26 = mainArr.splice(13, 0, 0)
// console.log(mainArr);
// // 1.17. Pašalinti pirmą masyvo narį.
// let task27 = mainArr.shift(1)
// console.log(mainArr);
// // 1.18. Pašalinti paskutinį masyvo narį.
// let task28 = mainArr.pop();
// console.log(task28);
// console.log(mainArr);
// // 1.19. Į masyvo pradžią pridėti žodį "start".
// let task29 = mainArr.unshift('start')
// console.log(mainArr);
// // 1.20. Į masyvo pabaigą pridėti žodį "end".
// let task30 = mainArr.push('end')
// console.log(mainArr);

//---------------------------------------2 DALIS-------------------------------------------

// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:

// // 2.1. Gauti pirmą masyvo narį.
// let task31 = mainArr.slice(0, 1);
// console.log(task31);
// // 2.2. Gauti paskutinį masyvo narį.
// let task32 = mainArr.slice(-1);
// console.log(task32);
// // 2.3. Gauti antrą masyvo narį.
// let task33 = mainArr.slice(1, 2);
// console.log(task33);
// // 2.4. Gauti priešpaskutinį masyvo narį.
// let task34 = mainArr.slice(-2, -1);
// console.log(task34);
// // 2.5. Gauti aštuntą masyvo narį.
// let task35 = mainArr.slice(7, 8);
// console.log(task35);
// // 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
// let task36 = mainArr.slice(-9, -8);
// console.log(task36);
// // 2.7. Gauti vidurinį masyvo narį.
// let task37middle = mainArr.length / 2;
// console.log(task37middle);
// let task37 = mainArr.slice(13, 14);
// console.log(task37);
// // 2.8. Gauti pirmus tris masyvo narius.
// let task38 = mainArr.slice(0, 3);
// console.log(task38);
// // 2.9. Gauti paskutinius tris masyvo narius.
// let task39 = mainArr.slice(-3);
// console.log(task39);
// // 2.10. Gauti pirmus 10 masyvo narius.
// let task40 = mainArr.slice(0, 10);
// console.log(task40);
// // 2.11. Gauti paskutinius 10 masyvo narius.
// let task41 = mainArr.slice(-10);
// console.log(task41);
// // 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
// let task42 = mainArr.slice(2, 8);
// console.log(task42);
// // 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
// let task43 = mainArr.slice(-9, -4);
// console.log(task43);
// // 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
// let task44 = mainArr.slice(10, 19);
// console.log(task44);
// // 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
// let task45 = mainArr.slice(-17, -8);
// console.log(task45);
// // 2.16. Gauti visus masyvo narius išskyrus pirmą.
// let task46 = mainArr.slice(1);
// console.log(task46);
// // 2.17. Gauti visus masyvo narius išskyrus paskutinį.
// let task47 = mainArr.slice(0, -1);
// console.log(task47);
// // 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
// let task48 = mainArr.slice(5);
// console.log(task48);
// // 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
// let task49 = mainArr.slice(0, -5);
// console.log(task49);
// // 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
// let task50middle = mainArr.length / 2;
// console.log(task50middle);
// let task50 = mainArr.slice(0, 13);
// console.log(task50);
// // 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
// let task51 = mainArr.slice(14);
// console.log(task51);
// // 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
// let task52 = mainArr.slice(1,-1);
// console.log(task52);
// // 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
// let task53 = mainArr.slice(5,-3);
// console.log(task53);
// // 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
// let task54 = mainArr.slice(1, -8);
// console.log(task54);
// // 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
// let task55 = mainArr.slice(7, -1);
// console.log(task55);
// // 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
// let task56 = mainArr.slice(9, -12);
// console.log(task56);
// // 2.27. Gauti 9 narius skaičiuojant nuo 11.
// let task57 = mainArr.slice(10, 19);
// console.log(task57);
// // 2.28. Gauti 12 narių skaičiuojant nuo 8.
// let task58 = mainArr.slice(7, 19);
// console.log(task58);
// // 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
// let task59 = mainArr.slice(0, 5).concat(mainArr.slice(-6));
// console.log(task59);
// // 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
// let task60 = mainArr.slice(2, 5).concat(mainArr.slice(14, 17));
// console.log(task60);

//--------------------------------------------3 DALIS-----------------------------------
// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:

// 3.1. Gauti tik teigiamus skaičius.
// let task61FunctionMethod = mainArr.filter(function(num){
//    return num > 0});
// console.log(task61FunctionMethod);

// let task61ArrowMethod = mainArr.filter(num => num > 0);
// console.log(task61ArrowMethod);
// // 3.2. Gauti tik neigiamus skaičius.
// let task62FunctionMethod = mainArr.filter(function(num){
//     return num < 0});
// console.log(task62FunctionMethod);
 
// let task62ArrowMethod = mainArr.filter(num => num < 0);
// console.log(task62ArrowMethod);
// // 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
// let task63 = mainArr.filter(num => num % 2 === 0);
// console.log(task63);
// // 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
// let task64 = mainArr.filter(num => num % 3 === 0);
// console.log(task64);
// // 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
// let task65 = mainArr.filter(num => num % 5 === 0);
// console.log(task65);
// // 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
// let task66 = mainArr.filter(num => num % 11 === 0);
// console.log(task66);
// // 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
// let task67 = mainArr.filter(num => num % 31 === 0);
// console.log(task67);
// // 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
// let task68 = mainArr.filter(num => num % 2 === 0 && num % 3 === 0);
// console.log(task68);
// // 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
// let task69 = mainArr.filter(num => num % 3 === 0 && num % 7 === 0);
// console.log(task69);
// // 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
// let task70 = mainArr.filter(num => num % 5 === 0 && num % 9 === 0);
// console.log(task70);
// // 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
// let task71 = mainArr.filter(num => num % 5 === 0 && num % 11 === 0);
// console.log(task71);
// // 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
// let task72 = mainArr.filter(num => num % 2 === 0 && num % 8 === 0 && num % 12 === 0);
// console.log(task72);
// // 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
// let task73 = mainArr.filter(num => num % 2 === 0 || num % 13 === 0);
// console.log(task73);
// // 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
// let task74 = mainArr.filter(num => num % 3 === 0 || num % 5 === 0);
// console.log(task74);
// // 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
// let task75 = mainArr.filter(num => num % 5 === 0 || num % 6 === 0);
// console.log(task75);
// // 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
// let task76 = mainArr.filter(num => num % 7 === 0 || num % 8 === 0);
// console.log(task76);
// // 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
// let task77 = mainArr.filter(num => num % 9 === 0 || num % 13 === 0);
// console.log(task77);
// // 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
// let task78 = mainArr.filter(num => num % 2 === 0 || num % 3 === 0 || num % 5 === 0);
// console.log(task78);
// // 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
// let task79 = mainArr.filter(num => num % 5 === 0 || num % 7 === 0 || num % 9 === 0);
// console.log(task79);
// // 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
// let task80 = mainArr.filter(num => num % 7 === 0 || num % 8 === 0 || num % 11 === 0);
// console.log(task80);
// // 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
// let task81 = mainArr.filter(num => num % 9 === 0 || num % 12 === 0 || num % 13 === 0);
// console.log(task81);
// // 3.22. Gauti tik skaičius, kurie yra didesni už 100.
// let task82 = mainArr.filter(num => num > 100);
// console.log(task82);
// // 3.23. Gauti tik skaičius, kurie yra didesni už 555.
// let task83 = mainArr.filter(num => num > 555);
// console.log(task83);
// // 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
// let task84 = mainArr.filter(num => num >= 888);
// console.log(task84);
// // 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
// let task85 = mainArr.filter(num => num >= 6789);
// console.log(task85);
// // 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
// let task86 = mainArr.filter(num => num < 50);
// console.log(task86);
// // 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
// let task87 = mainArr.filter(num => num < 1000);
// console.log(task87);
// // 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
// let task88 = mainArr.filter(num => num <= -1);
// console.log(task88);
// // 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
// let task89 = mainArr.filter(num => num <= -5564);
// console.log(task89);
// // 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
// let task90 = mainArr.filter(num => num < 1000 && num > 500);
// console.log(task90);
// // 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
// let task91 = mainArr.filter(num => num < 100 && num > 0);
// console.log(task91);
// // 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
// let task92 = mainArr.filter(num => num < 0 && num > -50);
// console.log(task92);
// // 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
// let task93 = mainArr.filter(num => num <= 0 && num > -100);
// console.log(task93);
// // 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
// let task94 = mainArr.filter(num => num >= 0 && num < 55);
// console.log(task94);
// // 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
// let task95 = mainArr.filter(num => num >= 444 && num <= 654);
// console.log(task95);
// // 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
// let task96 = mainArr.filter(num => num > 0 && num % 2 === 0);
// console.log(task96);
// // 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
// let task97 = mainArr.filter(num => num > 0 && num % 3 === 0);
// console.log(task97);
// // 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
// let task98 = mainArr.filter(num => num < 0 && num % 4 === 0);
// console.log(task98);
// // 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
// let task99 = mainArr.filter(num => num < 0 && num % 111 === 0);
// console.log(task99);
// // 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
// let task100 = mainArr.filter(num => num > 500 && num % 2 === 0);
// console.log(task100);
// // 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
// let task101 = mainArr.filter(num => num > 1000 && num % 3 === 0);
// console.log(task101);
// // 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
// let task102 = mainArr.filter(num => num < 1000 && num % 9 === 0);
// console.log(task102);
// // 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
// let task103 = mainArr.filter(num => num < 500 && num % 2 === 0);
// console.log(task103);
// // 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
// let task104 = mainArr.filter(num => num >= 33 && num % 3 === 0);
// console.log(task104);
// // 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
// let task105 = mainArr.filter(num => num >= 444 && num % 12 === 0);
// console.log(task105);
// // 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
// let task106 = mainArr.filter(num => num <= 155 && num % 5 === 0);
// console.log(task106);
// // 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
// let task107 = mainArr.filter(num => num <= -333 && num % 9 === 0);
// console.log(task107);
// // 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
// let task108 = mainArr.filter(num => num > 100 && num < 500 && num % 5 === 0);
// console.log(task108);
// // 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
// let task109 = mainArr.filter(num => num >= 888 && num < 1000 && num % 2 === 0);
// console.log(task109);
// // 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
// let task110 = mainArr.filter(num => num <= 888 && num >= -333 && num % 3 === 0 && num !== 0);
// console.log(task110);

//-----------------------------------4 DALIS--------------------------

let mainArr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'];
console.log(mainArr);

// // 3.51. Gauti tik skaičius.
// let task1 = mainArr.filter(Number.isInteger);
// console.log(task1);

// // 3.52. Gauti tik tekstus (string).
// let task2 = mainArr.filter(str => isNaN(str));
// console.log(task2);

// // 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
// let task3 = mainArr.filter((str) => isNaN(str) && str.length > 5);
// console.log(task3);

// // 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
// let task4 = mainArr.filter((str) => isNaN(str) && str.length <= 5);
// console.log(task4);

// // 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
// let task5 = mainArr.filter((str) => isNaN(str) && str.length < 7);
// console.log(task5);

// // 3.56. Gauti tik tekstus (string), kurie turi raidę t.
// let task6 = mainArr.filter((str) => isNaN(str) && str.includes('t'));
// console.log(task6);

// // 3.57. Gauti tik tekstus (string), kurie turi raidę y.
// let task7 = mainArr.filter((str) => isNaN(str) && str.includes('y'));
// console.log(task7);

// // 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
// let task8LetterE = mainArr.filter((str) => isNaN(str) && str.includes('e'));
// let task8LetterA = mainArr.filter((str) => isNaN(str) && str.includes('a'));
// let task8 = task8LetterA.concat(task8LetterE);
// console.log(task8);

// // 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
// let task9 = mainArr.filter((str) => isNaN(str) && str.includes('t' && 'i'));
// console.log(task9);

// // 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
// let task10 = mainArr.filter((str) => isNaN(str) && str.includes('t') && !str.includes('k'));
// console.log(task10);

// // 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
// let task11 = mainArr.filter((str) => isNaN(str) && str.includes('a') && !str.includes('s'));
// console.log(task11);

// // 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
// let task12 = mainArr.filter(str => isNaN(str) && (str.match(/t/g) || []).length > 1);                      
// console.log(task12);

// // 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
// let task13 = mainArr.filter((str) => isNaN(str) && str.includes('st'));
// console.log(task13);

// // 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
// let task14 = mainArr.filter((str) => isNaN(str) && str.includes('nd'));
// console.log(task14);

// // 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
// let task15 = mainArr.filter((str) => isNaN(str) && !str.includes('s'));
// console.log(task15);

// // 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
// let task16 = mainArr.filter((str) => isNaN(str) && !str.includes('t'));
// console.log(task16);

// // 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
// let task17 = mainArr.filter((str) => isNaN(str) && !str.includes('r') && !str.includes('l'));
// console.log(task17);

// // 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
// let task18 = mainArr.filter(str => isNaN(str) && /^[0-9]/.test(str)); 
// console.log(task18);

// // 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
// let task19 = mainArr.filter(str => isNaN(str) && /^['s']/.test(str));  // Tikrina, ar tekstas prasideda raide s    
// console.log(task19);

// // 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
// let task20 = mainArr.filter(str => /^['o']/.test(str));                // Tikrina, ar tekstas prasideda raide o    
// console.log(task20);

// // 3.71. Gauti tik tekstus (string), kurie baigiasi raide d.
// let task21 = mainArr.filter(str => /d$/.test(str));                    // Tikrina, ar tekstas baigiasi raide d   
// console.log(task21);

// // 3.72. Gauti tik tekstus (string), kurie baigiasi raide s.
// let task22 = mainArr.filter(str => /s$/.test(str));                    // Tikrina, ar tekstas baigiasi raide s 
// console.log(task22);

// // 3.73. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
// let task23 = mainArr.filter((str) => isNaN(str) && (str.length > 4) && str.includes('o'));
// console.log(task23);

// // 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// let task24 = mainArr.filter((str) => (str.length >= 5) && str.includes('a'));
// console.log(task24);

// // 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
// let task25 = mainArr.filter((str) => str.length % 2 === 0);
// console.log(task25);

// // 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
// let task26 = mainArr.filter((str) => isNaN(str) && str.length % 2 !== 0 && str.includes('s'));
// console.log(task26);

// // 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
// let task27 = mainArr.filter((str) => str[2] === 'a');
// console.log(task27);

// // 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
// let task28 = mainArr.filter((str) => str[3] === 'l');
// console.log(task28);

// // 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
// let task29 = mainArr.filter((str) => str[4] !== 't' && str.length > 4);
// console.log(task29);

// // 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
// let task30 = mainArr.filter((str) => str[0] !== 'e' && str.length < 6 && !/^[0-9]/.test(str));
// console.log(task30);

// ----------------------------5 DALIS-----------------------------------------------------------

// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:

// 4.1. Tik skaičius (number tipo duomenis).
// let numbersOnly = [];
// for (let i = 0; i < mainArr.length; i++) {
//     if (typeof mainArr[i] === "number") {
//         numbersOnly.push(' ' + mainArr[i]);
//     }
// }
// console.log('For: ' + numbersOnly);

// let task1 = [];
// mainArr.map(num => {
//     if (typeof num === 'number') {
//         task1.push(' ' + num)
//     }
// });
// console.log('Map: ' + task1);

// 4.2. Tik tekstą (string tipo duomenis).

// let textOnly = [];
// for (let i = 0; i < mainArr.length; i++) {
//     if (typeof mainArr[i] !== "number") {
//         textOnly.push(' ' + mainArr[i]);
//     }
// }
// console.log('For: ' + textOnly);

// let task2 = [];
// mainArr.map(str => {
//     if (typeof(str) !== 'number') {
//         task2.push(' ' + str)       
//     }
// });
// console.log('Map: ' + task2);

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
// let numbersOnly = [];
// for (let i = 0; i < mainArr.length; i++) {
//     if (typeof mainArr[i] === "number") {
//         numbersOnly.push(' ' + mainArr[i] **4);
//     }
// }
// console.log('For: ' + numbersOnly);

// let task3 = [];
// mainArr.map(num => {
//     if (typeof num === 'number') {
//         task3.push(' ' + num**4)
//     }
// });
// console.log('Map: ' + task3);

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
// let numbersOnly = [];
// for (let i = 0; i < mainArr.length; i++) {
//     if (typeof mainArr[i] === "number") {
//         numbersOnly.push(mainArr[i] + 55);
//     }
// }
// console.log(numbersOnly);

// let task4 = [];
// mainArr.map(num => {
//     if (typeof num === 'number') {
//         task4.push(num + 55)
//     }
// });
// console.log(task4);

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
// let numbersOnly = [];
// for (let i = 0; i < mainArr.length; i++) {
//     if (typeof mainArr[i] === "number") {
//         numbersOnly.push(mainArr[i] / 2);
//     }
// }
// console.log(numbersOnly);

// let task4 = [];
// mainArr.map(num => {
//     if (typeof num === 'number') {
//         task4.push(num / 2)
//     }
// });
// console.log(task4);


// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
// let numbersOnly = [];
// for (let i = 0; i < mainArr.length; i++) {
//     if (typeof mainArr[i] === "number") {
//         numbersOnly.push('Number: ' + mainArr[i]);
//     }
// }
// console.log(numbersOnly);

// let task4 = [];
// mainArr.map(num => {
//     if (typeof num === 'number') {
//         task4.push('Number: ' + num)
//     }
// });
// console.log(task4);


// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.
// let numbersOnly = [];
// for (let i = 0; i < mainArr.length; i++) {
//     if (typeof mainArr[i] === "number") {
//         numbersOnly.push(`Index: ${i}, Number: ${mainArr[i]}`);
//     }
// }
// console.log(numbersOnly);

// let task4 = [];
// mainArr.forEach((num, index) => {
//     if (typeof num === 'number') {
//         task4.push(`Index: ${index}, Number: ${num}`);
//     }
// });
// console.log(task4);

// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
// let numbersOnly = [];
// for (let i = 0; i < mainArr.length; i++) {
//     if (typeof mainArr[i] === "number") {
//         numbersOnly.push(mainArr[i] * i);
//     }
// }
// console.log(numbersOnly);

// let task1 = [];
// mainArr.map((num, index) => {
//     if (typeof num === 'number') {
//         task1.push(num * index)
//     }
// });
// console.log(task1);

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.

// let multipliedFromPrevious = [];
// for (let i = 0; i < mainArr.length; i++) {
//   if (typeof mainArr[i] === 'number') {
//     let previousNumber = multipliedFromPrevious[multipliedFromPrevious.length - 1] || 1; // Ankstesnis skaičius arba 1, jei pirmas elementas
//     multipliedFromPrevious.push(mainArr[i] * previousNumber);
//   }
// }
// console.log(multipliedFromPrevious);

// let multipliedFromPrevious = [];
// mainArr.forEach((num) => {
//   if (typeof num === 'number') {
//     let previousNumber = multipliedFromPrevious[multipliedFromPrevious.length - 1] || 1; // Ankstesnis skaičius arba 1, jei pirmas elementas
//     multipliedFromPrevious.push(num * previousNumber);
//   }
// });
// console.log(multipliedFromPrevious);


// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
// let numbersOnly = [];
// for (let i = 0; i < mainArr.length; i++) {
//     if (typeof mainArr[i] === "number" && mainArr[i] * 5 > 350) {
//         numbersOnly.push(mainArr[i]);
//     }
// }
// console.log(numbersOnly);

// let task1 = [];
// mainArr.map((num) => {
//     if (typeof num === 'number' && num * 5 > 350) {
//         task1.push(num)
//     }
// });
// console.log(task1);


// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".

// let textOnly = [];
// for (let i = 0; i < mainArr.length; i++) {
//   if (typeof mainArr[i] === 'string') { 
//     textOnly.push(`${mainArr[i]} has ${mainArr[i].length} symbols`);
//   }
// }
// console.log(textOnly);

// let task2 = [];
// mainArr.map(str => {
//     if (typeof(str) !== 'number') {
//         task2.push(`${str} has ${str.length} symbols`)       
//     }
// });
// console.log(task2);


// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".

// let separatedSymbols = [];

// for (let i = 0; i < mainArr.length; i++) {
//   if (typeof mainArr[i] === 'string') {
//     let transformed = mainArr[i]
//       .toUpperCase()                                // Paverčiame visas raides didžiosiomis
//       .split('')                                    // Išskaidome tekstą į simbolius
//       .join('-');                                   // Sujungiame simbolius su brūkšneliais
//     separatedSymbols.push(transformed);
//   }
// }
// console.log(separatedSymbols);

// let separatedSymbols = [];
// mainArr.forEach((str) => {
//   if (typeof str === 'string') {
//     let transformed = str
//       .toUpperCase()       // Paverčiame visas raides didžiosiomis
//       .split('')           // Išskaidome tekstą į simbolius
//       .join('-');          // Sujungiame simbolius su brūkšneliais
//     separatedSymbols.push(transformed);
//   }
// });
// console.log(separatedSymbols);


// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";

// let transformedText = [];
// for (let i = 0; i < mainArr.length; i++) {
//   if (typeof mainArr[i] === 'string') {
//     let newWord = mainArr[i]
//       .split('')                                                        // Išskaidome tekstą į simbolius
//       .map((char, index) => (index === 0 || index === 2 ? '_' : char))  // Keičiam 1 ir 3 simbolį
//       .join('');                                                        // Sujungiame simbolius atgal į žodį
//     transformedText.push(newWord);
//   }
// }
// console.log(transformedText);


// let transformedText = [];
// mainArr.forEach((str) => {
//   if (typeof str === 'string') {
//     let newWord = str
//       .split('')                                                        // Išskaidome tekstą į simbolius
//       .map((char, index) => (index === 0 || index === 2 ? '_' : char))  // Keičiam 1 ir 3 simbolį
//       .join('');                                                        // Sujungiame simbolius atgal į žodį
//     transformedText.push(newWord);
//   }
// });
// console.log(transformedText);

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
// let reversedText = [];
// for (let i = 0; i < mainArr.length; i++) {
//   if (typeof mainArr[i] === 'string') {
//     let reversed = mainArr[i]
//       .split('')                                                         // Išskaidome tekstą į simbolius
//       .reverse()                                                         // Apverčiame simbolius
//       .join('');                                                         // Sujungiame simbolius atgal į žodį
//     reversedText.push(reversed);
//   }
// }
// console.log(reversedText);


// let reversedText = [];
// mainArr.forEach((str) => {
//   if (typeof str === 'string') {
//     let reversed = str
//       .split('')                                                            // Išskaidome tekstą į simbolius
//       .reverse()                                                            // Apverčiame simbolius
//       .join('');                                                            // Sujungiame simbolius atgal į žodį
//     reversedText.push(reversed);
//   }
// });
// console.log(reversedText);


// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".

// let definedPlace = [];
// for (let i = 0; i < mainArr.length; i++) {
//   if (typeof mainArr[i] === 'string') {
//     let previousElement = mainArr[i - 1] !== undefined ? mainArr[i - 1] : 'no previous';
//     let nextElement = mainArr[i + 1] !== undefined ? mainArr[i + 1] : 'no next';
//     definedPlace.push(`"${mainArr[i]}" is between ${previousElement} and ${nextElement} in the array`);
//   }
// }
// console.log(definedPlace);


// let definedPlace = [];
// mainArr.forEach((str, index) => {
//   if (typeof str === 'string') {
//     let previousElement = mainArr[index - 1] !== undefined ? mainArr[index - 1] : 'no previous';
//     let nextElement = mainArr[index + 1] !== undefined ? mainArr[index + 1] : 'no next';
//     definedPlace.push(`"${str}" is between ${previousElement} and ${nextElement} in the array`);
//   }
// });
// console.log(definedPlace);
