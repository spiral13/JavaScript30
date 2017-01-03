   const dogs = [{
       name: 'Snickers',
       age: 2
   }, {
       name: 'hugo',
       age: 8
   }];

   function makeGreen() {
       const p = document.querySelector('p');
       p.style.color = '#BADA55';
       p.style.fontSize = '50px';
   }

   // clearing
   console.clear();

   // Regular
   console.log('hello');

   // Interpolated
   console.log('Hello i am a %s string', ':)');

   // Styled
   console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');

   // warning!
   console.warn('OH NOOO');

   // Error :|
   console.error('Shiiiit ');

   // Info
   console.info('Crocodiles eat 3-4 per year');

   // Testing
   const p = document.querySelector('p');

   console.assert(p.classList.contains('ouch'), 'That\'s wrong !');

   // Viewing DOM Elements
   console.log(p);
   console.dir(p);

   // Grouping together
   dogs.forEach(dog => {
       console.group(`${dog.name}`);
       console.log(`This is ${dog.name} ! `);
       console.log(`${dog.name} is ${dog.age} years old`);
       console.log(`${dog.name} is ${dog.age * 7} dog years old`);
       console.groupEnd(`${dog.name}`);
   });

   // counting
   console.count('Wes');
   console.count('Wes');
   console.count('Wes');
   console.count('Steeve');
   console.count('Wes');
   console.count('Steeve');
   console.count('Wes');
   console.count('Wes');
   console.count('Steeve');
   console.count('Wes');
   console.count('Steeve');

   // timing

   console.time('fetching data');
   fetch('https://api.github.com/users/alexandrebourdeaudhui')
    .then(data => data.json())
   .then(data => {
       console.timeEnd('fetching data');
       console.log(data);
   })
   
   // table 
   console.table(dogs);