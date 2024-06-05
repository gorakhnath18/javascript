const hero =[" thor",",loki","iron"]
const god =["ram","lakhan","hanuman"]

//hero.push(god)

//console.log(hero);
//console.log(hero[3][1]);


 //const all = hero.concat(god)
 //console.log(all);



 //use of spread
 //const all=[...hero,...god]
 //console.log(all);


 //use of flat
  const another =[1,2,3,[4,5,6],7,[4,5]]
  const realanother = another.flat(Infinity)
  console.log(realanother);

   console.log(Array.isArray("goraldskjbsdd"))
   console.log(Array.from("goraldskjbsdd"))