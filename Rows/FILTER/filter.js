// let jsonM = CATALOG.filter(function(e){
//    return e.Group == "M";
// });
// let jsonD = CATALOG.filter(function(e){
//    return e.Group == "D";
// });




const tabs = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]')

tabs.forEach(function (item){
    item.addEventListener('click', function(){
      this.dataset.tab
      const contentBox = document.querySelector('#'+this.dataset.tab);

      contentBoxes.forEach(function (item){
        item.classList.add('dis')
      });
      contentBox.classList.remove('dis');



    });


});

// const tabsm = document.querySelectorAll('[data-tabs]');
// const contentBoxesm = document.querySelectorAll('[data-tabs-fil]')

// tabsm.forEach(function (item){
//     item.addEventListener('click', function(){
//       this.dataset.tab
//       const contentBoxm = document.querySelector('#'+this.dataset.tab);

//       contentBoxesm.forEach(function (item){
//          item.classList.add('dis')
//       });
//       contentBoxm.classList.remove('dis');



//     });


// });

