

document.getElementById('input').addEventListener('input' , function(e){
  e.preventDefault();
  var value = e.target.value;
  var unit = document.getElementById('list').value;
  function converter(par , id){
      var par = document.getElementById(id);
      return par;
  }

    if(unit == 'kg'){
       converter(tn , 'tn').innerHTML = value /1000;
       converter(qtn, 'qtn').innerHTML = value / 100;
       converter(dkg, 'dkg').innerHTML = value / 10;
       converter(kg , 'kg').innerHTML = '';
       converter(hg, 'hg').innerHTML = value * 10;
       converter(dag, 'dag').innerHTML = value * 100;
       converter(g, 'g').innerHTML = value * 1000;
       converter(dg, 'dg').innerHTML = value * 10000;
       converter(cg, 'cg').innerHTML = value * 100000;
       converter(mg, 'mg').innerHTML = value * 1000000;
   } 
    if (unit == 'tn') {
        let qtn = document.getElementById('qtn');qtn.innerHTML = value * 10;
        let dkg = document.getElementById('dkg');
        dkg.innerHTML = value * 100;
        document.getElementById('kg').innerHTML = value * 1000
        let hg = document.getElementById('hg');
        hg.innerHTML = value * 10000;
        let dag = document.getElementById('dag');
        dag.innerHTML = value * 100000;
        let g = document.getElementById('g');
        g.innerHTML = value *   1000000;
        let dg = document.getElementById('dg');
        dg.innerHTML = value *  10000000;
        let cg = document.getElementById('cg');
        cg.innerHTML = value *  100000000;
        let mg = document.getElementById('mg');
        mg.innerHTML = value *  1000000000;
    }
    
 if (unit == 'qtn') {
     document.getElementById('tn').innerHTML = value / 10;
     document.getElementById('dkg').innerHTML = value / 100;
     document.getElementById('qtn').innerHTML = '';
     document.getElementById('kg').innerHTML  = value * 10
     document.getElementById('hg').innerHTML  = value * 100;
     document.getElementById('dag').innerHTML = value * 10000;
     document.getElementById('g').innerHTML   = value * 100000;
     document.getElementById('dg').innerHTML  = value * 1000000;
     document.getElementById('cg').innerHTML  = value * 10000000;
     document.getElementById('mg').innerHTML  = value * 100000000;
 }

 })
