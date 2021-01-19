(function() {
    var customers = [];

    customers.push([0 , 'img/customer-0.jpg' , 'teddy' , 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue mattis dui non malesuada. Curabitur non leo aliquet, condimentum mauris eu, ullamcorper sapien. Morbi interdum est nec volutpat aliquam. Mauris luctus scelerisque dolor quis mollis.'],
                   [1 , 'img/customer-1.jpg' , 'John'  , 'Mauris vehicula magna ut felis tempor, nec tristique ante vestibulum. Donec varius massa et rutrum blandit. Pellentesque tempus metus eu dignissim faucibus. Pellentesque placerat risus eu eros imperdiet sodales.'],
                   [2 , 'img/customer-2.jpg' , 'Sandy' , 'Cras vestibulum leo ac hendrerit malesuada. Aliquam erat volutpat. Ut fringilla elit id turpis gravida, quis hendrerit felis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim et ex at commodo.'],
                   [3 , 'img/customer-3.jpg' , 'Bravo' , 'Nullam libero enim, hendrerit non lacus eget, sagittis dictum lacus. Nulla volutpat dictum quam vitae malesuada. Pellentesque vel ultrices ante, molestie pellentesque magna. Aliquam sed vehicula tortor.'],
                   [4 , 'img/customer-4.jpg' , 'Mandy' , 'Aliquam et scelerisque elit. Etiam rutrum turpis at interdum ultricies. Sed et massa convallis, mattis odio molestie, scelerisque est. Nulla dapibus mauris quis molestie viverra. Etiam iaculis tempus rutrum. Aliquam condimentum odio a elit auctor rutrum.'],);
  
    //select both left and right button. Add event listeners
    const buttons = document.querySelectorAll('.btn');
    const profile = document.querySelector('.profile');
    const name = document.querySelector('.name');
    const review = document.querySelector('.review');

    let counter = 0 ;
  
    buttons.forEach(function(button){
      button.addEventListener('click', function(e){
        if (button.classList.contains('leftBtn')){
          counter--
          if(counter < 0){
            counter = customers.length -1
          }
        profile.src = customers[counter][1];
        name.textContent = customers[counter][2];
        review.textContent = customers[counter][3];
        }
        if (button.classList.contains('rightBtn')){
          counter++
          if(counter > customers.length -1){
            counter = 0
          }
          profile.src = customers[counter][1];
          name.textContent = customers[counter][2];
          review.textContent = customers[counter][3];
        }
      })
    })
  })();